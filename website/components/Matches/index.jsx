import { useRouter } from "next/router";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { useState } from "react";
import { firebaseApp, store } from "@firebase-api";
import { getFirestore, collection, doc } from "firebase/firestore";
import useIsMounted from "@hooks/use-is-mounted";
import UpdateMatch from "@components/UpdateMatch";

export default function Match() {
  const isMounted = useIsMounted();
  const router = useRouter();
  const [editId, setEditId] = useState(null);
  const [allMatches, loadingMatches, errorMatches] = useCollectionData(
    collection(getFirestore(firebaseApp), "match")
  );
  const [match, loadingMatch, errorMatch] = useDocumentData(
    doc(getFirestore(firebaseApp), "match", "RM036fHjoeHI4NO0WHmQ")
  );
  if (!isMounted) return;
  if (loadingMatches) return <pre>Loading Matches...</pre>;
  if (errorMatches) return <pre>Error Loading Matches!</pre>;

  const onEditComplete = () => {
    setEditId(null);
  };

  return (
    <>
      <article>
        <h2>Matches</h2>
        {JSON.stringify(match, 2, null)}
        {/* <pre> {JSON.stringify(allMatches)}</pre> */}
        <ul className="table">
          {allMatches.map((match) => (
            <li key={match.id}>
              <b>{match.name}</b>
              {match.status}
              <button onClick={() => setEditId(match.id)}>Edit</button>
            </li>
          ))}
        </ul>
      </article>

      {editId && <UpdateMatch id={editId} onEditComplete={onEditComplete} />}
    </>
  );
}
