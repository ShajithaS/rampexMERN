//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import Home from "./components/FunctionalComponent/Home"
import SignUp from "./components/FunctionalComponent/SignUp";
import About from "./components/FunctionalComponent/About";
import Skills from "./components/FunctionalComponent/Skills";
import Contact from "./components/FunctionalComponent/Contact";
import Login from "./components/FunctionalComponent/Login";
//import ClassComponentEg from "./components/ClassComponent/ClassComponentEG";
import Navbar from "./components/FunctionalComponent/Navbar";
import UseEffect from "./components/FunctionalComponent/Hooks/UseEffect";
import UseEffectAPI from "./components/FunctionalComponent/Hooks/UseEffectAPI"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import UseRef from "./components/FunctionalComponent/Hooks/UseRef";
import UseMemo from "./components/FunctionalComponent/Hooks/UseMemo";

function App() {
  /*const [count, setCount] = useState(0)*/

  return ( 
    <>
    <main>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home properties="Hello" sjit="SJIT"></Home>}> </Route>
        <Route path='/about' element={<About></About>}> </Route>
        <Route path='/skills' element={<Skills></Skills>}> </Route>
        <Route path='/contact' element={<Contact></Contact>}> </Route>
        <Route path='/useeffect' element={<UseEffect></UseEffect>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}> </Route>
        <Route path='/login' element={<Login></Login>}> </Route>
        <Route path='/useeffectapi' element={<UseEffectAPI></UseEffectAPI>}> </Route>
        <Route path='/useref' element={<UseRef></UseRef>}> </Route>
        <Route path='/usememo' element={<UseMemo></UseMemo>}> </Route>
      </Routes>
    </BrowserRouter>
      </main>
      </>
  );
}

export default App;
