import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Login from "./login"
import Sigup from "./sigup"
import Home from "./home"

function Add() {
  return (
    <BrowserRouter>
      <nav className="flex justify-center gap-8 p-6 bg-gray-900 shadow-lg">
        <Link
          to="/signup"
          className="text-white text-lg font-semibold hover:text-blue-400 transition duration-300"
        >
          Signup
        </Link>
        <Link
          to="/login"
          className="text-white text-lg font-semibold hover:text-blue-400 transition duration-300"
        >
          Login
        </Link>
      </nav>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Sigup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Add
