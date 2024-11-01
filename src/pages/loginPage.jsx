import { Link, useNavigate } from "react-router-dom";
import { auth, } from "../firebaseConfig";
// googleProvider, signInWithPopup 
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import g50 from '../assets/g50.png';
import highTaskLogo from "../assets/hitask_logo.png";
import {toast} from "react-toastify"
import SignInGoogle from "../components/SignInGoogle"


function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize navigate


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard", { replace: true });

      toast.success("Registration is sucessful",{
        position: "top-center",
        hideProgressBar: false,
        closeOnClick: true,
       
      });

    } catch (error) {
      console.error("Error logging in:", error);
      alert("Login failed. Incorrect password or email.");
    }
  };

  // const handleGoogleSignIn = async () => {
  //   try {
  //     await signInWithPopup(auth, googleProvider);
  //     alert("Google sign-in successful!");
  //   } catch (error) {
  //     console.error("Error with Google sign-in:", error);
  //   }
  // };

  return (
    <div className="relative bg-gradient-to-r from-slate-100 to-white min-h-screen flex items-center justify-center m-0 p-0">
      <div className="absolute z-0 sm:hidden" style={{ backgroundImage: `url(${g50})` }}></div>
      <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center">
        <div className="flex items-start justify-start">
          <img src={highTaskLogo} alt="HITask Logo" className="mr-2" width="40" height="40" />
        </div>
        <nav className="flex">
          <span className="text-black px-2 pt-1">Have no account?</span>
          <Link to="/register" className="bg-blue-600 text-white px-2 py-1 rounded-md text-center mr-5">
            Sign up
          </Link>
        </nav>
      </div>
      <div className="p-10 pb-0 h-[620px] flex flex-col shadow-lg w-full mt-[100px] items-center justify-center">
        <h1 className="text-2xl text-black font-bold mb-4 text-center">Welcome to HITask</h1>
        <form onSubmit={handleLogin} className="w-[20rem] text-black items-center justify-center z-50">
          <div className="mb-4">
            <label className="block mb-2">Enter your email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white px-4 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Enter your Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white px-4 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md">
            Log In
          </button>
        </form>
        <SignInGoogle/>

        <p className="text-center text-gray-600 mt-4">
          Forgot your password? <Link to="/reset-password" className="text-blue-600">Reset it here</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
