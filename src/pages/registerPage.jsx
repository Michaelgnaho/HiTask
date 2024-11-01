import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth, db } from "../firebaseConfig";
import {setDoc , doc } from "firebase/firestore"
import {toast} from "react-toastify"
import SignInGoogle from "../components/SignInGoogle"
import { createUserWithEmailAndPassword, updateProfile, } from "firebase/auth";
// signInWithPopup, GoogleAuthProvider 
// import { ref, set } from "firebase/database";
import g50 from '../assets/g50.png';
import highTaskLogo from "../assets/hitask_logo.png";

function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // const googleProvider = new GoogleAuthProvider();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(""); // Reset error state

    // Validation checks
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user)
if(user){
  // Store user data in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        fname: firstName,
        lname:lastName,
        userEmail: email,
        createdAt: new Date().toISOString()
      });

}

      // Save the first name to the user profile
      await updateProfile(user, { displayName: `${firstName} ${lastName}` });

      // Store user data in the Realtime Database
      // await set(ref(db, `users/${user.uid}`), {
      //   firstName,
      //   lastName,
      //   email,
      //   createdAt: new Date().toISOString()
      // });

      // Clear form and navigate
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      
      // Use replace to prevent going back to registration page
      toast.success("Registration is sucessful",{
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
       
      });
      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Error during registration:", error);
      
      // Handle specific Firebase authentication errors
      switch (error.code) {
        case 'auth/email-already-in-use':
          setError("Email is already registered. Please use a different email or log in.");
          break;
        case 'auth/invalid-email':
          setError("Invalid email address. Please check and try again.");
          break;
        case 'auth/weak-password':
          setError("Password is too weak. Please choose a stronger password.");
          break;
        default:
          setError("Registration failed. Please try again.");
      }
    }
  };

  // const handleGoogleSignIn = async () => {
  //   setError(""); // Reset error state

  //   try {
  //     const result = await signInWithPopup(auth, googleProvider);
  //     const user = result.user;

  //     // Store user data in the Realtime Database if new user
  //     if (result.additionalUserInfo.isNewUser) {
  //       const [firstName, lastName] = (user.displayName || "").split(" ");
  //       await set(ref(db, `users/${user.uid}`), {
  //         firstName: firstName || "",
  //         lastName: lastName || "",
  //         email: user.email,
  //         createdAt: new Date().toISOString()
  //       });
  //     }

  //     // Navigate to dashboard and replace current history entry
  //     navigate("/dashboard", { replace: true });
  //   } catch (error) {
  //     console.error("Error during Google sign-in:", error);
      
  //     // Handle specific Google sign-in errors
  //     switch (error.code) {
  //       case 'auth/popup-closed-by-user':
  //         setError("Google sign-in was cancelled.");
  //         break;
  //       case 'auth/cancelled-popup-request':
  //         setError("Sign-in popup was blocked. Please allow popups and try again.");
  //         break;
  //       default:
  //         setError("Google sign-in failed. Please try again.");
  //     }
  //   }
  // };

  return (
    <div className="relative bg-gradient-to-r from-slate-100 to-white min-h-screen flex items-center justify-center m-0 p-0">
      <div className="absolute ml-[100px] sm:hidden" style={{ backgroundImage: `url(${g50})` }}></div>
      
      <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center">
        <div className="flex item-start justify-start">
          <img src={highTaskLogo} alt="HITask Logo" className="mr-2" width="40" height="40" />
          <span className="text-2xl text-black font-bold">HITask</span>
        </div>
        <nav className="flex">
          <Link to="/login" className="text-gray-700 text-[20px] font-bold mr-5 pt-2">
            Log In
          </Link>
        </nav>
      </div>

      <div className="p-10 flex flex-col shadow-lg w-full mt-[100px] mb-4 justify-center items-center">
        <h1 className="text-2xl text-black font-bold mb-4 text-center">Welcome to HITask</h1>
        <p className="text-gray-600 mb-8 text-center">
          Securely update your personal details, manage your preferences, and ensure your profile is always up to date.
        </p>

        {/* Display error message if exists */}
        {error && (
          <div className="w-full sm:w-[500px] mb-4 p-3 bg-red-100 text-red-700 rounded-md text-center">
            {error}
          </div>
        )}

        <div className="flex flex-col items-center">
          <form onSubmit={handleSignUp} className="w-full sm:w-[500px] ml-auto">
          <div className="mb-4">
              <label className="block text-gray-700 mb-2">Enter your First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full text-black bg-white px-4 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Enter your Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-2 text-black bg-white border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Enter your Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 text-black bg-white border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Enter your Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 text-black bg-white border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Confirm your Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 text-black bg-white border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md">
              Sign Up
            </button>
          </form>

          <SignInGoogle/>
          
        </div>

        <p className="text-center text-gray-600 mt-4">
          Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;