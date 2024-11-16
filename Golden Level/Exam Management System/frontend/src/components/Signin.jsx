import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"
import axios from "axios";

const Signin = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    if (!email || !password) {
      toast.error("Kindly fill up all fields");
      event.preventDefault();
      return;
    }
    const data = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:3007/api/studentuser/login", data)
      .then((res) => {
        console.log("res:", res);
        
        // setLoading(false);
        localStorage.setItem("classnumber", res.data.classnumber);
        localStorage.setItem('token', res.data.token)
        localStorage.setItem("email", data.email);
        toast.success("Login successful");
        setTimeout(() => {
          navigate("/instructions");
        }, 3000);
      })
      .catch((err) => {
        console.log();

        toast.error(err.response.data.message);
      });
  };
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.9 }} className="mt-32 lg:w-4/12 w-5/6 mx-auto">
      <p className="text-2xl text-center font-bold">Sign In</p>
      <div className="mt-10">
        <input
          className="border-b border-green-900 px-3 py-1 w-full mb-5 rounded-md placeholder:text-gray-400 outline-none"
          type="email"
          id="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="border-b border-green-900 px-3 py-1 w-full mb-5 rounded-md placeholder:text-gray-400 outline-none"
          type="password"
          id="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="flex justify-center">
        <motion.button whileTap={{scale: 0.7}}
            onClick={handleLogin}
            className="bg-green-900 mt-10 px-10 font-semibold py-3 w-max mb-3 rounded-xl text-white"
          >
            Sign In
          </motion.button>
        </div>
      </div>
      <ToastContainer />
    </motion.div>
  );
};

export default Signin;