import React from "react";
import { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import axios from "axios";
import {login} from './userSlice'



function Login() {
    const [username,setUsername]= useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);
    
    const handlesubmit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:4000/signup",{
            name:username,
            email:email,
            password:password,
        })
        .then((res)=>{
            console.log(res.data);
            if(res.data.success=== true){
                setSubmitted(true);
            }else{
                setSubmitted(false);
            }
        })
        .catch((err)=>{
            console.log(err);
        });
    };
    return (
        <div className="container">
            <div>
                <div>
                    <img className="ikk" src="https://scopeindia.org/images/snowpark-home-slider-logo-new.png" alt="SCOPE INDIA"></img>
                </div>
                {submitted ? <Navigate to="/login" /> : null}

                <h1 style={{ textAlign: "center", color:"orange" }}>Login</h1>
                <form method="post" >  
                <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter username" 
                    onChange={(e) => setUsername(e.target.value)}
                    />

                </div>
                         <div className="form-group">
                        <label for="exampleInputEmail1" style={{ textAlign: "center", color: "white" }}>Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>

                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1" style={{ textAlign: "center", color: "white" }}>Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <br/><br/>
                    <div className="text-center">
                    <button type="submit" onClick={handlesubmit} className="btn btn-primary ">Submit</button>
                    </div>
                    
                </form>
               
                    <br></br>
                    <small>
                        <h5 style={{ textAlign: "center", color: "red" }}>Don't have an account? <Link to="/Registration">Register Now</Link></h5>
                    </small>
                    <br></br>
        


            </div>
        </div>
    );
}
export default Login;