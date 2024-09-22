"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; 
import Logo from "../../../public/logo.png";
import { loginService } from "@/services/AuthService"; 
import Cookies from "js-cookie"; 
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const router = useRouter();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");

    let isValid = true;
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    }
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    try {
      const response = await loginService({ email, password });
      console.log("Login response:", response.token, { expires: 1/24}); 
      if (response instanceof Error) {
        toast.error(response.message); 
      } else {
        toast.success("Login successful!");
        
        Cookies.set("token", response.token);
        router.push("/store"); // Redirect to store page
      }
    } catch (error) {
      toast.error("An unexpected error occurred.");
    }
  };

  return (
    <div className="w-full h-screen flex flex-row bg-white">
      <div className="hidden md:flex w-2/5 bg-[#F54D42] flex-col justify-center items-center">
        <div className="w-full h-[100px] px-5 flex">
          <Image src={Logo} alt="logo" width={100} height={100} />
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center text-6xl font-semibold text-white pb-40">
          <h1>LOGIN INTO</h1>
          <h1 className="tracking-tighter">YOUR STORE</h1>
        </div>
      </div>

      {/* login part */}
      <div className="w-full md:w-3/5 h-screen items-center justify-center px-6">
        <div className="container mx-auto">
          <div className="w-full h-[60px] px-5 md:hidden flex items-center justify-center">
            <Image src={Logo} alt="logo" width={80} height={80} />
          </div>

          {/* Red section with login form */}
          <div className="w-full flex flex-col justify-between items-center">
            <div className="w-full h-screen flex justify-center items-center flex-col pt-10">
              <div className="w-full flex items-center pl-8">
                <h2 className="text-3xl font-bold mb-6">
                  Login to your account
                </h2>
              </div>
              <form
                className="w-full p-8 flex flex-col justify-between h-[60%]"
                onSubmit={handleSubmit}
              >
                <div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      className={`appearance-none border ${
                        emailError ? "border-red-500" : "border-gray-300"
                      } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && (
                      <p className="text-red-500 text-xs mt-1">{emailError}</p>
                    )}
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                      Password
                    </label>
                    <input
                      className={`appearance-none border ${
                        passwordError ? "border-red-500" : "border-gray-300"
                      } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {passwordError && (
                      <p className="text-red-500 text-xs mt-1">{passwordError}</p>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="w-full flex flex-row justify-end mt-[-20px]">
                      <a
                        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                        href="#"
                      >
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    className="btn-primary sm:mb-10 md:mb-[-30px] w-full h-[40px] rounded text-xl font-semibold mb-4"
                    type="submit"
                  >
                    LOG IN
                  </button>
                  <div className="mt-6 w-full flex flex-row justify-center">
                    <p className="mt-1 text-gray-700 font-medium">
                      Don&apos;t have an account? <span className="text-[#F54D42]">Sign Up</span>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Page;
