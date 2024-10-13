
import Navbar from './component/Navbar';
import NewsContainer from './component/Newscontainer';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";





function App() {
  const [mode, setMode] = useState("light")
  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor ="#2b2b2b"

    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
    }
  }
  const country = "us"
  return (
    <>
    <BrowserRouter>
    <Navbar handleMode ={toggleMode} mode = {mode} />
    <h1 className={`text-center text-${mode === "light"? "black":"light"}`} >News Headlines</h1>
    <Routes>
      <Route exact path = "/" element = {<NewsContainer key = "general" mode = {mode} country = {country} category = "general"/>} ></Route>
      <Route exact path = "/entertainment" element = {<NewsContainer key = "entertainment" mode = {mode} country = {country} category = "entertainment"/>} ></Route>
      <Route exact path = "/business" element = {<NewsContainer key = "business" mode = {mode} country = {country} category = "business"/>} ></Route>
      <Route exact path = "/science" element = {<NewsContainer key = "science" mode = {mode} country = {country} category = "science"/>} ></Route>
      <Route exact path = "/sports" element = {<NewsContainer key = "sports" mode = {mode} country = {country} category = "sports"/>} ></Route>
      <Route exact path = "/technology" element = {<NewsContainer key = "technology" mode = {mode} country = {country} category = "technology"/>} ></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
