import Header from "../Header/Header";
import { useState } from "react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getInputData = (event) => {
    event.preventDefault();
    console.log(email,password,fullName)
    setFullName('')
    setEmail('')
    setPassword('')
  };

  return (
    <>
      <div className="w-full">
        <Header />
        <div className="absolute">
          <img
            className="w-[100vw] h-[100vh]"
            src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg"
            alt="banner"
          />
        </div>
        <form
          onSubmit={getInputData}
          className="flex p-12 flex-col my-36 mx-auto left-0 right-0 items-center opacity-90 rounded-md justify-center absolute bg-black w-3/12"
        >
          <h1 className="text-3xl text-white mb-5 font-bold">
            {isLogin ? "Login" : "Sign Up"}
          </h1>
          <div className="flex flex-col">
          {!isLogin && (
              <input
                type="text"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
                placeholder="fullname"
              />
            )}
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
              placeholder="email"
            />
            
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
              placeholder="Password"
            />
            <button
              type="submit"
              className="flex items-center justify-center bg-red-600 rounded-sm font-bold p-3 text-white mt-6"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
            <p className="text-white mt-4">
              {isLogin ? "New to Netflix?" : "Already have an account?"}
              <span
                onClick={() => setIsLogin(!isLogin)}
                className="ml-1 text-blue-900 font-medium cursor-pointer"
              >
                {isLogin ? "Sign Up" : "Login"}
              </span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
