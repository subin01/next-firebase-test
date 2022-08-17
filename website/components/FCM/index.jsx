import { useEffect, useState } from "react";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { firebaseApp, store } from "@firebase-api";
export default function FCM() {
  const [deviceToken, setDeviceToken] = useState("");

  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
    } else {
      console.log("Notification permission:", permission);
    }
  });

  //Create ID @ https://console.firebase.google.com/project/sp-next-firebase-dev/settings/cloudmessaging/
  const VAPID_KEY = process.env.NEXT_PUBLIC_VAPID_KEY;
  //Initialize Firebase Cloud Messaging and get a reference to the service
  const messaging = getMessaging(firebaseApp);
  getToken(messaging, { vapidKey: VAPID_KEY })
    .then((currentToken) => {
      if (currentToken) {
        // Send the token to your server and update the UI if necessary
        // ...
        console.log("currentToken", currentToken);
        setDeviceToken(currentToken);
        store.deviceToken = currentToken;
      } else {
        // Show permission request UI
        console.log(
          "No registration token available. Request permission to generate one."
        );
        // ...
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      // ...
    });

  onMessage(messaging, (payload) => {
    console.log("Message received. ", payload);
    store.notifications = payload.notification;
    // ...
  });

  return (
    <article>
      FCM
      <div>
        deviceToken: <br></br>
        <textarea value={deviceToken}></textarea>
      </div>
    </article>
  );
}
