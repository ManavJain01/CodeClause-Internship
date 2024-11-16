import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateQuestion = () => {
  const [question, setQuestion] = useState("");
  const [classnumber, setClassNumber] = useState("");
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [optionThree, setOptionThree] = useState("");
  const [optionFour, setOptionFour] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    if (!question || !classnumber || !optionOne || !optionTwo || !optionThree || !optionFour || !correctAnswer ) {
        toast.error("Kindly fill up all fields");
        event.preventDefault();
        return;
      }

    const data = {
      question: question,
      classnumber: classnumber,
      answerOne : optionOne,
      answerTwo : optionTwo,
      answerThree : optionThree,
      answerFour : optionFour,
      correctAnswer : correctAnswer,
    };

    axios.post('http://localhost:3007/api/question/', data)
    .then((res) => {
      toast.success("Question created successfully");
      setTimeout(() => {
        navigate("/admin");
      }, 3000);
    })
    .catch((err) => {
      toast.error(err.response.data.message);
    })
  }

  return (
    <div className="mt-20 lg:w-5/12 w-5/6 mx-auto">
      <p className="text-2xl text-center font-bold">Create Question</p>
      <div className="mt-10">
        <input
          className="border-b border-rose-900 px-3 py-1 w-full mb-5 rounded-md placeholder:text-gray-400 outline-none"
          type="text"
          id="question"
          placeholder="Question"
          name="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />

        <select value={classnumber} onChange={(e) => setClassNumber(e.target.value)} className="border-b border-rose-900 w-full px-2 py-1 mb-5 rounded-md placeholder:text-gray-400 outline-none">
          <option value="">Select a Class</option>
          <option value="1">Class 1</option>
          <option value="2">Class 2</option>
          <option value="3">Class 3</option>
          <option value="4">Class 4</option>
          <option value="5">Class 5</option>
        </select>

        <input
          className="border-b border-rose-900 shadow-sm px-3 py-1 w-full mb-5 rounded-md placeholder:text-gray-400 outline-none"
          type="text"
          id="optionOne"
          placeholder="option One"
          name="optionOne"
          value={optionOne}
          onChange={(e) => setOptionOne(e.target.value)}
          required
        />

        <input
          className="border-b border-rose-900 px-3 py-1 w-full mb-5 rounded-md placeholder:text-gray-400 outline-none"
          type="text"
          id="optionTwo"
          placeholder="option Two"
          name="optionTwo"
          value={optionTwo}
          onChange={(e) => setOptionTwo(e.target.value)}
          required
        />

        <input
          className="border-b border-rose-900 px-3 py-1 w-full mb-5 rounded-md placeholder:text-gray-400 outline-none"
          type="text"
          id="optionThree"
          placeholder="option Three"
          name="optionThree"
          value={optionThree}
          onChange={(e) => setOptionThree(e.target.value)}
          required
        />

        <input
          className="border-b border-rose-900 px-3 py-1 w-full mb-5 rounded-md placeholder:text-gray-400 outline-none"
          type="text"
          id="optionFour"
          placeholder="option Four"
          name="optionFour"
          value={optionFour}
          onChange={(e) => setOptionFour(e.target.value)}
          required
        />

        <input
          className="border-b border-rose-900 px-3 py-1 w-full mb-5 rounded-md placeholder:text-gray-400 outline-none"
          type="text"
          id="correctAnswer"
          placeholder="Correct Answer"
          name="correctAnswer"
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
          required
        />

        <div className="flex justify-center">
          <motion.button whileTap={{scale: 0.7}}
            onClick={handleSubmit}
            className="bg-rose-900 mt-10 px-10 font-semibold py-3 w-max mb-3 rounded-xl text-white"
          >
            Create Question
          </motion.button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default CreateQuestion;