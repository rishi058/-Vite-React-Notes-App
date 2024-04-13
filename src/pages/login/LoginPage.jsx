import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Navigate } from "react-router-dom";
import Auth from "../../services/auth_api";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [goto, setGoto] = useState(false);
  const [gotoRegister, setGotoRegister] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    const success = await new Auth().login(email, password);
    if (success) {
      setGoto(true);
    }
  };

  if (goto) {
    return <Navigate to="/" replace={true} />;
  }
  if(gotoRegister){
    return <Navigate to="/register" replace={true} />;
  }

  return (
    <div className="min-h-screen items-center justify-center flex flex-col mx-2">
      <div className="z-50 text-4xl mb-10 font-semibold text-gray-800 text-center">
        {" "}
        Notes App{" "}
      </div>
      <div className="bg-white/10 p-8 rounded-lg shadow-md backdrop-blur mx-3 space-y-8 max-w-md w-full ">
        <h2 className="text-2xl mb-4 font-semibold text-gray-800 text-center">
          Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="rishi@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 block w-full rounded-md focus:outline-none placeholder:text-white/50 bg-white/20"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              placeholder="************"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 block w-full rounded-md focus:outline-none placeholder:text-white/50 bg-white/20"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-700 mt-5"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-slate-600/70 hover:bg-slate-600"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="mt-4 text-sm">
          <div className="flex">
            Doesn't have an account?{" "}
            <div
              onClick={() => setGotoRegister(true)}
              className="font-bold text-black/50 hover:text-black/100 ml-2"
            >
              Register here
            </div>
          </div>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default LoginPage;
