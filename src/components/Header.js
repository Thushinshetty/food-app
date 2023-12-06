import React, { useState } from 'react'
import '../App.css';
import { Link } from "react-router-dom";
import useOnlineStatus from '../Utils/useOnlineStatus';
export default function Header() {
 const [btnName,setBtnName] = useState("Login");
 const onlineStatus=useOnlineStatus();

  return (
    <div className='header'>
        <div className="logo-container">
            <img src="https://static.vecteezy.com/system/resources/previews/011/468/885/original/food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector.jpg" alt="" className="logo" />
        </div>
        <div className="nav-items">
            <ul>Status:{onlineStatus?"🟢":"🔴"}</ul>
            <ul><Link to="/">Home</Link></ul>
            <ul><Link to="/about">About</Link></ul>
            <ul><Link to="/contact">Contact</Link></ul>
            <ul><Link to="/Grocery">Grocery</Link></ul>
            <ul>cart</ul>
            <button onClick={() => {
              btnName === "Login" ?
              setBtnName("Logout") :
              setBtnName("Login")
            }}>{btnName}</button>
        </div>
    </div>
  )
}
