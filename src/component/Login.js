import React,{useState} from 'react'
import { useHistory } from 'react-router';
import {
  useLocation,Link
  } from "react-router-dom";

export default function Login(props) {
let history =  useHistory();
const [cred, setcred] = useState({email:"",password:""})

const handleSubmit=async(e)=>{
    e.preventDefault();
    const response = await fetch(`https://lit-beach-32962.herokuapp.com/api/auth/login`, {
        method: 'POST',
  
        headers: {
          'Content-Type': 'application/json',
            },
       body: JSON.stringify({email:cred.email,password:cred.password })
      });
      const json = await response.json();
      if(json.success){
          console.log(json.authtoken)
          localStorage.setItem('token',json.authtoken)
          history.push('/')
          window.location.reload();
      }else{
        props.showAlret("sorry invalid credentials",'warning')
      }
      console.log(json)
}
let onChange=(e)=>{
    setcred({...cred,[e.target.name]:e.target.value})
}

    return (
        <div className="container my-3">
        <h2>Login to Event Listing</h2>
           <form onSubmit={handleSubmit}>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="email" name="email" onChange={onChange} value={cred.email} aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="password" name="password" onChange={onChange} value={cred.password} placeholder="Password"/>
  </div>
  <Link to="/login" style={{marginRight:"20px"}}>Craete an account</Link>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>
    )
}
