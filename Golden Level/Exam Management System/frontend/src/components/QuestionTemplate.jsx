import React from 'react'
import { MdOutlineArrowDropDownCircle } from "react-icons/md";

const QuestionTemplete = (props) => {
  return (
    <div className='bg-pink-50 rounded-xl shadow-md mb-10 px-7 py-5 cursor-pointer'>
      <p className='font-bold text-lg mb-3 flex justify-between items-center'>Question {props.index} <MdOutlineArrowDropDownCircle className='text-xl text-green-900' /></p>
    </div>
  )
}

export default QuestionTemplete