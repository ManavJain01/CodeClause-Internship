import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"


const Prequestions = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.9 }} className="w-5/6 mx-auto mt-16">
      <div className="flex gap-4">
        <p className="font-bold text-xl">Note: </p>
        <div className="font-semibold">
          <p className="">
            Kindly study the questions careful before attempting to answer
          </p>
          <p className="mt-4">Each question carries 5 marks </p>
          <p className="mt-4">
            Although you would get an instant result, Your teacher or instructor
            would determine if the total grade point is over 100 or 10{" "}
          </p>
          <p className="mt-4">
            Only click on the "Start Exams" button after you have finished
            reading this and you are ready totake your exams{" "}
          </p>
        </div>
      </div>
      <Link to="/questions" className="flex justify-end">
        <motion.button whileTap={{scale: 0.7}} className="bg-green-900 mt-10 px-10 font-semibold py-3 w-max mb-3 rounded-xl text-white">
          Start Exams
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Prequestions;