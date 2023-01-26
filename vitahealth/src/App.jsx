import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Trimester from './Components/Trimester/Trimester';
import TrimesterList from './Components/TrimesterList/TrimesterList';
import Todo from './Components/todo/todo'
import Chatbox from './Components/chat/Chatbox'

import { trimester } from './data';
import LoginForm from './Components/login/Loginform';
import SignupForm from './Components/login/Signup';
import LandingPage from './Components/landingpage/landingpage';
import Navbar from './Components/Navbar/Navbar';

export default function App() {
  return (
    <div className="App">
   <Navbar/>
      <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/login" element={<LoginForm/>} />
      <Route path="/signup" element={<SignupForm/>} />
      <Route path="/chat" element={<Chatbox/>} />
      <Route path="/todo" element={<Todo/>} />
      <Route path="/trimester" element={<TrimesterList/>} />
       <Route path="/trimester/:id" element={<Trimester data={trimester}/>} />
      </Routes>
    </div>
  )
}