import React from "react";
import { BrowserRouter as Router, Route,NavLink , Routes } from "react-router-dom";
import Services from "../page/Services";
import Portfolio from "../page/Portfolio";
import About from "../page/About";
import News from "../page/News";
import Vedio from "../page/Vedio";
import Skills from "../page/Skills";
import Contact from "../page/Contact";
import styled from "styled-components";
import Home from "../page/Home";

const Header = () => {
  return (

    <Wrapper>

    <Router >

      <nav className="nav sticky flex justify-center items-center  bg- text-white  gap-20 " >

        <div className="container flex justify-center gap-10 m-auto bg-transparent">

            <NavLink className="styledNavlink" to="/" >HOME</NavLink>
            <NavLink className="styledNavlink" to="/services" >SERVICES</NavLink>
            <NavLink className="styledNavlink" to="/portfolio" >PORTFOLIO</NavLink>
            <NavLink className="styledNavlink" to="/about" >ABOUT</NavLink>
            <NavLink className="styledNavlink" to="/news" >NEWS</NavLink>
            <NavLink className="styledNavlink" to="/vedio" >VEDIO</NavLink>
            <NavLink className="styledNavlink" to="/skills" >SKILLS</NavLink>
            <NavLink className="styledNavlink" to="/contact" >CONTACT</NavLink>

        </div>

      </nav>
      
      <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/vedio" element={<Vedio/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/contact" element={<Contact/>}/>

      </Routes>


     </Router>
   
      </Wrapper>
  );
};


const Wrapper = styled.section`
.nav{
  background:rgb(34, 28, 92);
  position:sticky;

}
.styledNavlink{
color: white; 
  text-decoration: none; 
fontSize:40px;
padding:20px 0;  

  &.active {
    color: white; 
    font-weight:bolder;
    
  }

  &:hover {
    color: wheat; 
    text-decoration: underline; 

  }
}

`

export default Header;
