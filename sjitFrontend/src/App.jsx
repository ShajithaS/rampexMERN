//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import Home from "./components/FunctionalComponent/Home"
import SignUp from "./components/FunctionalComponent/SignUp";
import About from "./components/FunctionalComponent/About";
import Skills from "./components/FunctionalComponent/Skills";
import Contact from "./components/FunctionalComponent/Contact";

function App() {
  /*const [count, setCount] = useState(0)*/

  return ( 
    <>
    <div>
      <h1>Welcome to React</h1>
      <hr />
      <Home />
      <SignUp />
      <About />
      <Skills />
      <Contact />
    </div>
    </>
  );
}

export default App;
