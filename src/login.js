import React,{useState,useContext} from 'react';
import './login.css';
import Axios from 'axios';
import { StateProvider } from './stateprovider';
function Login() {
  const [email,setEmail] = useState("");
  const [name,setName] = useState("");
  const [password,setPassword] = useState("");
  const {setusername} = useContext(StateProvider); 
  const handleLogin = () =>{
    Axios.post("https://chatlikegoat.herokuapp.com/api/v1/users/login",{
      email,
      password,
    }).then((res)=>{
      setusername(res.data.name)
    }).catch((err)=>{console.log(err)});
  }
  const handleSignup = () =>{
    Axios.post("https://chatlikegoat.herokuapp.com/api/v1/users",{
      name,
      email,
      password,
    }).then((res)=>{alert(`login to use ${res.data.name}`);}).catch((err)=>{console.log(err)});
  }
  return <div className="login">
      <img src="https://cdn3.vectorstock.com/i/thumb-large/45/37/goat-head-logo-icon-back-vector-27404537.jpg" />
      <div className="login__form">
      <div className="login__logo">
        <h1>I've🐐a fun E feelin!<sup>©</sup></h1>
        <h4>chat lyk a goAt</h4>
      </div>
      <div className="login__input">
          <input value={name} onChange= {(e) => {setName(e.target.value)}} type="text" placeholder="name(required only while signing up)" /><br/>
          <input type="email" value={email} onChange= {(e) => {setEmail(e.target.value)}} placeholder="email" /><br/>
          <input type="password" value={password} onChange= {(e) => {setPassword(e.target.value)}} placeholder="password" /><br/>
          <button onClick={handleLogin}>getIn</button>
          <button onClick={handleSignup}>SignUp</button>
      </div>
      </div>
  </div>;
}

export default Login;
