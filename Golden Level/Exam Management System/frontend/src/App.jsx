// Importing React Packages
import React from "react";
import { Route, Routes } from "react-router-dom";

// Importing Framer Motion
import { AnimatePresence } from 'framer-motion';

// Importing Local Files
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Questions from "./components/Questions";
import Prequestions from "./components/Prequestions";
import ShowQuestion from "./components/ShowQuestion";
import CreateQuestion from "./components/Admin/CreateQuestion";
import Admin from "./components/Admin/Admin";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <AnimatePresence wait>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Signin />} />

        <Route element={<PrivateRoute />}>
          <Route path="/questions" element={<Questions />} />
          <Route path="/instructions" element={<Prequestions />} />
          <Route
            path="/questions/questiondetails/:id"
            element={<ShowQuestion />}
          />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/createquestion" element={<CreateQuestion />} />
        </Route>

        {/* <Route path='/create/books' element={<CreateBook/>}/>
      <Route path='/books/edit/:id' element={<EditBook/>}/>
      <Route path='/books/delete/:id' element={<DeleteBooks/>}/> */}
      </Routes>
    </AnimatePresence>
  );
}

export default App;