import { Suspense } from "react";
import { useSnapshot } from "valtio";
import { store, signOut } from "@firebase-api";

export default function Header() {
  const { currentUser, userStatus } = useSnapshot(store);

  return (
    <header>
      <h2>App v2</h2>
      {userStatus === "authenticated" && (
        <div>
          Welcome {currentUser?.email}
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      )}
    </header>
  );
}
