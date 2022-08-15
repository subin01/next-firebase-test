import { useEffect } from "react";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { firebaseApp } from "@firebase-api";
export default function FCM() {
  function initFCM() {
    //Create ID @ https://console.firebase.google.com/project/sp-next-firebase-dev/settings/cloudmessaging/
    const VAPID_KEY =
      "BBd1Sv4ZEauxp6jgM-r-bhhjMZM9UGFrzQdD2Ouvn11Gd3ZPVNbWmjdhiIswVt-LnESvfMDSkBcVKj8gi9CeWks";

    //Initialize Firebase Cloud Messaging and get a reference to the service
    const messaging = getMessaging(firebaseApp);
    getToken(messaging, { vapidKey: VAPID_KEY })
      .then((currentToken) => {
        if (currentToken) {
          // Send the token to your server and update the UI if necessary
          // ...
          console.log("currentToken", currentToken);
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

    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("Notification permission granted.");
      }
    });

    onMessage(messaging, (payload) => {
      console.log("Message received. ", payload);
      // ...
    });
  }

  useEffect(() => {
    initFCM();
  }, []);

  return <article>FCM</article>;
}
