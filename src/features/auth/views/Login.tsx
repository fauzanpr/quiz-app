import { useEffect, useState } from "react";
import useGenerateTokenMutation from "../hooks/useGenerateTokenMutation";
import { LoginType } from "../../../core/models/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Login() {
  const mutation = useGenerateTokenMutation();
  const navigate = useNavigate();
  const [data, setData] = useState<LoginType>({
    email: "",
    password: ""
  });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/app");
    }
  }, [navigate]);

  const loginhandler = () => {
    if (data.email === "user@mail.com" && data.password === "123") {
      mutation.mutateAsync();
    } else {
      toast.error("Login gagal");
    }
  }
  return (
    <div className="bg-gray-50 w-1/3 p-4 shadow-lg rounded-lg mx-auto mt-16 flex flex-col gap-4">
      <p className="text-2xl">Login</p>
      <div className="w-full">
        <p>Email</p>
        <input type="email" value={data.email} className="p-2 block w-full border border-gray-300 rounded-lg" onChange={e => setData(prev => {
          return {
            ...prev,
            email: e.target.value
          }
        })} />
      </div>
      <div className="w-full">
        <p>Password</p>
        <input type="password" value={data.password} className="p-2 block w-full border border-gray-300 rounded-lg" onChange={e => setData(prev => {
          return {
            ...prev,
            password: e.target.value
          }
        })} />
      </div>
      <button className="w-fit py-2 px-8 bg-blue-600 hover:bg-blue-700 text-white rounded-lg" onClick={loginhandler}>{mutation.isLoading ? "Loading..." : "Login"}</button>
    </div>
  )
}

export default Login;