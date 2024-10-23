import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/aboutUs";
import Accordion from "./components/accordion";
import AutoComplete from "./components/autoComplete";
import Home from "./components/home";
import ImageSlider from "./components/imageSlider";
import Language from "./components/language";
import LiveStreamChat from "./components/LiveStreamChat/liveStreamChat";
import Login from "./components/login";
import NestedComment from "./components/nestedComments";
import OtherComponent from "./components/othersComponents";
import Pagination from "./components/pagination";
import ProtectedRoute from "./components/protectedRoute";
import StarComponents from "./components/starComponent/starComponents";
import TicTacToe from "./components/TicTacToe";
import Virtualization from "./components/virtualization";
import CurrencyConversion  from "./components/currencyConversion";

function App() {
  const [language, setLanguage]= useState('En');
  const [component, setComponent]= useState('currencyConversion');

  const componentConfig ={
    ['currencyConversion']: <CurrencyConversion />,
    ['star']: <StarComponents/>,
    ['virtualization']: <Virtualization/>,
  }

  return (
      <div>
        <header className="text-2xl font-bold py-5 bg-black text-white text-center flex">
          <nav className="flex p-2 m-2" style={{width: '1000px'}}>
            <a href="/">Home</a>
            <a href="/aboutUs">About Us</a>
            <a href="/login">Login</a>
            <a href="/accordion">Accordion</a>
            <a href="/nestedComments">NestedComments</a>
            <a href="/imageSlider">Image Slider</a>
            <a href="/pagination">Pagination</a>
            <a href="/autoComplete">Auto Complete</a>
            <a href="/liveStreamChat">Live Stream Chat</a>
            <a href="/tictactoe">Tic Tac Toe</a>
            <a href="/otherComponents">Other Components</a>
          </nav>
          <Language language={language} onChange={(e)=>{setLanguage(e.target.value)}}/>
          <OtherComponent otherComponent={component} onChange={(e)=>{setComponent(e.target.value)}}/>
        </header>
        <div  className='browserRouter'>
        <BrowserRouter>
          <Routes>
            <Route element={<ProtectedRoute/>}>
            <Route path="/login" element={<Login/>}></Route>
            </Route>
            <Route path="/aboutUs" element={<AboutUs language={language}/>}></Route>
            <Route path="/accordion" element={<Accordion/>}></Route>
            <Route path="/nestedComments" element={<NestedComment/>}></Route>
            <Route path="/imageSlider" element={<ImageSlider/>}></Route>
            <Route path="/pagination" element={<Pagination/>}></Route>
            <Route path="/autoComplete" element={<AutoComplete/>}></Route>
            <Route path="/liveStreamChat" element={<LiveStreamChat/>}></Route>
            <Route path="/tictactoe" element={<TicTacToe size={3}/>}></Route>
            <Route path="/otherComponents" element={componentConfig[component]}></Route>
            <Route path="/" element={<Home/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      </div>

  );
}

export default App;
