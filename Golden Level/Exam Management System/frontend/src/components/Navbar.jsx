import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"


const Navbar = () => {
  const navigate = useNavigate();
  const hold = localStorage.getItem("token")

  const handleLogout = () => {
    localStorage.removeItem("classnumber");
    toast.success("Signed out successful")

    localStorage.removeItem("token");
    
    setTimeout(() => {
      navigate("/");
    }, 1800);
    
  
  };

  return (
    <div className='w-5/6 mx-auto my-6'>
      <div className='flex justify-between items-center'>
      <p className='text-green-900 text-3xl font-bold'>NITRR</p>
      {hold && <motion.button whileTap={{scale: 0.7}}
          onClick={handleLogout}

          className="bg-green-900 px-6 font-semibold py-3 w-max rounded-xl text-white"
        >
          Sign Out
        </motion.button>}
        </div>
      <ToastContainer />
    </div>
  )
}

export default Navbar