import Header from "../Header/Header";
import { lazy, useState } from "react";
import url from '../../utils/constant'
import useCustomToast from "../useToast/useToast";
import useApi from "../FetchHook/FetchHook";
import { useDispatch } from 'react-redux'
import { setUser } from '../../redux/userSlice'
import { useNavigate, Link } from 'react-router-dom'
export default function Login() {
  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error, data, get, post } = useApi(url)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { showToast, ToastComponent } = useCustomToast();
  const getInputData = async (event) => {
    event.preventDefault();
    try {
      const headers = {
        'Content-Type': 'application/json',
        withCredentials: true,
      };
      const data = {
        fullName,
        email,
        password
      };
      if (!isLogin) {
        let result;
        result = await post('/register', data, headers);
        if (result.success) {
          showToast("success", result.message);
          setIsLogin(true)
        }
      } else {
        let result;
        result = await post('/log', data, headers);
        if (result.success) {
          showToast('success', result.message)
          dispatch(setUser(result.user))
          navigate('/browse')
        }
      }
    } catch (error) {
      const errorMessage =
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : error.message || "An error occurred";
      showToast("error", errorMessage);
    }
    finally {
      setFullName('');
      setEmail('');
      setPassword('');
    }
  };
  return (
    <>
      <div className="w-full" >
        <Header backgroundstyle="linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))" buttonname="Home" onClick={() => { navigate("/") }} />
        <div className="absolute" >
          <img
            className="w-[100vw] h-[100vh]"
            src="https://raw.githubusercontent.com/srujanjapthi/Netflix-Clone-Project---codewithharry/refs/heads/main/assets/images/background-image-netflix.jpg"
            alt="banner"

          />
        </div>
        <form
          onSubmit={getInputData}
          className="flex p-12 flex-col my-36 mx-auto left-0 right-0 items-center opacity-90 rounded-md justify-center absolute bg-black max-lg:w-auto  w-3/12 "
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
              {loading && (
                <div className="ml-2 animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
              )}
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
            <p className="text-white flex items-center justify-center">OR</p>
            <button className="flex items-center justify-center bg-[#3A3837] rounded-sm font-bold p-3 text-white mt-6">Use a Sign-in Code</button>
            <Link className="flex items-center mt-2 justify-center text-white">Forgot Password ?</Link>
          </div>
        </form>
      </div>
      <ToastComponent />
    </>
  );
}
