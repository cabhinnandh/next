import { useState } from 'react'
import Login from "./components/Login.jsx";
import './App.css'
import Signup from './components/Signup.jsx';
import Navbar from './components/Navbar.jsx';
import { Route, Routes } from 'react-router-dom';
import StateBasics from './components/StateBasics.jsx';
import Counter from './components/Counter.jsx';
import ButtonNaming from './components/ButtonNaming.jsx';
import Api from './components/Api.jsx';
import CardAdd from './components/CardAdd.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/sate" element={<StateBasics />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/button" element={<ButtonNaming />} />
        <Route path="/api" element={<Api />} />
        <Route path="/card" element={<CardAdd />} />
      </Routes>
    </>
  );
}

export default App
