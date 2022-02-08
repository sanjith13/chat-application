import './header.css';
import React,{useContext} from 'react';
import {StateProvider} from './stateprovider';
function Header() {
  const {username,setusername} = useContext(StateProvider);
  const handleSignout =() =>{
      setusername(null);
  }
  return <div className="header">
      <div className="header__logo">
          <h1>I've🐐a fun E feelin!</h1>
      </div>
      <div className="header__signout">
          <h3>✋🏻{username}</h3>
          <button className="header__button" onClick={handleSignout}>Sign😎Out</button>
      </div>
  </div>;
}

export default Header;
