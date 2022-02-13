import './App.css';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './component/Navbar';
import Login from './component/Login';
import Signup from './component/Signup'
import AddEvent from './component/AddEvent';
import Home from './component/Home'
import Alert from './component/Alert'
import MyEvents from './component/MyEvents';
function App() {

  const [alert, setAlert] = useState(null)

  const showAlret = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  return (
     <>
     <Router>
     <Navbar/>
     <Alert alert={alert} />
      <Switch>
           <Route exact path="/">
            <Home/>
           </Route>
           <Route exact path="/myevents">
            <MyEvents/>
           </Route>
           <Route exact path="/addEvent" >
            <AddEvent showAlret={showAlret}/>
           </Route>
           <Route exact path="/login">
            <Login/>
           </Route>
           <Route exact path="/signup">
            <Signup/>
           </Route>
         </Switch>
    </Router>
   </>
  );
}

export default App;
