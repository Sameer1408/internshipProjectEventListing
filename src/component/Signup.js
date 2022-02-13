import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
export default function Signup() {

let history= useHistory();
const [cred, setcred] = useState({name:"",email:"",password:"",phone:""})

const handleSubmit=async(e)=>{
    e.preventDefault();
    const response = await fetch(`https://lit-beach-32962.herokuapp.com/api/auth/signup`, {
        method: 'POST',
  
        headers: {
          'Content-Type': 'application/json',
        //  'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE3NTQyMmJhNTliYzkwMDA2ZGE3MTVjIn0sImlhdCI6MTYzNTA3NDcxNX0.dGgMjnKsL7r5JR9KNwFYwRMzxKe5Mxtn1sgScJHT7nY"
        },
       body: JSON.stringify({name:cred.name,email:cred.email,password:cred.password,phone:cred.phone })
      });
      const json = await response.json();
      if(json.success){
          localStorage.setItem('token',json.jwtData)
          history.push('/')
          window.location.reload();
      }
      console.log(json)
}

let onChange=(e)=>{
    setcred({...cred,[e.target.name]:e.target.value})
}

    return (
        <div className="container my-3">
        <h2>Create an account on Inotebook</h2>
           <form onSubmit={handleSubmit}>
     <div className="form-group">
    <label for="exampleInputEmail1">Enter Name</label>
    <input type="text" className="form-control" id="name" name="name" value={cred.name} onChange={onChange} aria-describedby="emailHelp" placeholder="Enter Name"/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="email" name="email" value={cred.email} onChange={onChange}  aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="password" name="password" value={cred.password} onChange={onChange}  placeholder="Password"/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Phone number</label>
    <input type="number" className="form-control" id="phone" name="phone" value={cred.phone} onChange={onChange}  placeholder="Phone Number"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form> 
        </div>
    )
}
