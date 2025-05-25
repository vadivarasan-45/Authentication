import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "./config";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navi = useNavigate();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  
  useEffect(()=>{
                    auth.onAuthStateChanged(function(user){
                        if(user){
                            console.log("user is here")
                            navi("/home")
                        } 
                        else{
                            console.log("user is not here")
                        }
                    })
                },[])
  function handleSignup() {
    createUserWithEmailAndPassword(auth, user, pass)
      .then(() => {
        console.log("signup successfully");
        navi("/login");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Sign Up</h1>

        <input
          onChange={(event) => setUser(event.target.value)}
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
        />

        <input
          onChange={(event) => setPass(event.target.value)}
          type="password"
          placeholder="Password should be at least 6 characters"
          className="w-full px-4 py-3 mb-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
        />

        <button
          onClick={handleSignup}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all"
        >
          Sign Up
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?
          <a href="/login" className="text-indigo-600 font-semibold ml-1">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
