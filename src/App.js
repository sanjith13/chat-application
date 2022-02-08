import './App.css';
import {useState} from 'react';
import Header from './header';
import Body from './body';
import Login from './login';
import { StateProvider } from './stateprovider';
function App() {
  const [username,setusername] = useState(null);
  return (
    <div className="app">
      <StateProvider.Provider value={{username,setusername}} >
        {!username?<Login />
        :
        <div className="app__content">
          <Header />
          <Body className="app__body"/>
        </div>
        }
      </StateProvider.Provider>
    </div>
  );
}

export default App;
