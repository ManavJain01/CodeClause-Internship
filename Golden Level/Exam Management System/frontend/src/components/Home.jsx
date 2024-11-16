import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"

const Home = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.9 }} className="w-5/6 mx-auto my-20 lg:flex justify-evenly items-center">
      <div className="flex flex-col items-center mt-16 lg:mt-0">
        <p className="text-2xl text-center font-bold mb-7">
          Exams may not be the best assessment of knowledge but taking it in the
          right platform helps better the overall experience
        </p>
        <div className="flex flex-col items-center">
          <Link to="/register">
            <motion.button whileTap={{scale: 0.7}} className="bg-green-900 px-10 font-semibold py-3 w-max mb-3 rounded-xl text-white">
              New? Signup
            </motion.button>
          </Link>
          <Link to="/login">
            <motion.button whileTap={{scale: 0.7}} className="border border-green-900 bg-green-50 font-semibold px-10 py-3 w-max rounded-xl">
              Got an account? SignIn
            </motion.button>
          </Link>
        </div>
      </div>
      <img src="https://static.vecteezy.com/system/resources/thumbnails/022/483/678/small_2x/joyful-3d-student-boy-with-graduation-cap-on-white-background-transparent-background-free-png.png" alt="" />
    </motion.div>
  );
};

export default Home;