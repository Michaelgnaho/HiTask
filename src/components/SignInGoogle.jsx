import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { setDoc, doc } from "firebase/firestore";
import { FaGoogle } from "react-icons/fa";

function SignInGoogle() {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if (user) {
        await setDoc(doc(db, 'users', user.uid), {
          fname: user.displayName,
          userEmail: user.email,
          photo: user.photoURL,
          createdAt: new Date().toISOString(),
        });
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  return (
    <div className='w-[20rem]'>
      <button
        onClick={handleGoogleSignIn}
        className="mt-4 w-full bg-red-500 text-white py-2 rounded-md flex justify-center items-center hover:bg-red-600 transition-colors"
      >
        <FaGoogle className="mr-2" /> Sign In with Google
      </button>
    </div>
  );
}

export default SignInGoogle;
