import React, { useState } from "react";
import useAuth from "./../Hooks/useAuth";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const SocialAccountLogin = () => {
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);

  const { user, googleLogin } = useAuth();
  const handleSocialLogin = (media) => {
    media()
      .then((res) => {
        console.log(res);
        toast.success("Login Successfully");
        setTimeout(() => {
          setLoading(false);
          navigate("/");
        }, 2000);
      })
      .catch((err) => {
        const errorMessage = err.message;
        console.log(errorMessage);
        toast.error("Failed to log in");
      });
  };
  return (
    <div>
      <div className="mt-3 space-y-3">
        <ToastContainer position="bottom-right" theme="dark"></ToastContainer>
        {Loading ? (
          <span>Loading</span>
        ) : (
          <button
            onClick={() => handleSocialLogin(googleLogin)}
            type="button"
            className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
          >
            <div className="absolute inset-y-0 left-0 p-4">
              <FaGoogle className="text-lg text-red-500"></FaGoogle>
            </div>
            Sign in with Google
          </button>
        )}

        <button
          type="button"
          className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
        >
          <div className="absolute inset-y-0 left-0 p-4">
            <FaFacebookF className="text-lg text-blue-700"></FaFacebookF>
          </div>
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
};

export default SocialAccountLogin;
