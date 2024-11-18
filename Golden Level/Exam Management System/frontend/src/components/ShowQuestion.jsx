// Importing React Packages
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams, useLocation } from "react-router-dom";

// Importing React Toastify
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

// Importing Framer Motion
import { motion } from "framer-motion";

const ShowQuestion = () => {
  // useState
  const [question, setQuestion] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  
  // useNavigate
  const navigate = useNavigate();
  
  // useParams
  const { id } = useParams();
  
  // useLocation
  const data = useLocation();
  const questions = data.state;
  const currentIndex = questions.findIndex(q => q._id === id);
  
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const submitAnswer = async () => {
    try {
      const res = await axios
        .post("http://localhost:3007/api/question/submit-answer", {
          questionId: id,
          answer: selectedOption,
          email: localStorage.getItem("email"),
        })
        
        toast.success("option submitted successfully");
        
        setTimeout(() => {
          if(questions.length-1 === currentIndex) navigate("/questions");
          else navigate(`/questions/questiondetails/${questions[currentIndex+1]._id}`,  {
            state: questions
          });
        }, 1500);
  
      } catch (error) {
        console.error(error);
        toast.error(error.response.data.message);
    }
  };

  // useEffect
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
  }, [id]);

  return (
    <div className="w-5/6 mx-auto mt-16">
      <div>
        <p className="font-semibold text-lg mb-5">Q{currentIndex+1}. {question.question}</p>

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

        <div className="flex justify-end gap-5">
          <motion.button
            whileTap={{ scale: 0.7 }}
            onClick={() => {navigate("/questions")}}
            className="bg-blue-900 mt-10 px-10 font-semibold py-3 w-max mb-3 rounded-xl text-white"
          >
            Go Back
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.7 }}
            onClick={submitAnswer}
            className="bg-green-900 mt-10 px-10 font-semibold py-3 w-max mb-3 rounded-xl text-white"
          >
            {questions.length-1 === currentIndex
              ? "Submit"
              : "Next Question"
            }
          </motion.button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ShowQuestion;