import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "@firebase-api";

const SignInGoogle = () => {
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);

  // console.log("userGoogle------------", userGoogle);
  // console.log("userApple------------", userApple);

  // if (errorGoogle) {
  //   return (
  //     <div>
  //       <p>Error: {error.message}</p>
  //     </div>
  //   );
  // }
  // if (loadingGoogle) {
  //   return <p>Loading...</p>;
  // }

  return (
    <article>
      <h1>Google Sign In</h1>
      <button onClick={() => signInWithGoogle()}>Google sign in</button>
      {/* <button onClick={signInWithApple}>Apple sign in</button> */}
    </article>
  );
};

export default SignInGoogle;
