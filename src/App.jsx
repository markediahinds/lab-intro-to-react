import React from "react";
import "./app.css";
import NavBar from "./Components/NavBar/NavBar";
import UserProfile from "./Components/UserProfile/UserProfile";
import Posts from "./Components/Posts/Posts";
import Contacts from "./Components/Contacts/Contacts";

const App = () => {
  return (
    <div className='page-container'>
    <NavBar></NavBar>
    <UserProfile></UserProfile>
    <Posts></Posts>
    <Contacts></Contacts>
    </div>
  )
}

export default App