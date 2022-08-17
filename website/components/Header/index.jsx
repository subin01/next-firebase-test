import { Suspense } from "react";
import { useSnapshot } from "valtio";
import { store, signOut } from "@firebase-api";
import useIsMounted from "@hooks/use-is-mounted";

export default function Header() {
  const isMounted = useIsMounted();
  const { currentUser, userStatus } = useSnapshot(store);

  return (
    <header>
      <h2>App</h2>
      {isMounted && userStatus === "authenticated" && (
        <div>
          Welcome {currentUser?.email}
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      )}
    </header>
  );
}
