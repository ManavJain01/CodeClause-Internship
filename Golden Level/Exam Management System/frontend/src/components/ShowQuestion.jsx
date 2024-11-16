import React, { useEffect, useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";

const ShowQuestion = () => {
  const [question, setQuestion] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const { id } = useParams();

  const submitAnswer = () => {
    axios
      .post("http://localhost:3007/api/question/submit-answer", {
        questionId: id,
        answer: selectedOption,
        email: localStorage.getItem("email"),
      })
      .then((res) => {
        console.log(res);
        toast.success("option submitted successfully");
        setTimeout(() => {
          navigate("/questions");
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3007/api/question/${id}`)
      .then((res) => {
        setQuestion(res.data);
        // console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        // console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-5/6 mx-auto mt-16">
      <div>
        <p className="font-semibold text-lg mb-5">{question.question}</p>

        <div className="flex flex-col gap-8">
          <div className="flex gap-3 items-center">
            <input
              type="radio"
              id="option1"
              name="answers"
              value={question.answerOne}
              // checked={selectedOption === 'Red'}
              onChange={handleOptionChange}
            />
            <label htmlFor="option1">{question.answerOne}</label>
          </div>

          <div className="flex gap-3 items-center">
            <input
              type="radio"
              id="option2"
              name="answers"
              value={question.answerTwo}
              // checked={selectedOption === 'Red'}
              onChange={handleOptionChange}
            />
            <label htmlFor="option2">{question.answerTwo}</label>
          </div>

          <div className="flex gap-3 items-center">
            <input
              type="radio"
              id="option3"
              name="answers"
              value={question.answerOne}
              // checked={selectedOption === 'Red'}
              onChange={handleOptionChange}
            />
            <label htmlFor="option3">{question.answerThree}</label>
          </div>

          <div className="flex gap-3 items-center">
            <input
              type="radio"
              id="option4"
              name="answers"
              value={question.answerFour}
              // checked={selectedOption === 'Red'}
              onChange={handleOptionChange}
            />
            <label htmlFor="option4">{question.answerFour}</label>
          </div>
        </div>

        <div className="flex justify-end">
          <motion.button
            whileTap={{ scale: 0.7 }}
            onClick={submitAnswer}
            className="bg-green-900 mt-10 px-10 font-semibold py-3 w-max mb-3 rounded-xl text-white"
          >
            Submit
          </motion.button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ShowQuestion;