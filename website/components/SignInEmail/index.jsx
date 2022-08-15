import { useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  // useSignInWithApple,
} from "react-firebase-hooks/auth";
import { auth } from "@firebase-api";
import { store } from "@firebase-api";

const SignInEmail = () => {
  const [email, setEmail] = useState("username1@user.com");
  const [password, setPassword] = useState("username1");
  const [isSigningIn, setIsSigningIn] = useState(false);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // console.log("emailUser------------", user?.user);
  // console.log("userApple------------", userApple);

  // if (error) {
  //   return (
  //     <div>
  //       <p>Error: {error.message}</p>
  //     </div>
  //   );
  // }
  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  const onSignIn = () => {
    setIsSigningIn(true);
    signInWithEmailAndPassword(email, password);
  };

  return (
    <article>
      <h1>Sign In</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={onSignIn} disabled={isSigningIn}>
        {isSigningIn ? "Signing in" : "Sign In"}
      </button>
    </article>
  );
};

export default SignInEmail;
