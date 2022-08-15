import { useState, useEffect } from "react";
import { useSnapshot } from "valtio";
import { store, signOut } from "@firebase-api";
import SignInEmail from "@components/SignInEmail";
import SignInGoogle from "@components/SignInGoogle";

export default function User() {
  const { currentUser, userStatus } = useSnapshot(store);

  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  console.log("----currentUser", currentUser?.email);

  if (userStatus === "unauthenticated") {
    return (
      <>
        <SignInEmail />
        <SignInGoogle />
      </>
    );
  }

  return (
    <article>
      <h1>Signed in as {currentUser.email}</h1>
      <button onClick={() => signOut()}>Sign out</button>
    </article>
  );
}
