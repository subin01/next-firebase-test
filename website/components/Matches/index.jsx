import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { firebaseApp, store } from "@firebase-api";
import { getFirestore, collection, doc } from "firebase/firestore";

export default function Matches() {
  const [allMatches, loadingMatches, errorMatches] = useCollectionData(
    collection(getFirestore(firebaseApp), "match")
  );
  if (loadingMatches) return <pre>Loading Matches...</pre>;
  if (errorMatches) return <pre>Error Loading Matches!</pre>;

  return (
    <article>
      <h2>Matches</h2>
      <pre> {JSON.stringify(allMatches)}</pre>
    </article>
  );
}
