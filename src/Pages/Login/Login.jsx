import React, { useState } from "react";

import { LuEye, LuEyeOff } from "react-icons/lu";
import SocialAccountLogin from "../../Components/SocialAccountLogin/SocialAccountLogin";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex  flex-col items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
            <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
              <h2 className="text-3xl font-bold leading-tight text-green-700 sm:text-4xl">
                ACI Krishi Bazar.
              </h2>
              <p className="mt-2 text-base text-gray-600">
                Don’t have an account?
                <a
                  href="#"
                  title=""
                  className="font-medium ml-2 text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700"
                >
                  Create a free account
                </a>
              </p>
              <form action="#" method="POST" className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="text-base font-medium text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter email to get started"
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="text-base font-medium text-gray-900"
                      >
                        Password
                      </label>

                      <a
                        href="#"
                        title=""
                        className="text-sm font-medium text-blue-600 hover:underline hover:text-blue-700 focus:text-blue-700"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <div className="mt-2.5 relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        className="block w-full p-4 pr-24 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                      <button
                        type="button"
                        onClick={handleTogglePassword}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm text-blue-600 focus:outline-none hover:text-blue-700"
                      >
                        {showPassword ? (
                          <LuEyeOff className="text-lg"></LuEyeOff>
                        ) : (
                          <LuEye className="text-lg"></LuEye>
                        )}
                      </button>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="inline-flex gradient-bg items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                    >
                      Log in
                    </button>
                  </div>
                </div>
              </form>
              {/* //? Social Account Login */}
              <SocialAccountLogin></SocialAccountLogin>
            </div>
          </div>

          <div className="lg:flex items-center hidden justify-center w-full bg-gray-50">
            <img
              className="w-full h-full object-cover"
              src="https://i.ibb.co/VgkNrK0/pixlr-image-generator-534aa66b-bffe-4d7b-a616-bc6b17695345.webp"
              alt="Horror Scene"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
