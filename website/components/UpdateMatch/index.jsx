import { useState } from "react";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { firebaseApp, store, db } from "@firebase-api";
import { useSnapshot } from "valtio";
import {
  getFirestore,
  collection,
  arrayUnion,
  doc,
  setDoc,
} from "firebase/firestore";
import useIsMounted from "@hooks/use-is-mounted";

export default function UpdateMatch({ id, onEditComplete }) {
  const isMounted = useIsMounted();
  const [favStatus, setFavStatus] = useState("Add To Favourite");

  const { deviceToken } = useSnapshot(store);
  const [match, loadingMatch, errorMatch] = useDocumentData(
    doc(getFirestore(firebaseApp), "match", id)
  );
  const [status, setStatus] = useState("");

  if (!isMounted || !id) {
    return null;
  }

  if (loadingMatch) return <pre>Loading Matches...</pre>;
  if (errorMatch) return <pre>Error Loading Matches!</pre>;

  const onSave = async (status) => {
    await setDoc(
      doc(getFirestore(firebaseApp), "match", id),
      {
        status,
      },
      { merge: true }
    );
    onEditComplete();
  };

  const onAddToFav = async () => {
    setFavStatus("Adding...");
    if (deviceToken === "") {
      alert("Sorry, No device token!");
      return;
    }

    await setDoc(
      doc(db, "gameRooms", id),
      {
        fcmTokens: arrayUnion(deviceToken),
      },
      { merge: true }
    );
    setFavStatus("Added Favourite");
  };

  return (
    <article>
      <button onClick={() => router.push("/")}> Back</button>
      <h2>
        Edit Match <button onClick={onAddToFav}>{favStatus}</button>
      </h2>
      <div>{JSON.stringify(match)}</div>
      <hr></hr>
      <ul>
        <li>
          <strong>{match.name}</strong>
        </li>
        <li>
          Status:{" "}
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Scheduled">Scheduled</option>
            <option value="Ready">Ready</option>
            <option value="Started">Started</option>
            <option value="Selection">Selection</option>
            <option value="Finished">Finished</option>
          </select>
        </li>
        <li>
          {" "}
          <button onClick={() => onSave(status)}>Save</button>
        </li>
      </ul>
    </article>
  );
}
