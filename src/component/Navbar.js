import React from 'react'
import { useHistory } from 'react-router-dom';
import {
useLocation,Link
} from "react-router-dom";
import Clock from './Clock';
export default function Navbar() {
let location = useLocation;
let history = useHistory();

const handleLogout=()=>{
  localStorage.removeItem('token')
  history.push('/login')
  window. location. reload()
}
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" >
      <Link className="navbar-brand" to="/">Event Listing</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className={`nav-item `}>
            <Link className={`nav-link ${location.pathname==='/'?'active':""}`} to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className={`nav-item `}>
            <Link className={`nav-link ${location.pathname==='/event'?'active':""}`} to="/addEvent">Add Event</Link>
          </li>
          {!localStorage.getItem('token')? <>   <li className={`nav-item `}>
            <Link className={`nav-link ${location.pathname==='/login'?'active':""}`} to="/login">Login</Link>
          </li>
          <li className={`nav-item `}>
            <Link className={`nav-link ${location.pathname==='/Signup'?'active':""}`} to="/signup">Sign Up</Link>
          </li></>:
          <>
          <li className={`nav-item `}>
            <Link className={`nav-link ${location.pathname==='/myevents'?'active':""}`} to="/myevents">My Events</Link>
          </li>
          <li className={`nav-item `}>
            <Link className="nav-link" onClick={handleLogout}>logout</Link>
          </li>
          </>
          }
         
        </ul> 
        <Clock/> 
      </div>
    
    </nav>
  )
}