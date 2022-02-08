import './body.css';
import {React,useEffect,useState,useContext,useRef } from 'react';
import Message from './message';
import Axios from 'axios';
import {StateProvider} from './stateprovider';
function Body() {
  const scrollref = useRef(null);
  const {username} = useContext(StateProvider);
  const [messages,setMessages] = useState([]);
  const [message,setMessage] = useState([]);
  useEffect(() =>{
      const getMessages = () =>{
          Axios.get('https://chatlikegoat.herokuapp.com/api/v1/messages').then((res)=>{
              setMessages(res.data.messages);
          })
      }
      getMessages();
  })
  const handleSubmit = () =>{
      if(message !== ""){
        Axios.post('https://chatlikegoat.herokuapp.com/api/v1/messages',{
            message,
            name : username,
            time : Date().toLocaleString()
        }).then((res) => {
        })
        setMessage("");
      }
  }
  return <div className="body">
      <div className="body__message">
          {messages.map((message) => (
              <Message key ={message._id} message = {message.message} mymessage={message.name === username?true:false} name={message.name} time={message.time?message.time:'6pm'}/>
          ))}
      </div>
      <div ref={scrollref} className = "body__input">
          <input value={message} type="text" onChange={(e) => {setMessage(e.target.value)}} placeholder="🙄type to send message"></input>
          <button onClick={handleSubmit}>☝🏻</button>
      </div>
  </div>;
}

export default Body;
