import { useState } from "react";
import { auth } from "../firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function ResetPasswordPage() {
  const [email, setEmail] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent!", {
        position: "top-center",
        hideProgressBar: false,
        closeOnClick: true,
      });
    } catch (error) {
      console.error("Error sending reset email:", error);
      toast.error("Failed to send password reset email. Please try again.", {
        position: "top-center",
        hideProgressBar: false,
        closeOnClick: true,
      });
    }
  };

  return (
    <div className="min-h-screen flex text-black items-center justify-center bg-gradient-to-r from-slate-100 to-white">
      <div className="p-10 w-full max-w-md bg-white shadow-lg rounded-md">
        <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>
        <form onSubmit={handleResetPassword}>
          <div className="mb-4">
            <label className="block mb-2">Enter your email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-50 px-4 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md"
          >
            Send Reset Email
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Remembered your password?{" "}
          <Link to="/login" className="text-blue-600">
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ResetPasswordPage;
