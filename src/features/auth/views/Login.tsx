function Login() {
  return (
    <div className="bg-gray-50 w-1/3 p-4 shadow-lg rounded-lg mx-auto mt-16 flex flex-col gap-4">
      <p className="text-2xl">Login</p>
      <div className="w-full">
        <p>Email</p>
        <input type="email" className="p-2 block w-full border border-gray-300 rounded-lg" />
      </div>
      <div className="w-full">
        <p>Password</p>
        <input type="password" className="p-2 block w-full border border-gray-300 rounded-lg" />
      </div>
      <button className="w-fit py-2 px-8 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">Login</button>
    </div>
  )
}

export default Login;