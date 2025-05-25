import { signOut } from "firebase/auth"
import auth from "./config"
import { useNavigate } from "react-router-dom"

function Home() {
  const nav = useNavigate()

  function handleLogout() {
    signOut(auth)
    nav("/login")
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <h1 className="text-4xl font-bold mb-6">Welcome Home 🎉</h1>
      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition duration-300"
      >
        Logout
      </button>
    </div>
  )
}

export default Home
