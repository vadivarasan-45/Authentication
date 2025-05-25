import { useEffect, useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import auth from "./config"
import { useNavigate } from "react-router-dom"

function Login() {
  const navi = useNavigate()
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")
  const [one,setone]=useState()
  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        console.log("user is here")
        navi("/home")
      } else {
        console.log("user is not here")
      }
    })
  }, [])

  function handleLogin() {
    signInWithEmailAndPassword(auth, user, pass)
      .then(() => {
        console.log("user login successfully")
        navi("/home")
      })
      .catch(() => {
        console.log("failed to login")
        setone("please Signup!")
      })
  }

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-2xl w-96">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-400">Login</h1>
        <input
          onChange={(e) => setUser(e.target.value)}
          type="text"
          placeholder="Enter your email"
          className="w-full mb-4 p-3 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="Password should be at least 6 charactersd"
          className="w-full mb-6 p-3 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleLogin}
          className="w-full p-3 bg-blue-500 hover:bg-blue-600 transition duration-300 rounded text-white font-semibold"
        >
          Login
        </button>
        <p className="text-red-600 font-semibold mt-4">{one}</p>
      </div>
    </div>
  )
}

export default Login
