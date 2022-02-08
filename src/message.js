import React from 'react';
import './message.css';
function Message( {message,mymessage,name,time} ) {
  return <div className = "message">
      {mymessage === true ? <div className = "message__thisuser"><p>you</p>{message}<p>{time}</p></div> : <div className = "message__otheruser"><p>{name}</p>{message}<p>{time}</p></div>}
  </div>;
}

export default Message;
