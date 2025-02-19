//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import Home from "./components/FunctionalComponent/Home"
import SignUp from "./components/FunctionalComponent/SignUp";
import About from "./components/FunctionalComponent/About";
import Skills from "./components/FunctionalComponent/Skills";
import Contact from "./components/FunctionalComponent/Contact";
//import ClassComponentEg from "./components/ClassComponent/ClassComponentEG";
import Navbar from "./components/FunctionalComponent/Navbar";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  /*const [count, setCount] = useState(0)*/

  return ( 
    <>
    <main>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home properties="Hello" sjit="SJIT"></Home>}> </Route>
        <Route path='/contact' element={<Contact></Contact>}> </Route>
        <Route path='/about' element={<About></About>}> </Route>
        <Route path='/signup' element={<SignUp></SignUp>}> </Route>

      </Routes>
    </BrowserRouter>
      </main>
      </>
  );
}

export default App;
