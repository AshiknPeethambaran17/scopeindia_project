import React from "react";
import { Link } from "react-router-dom";
import './Register.css';
import { useState } from "react";
import axios from "axios";



const FormExample=()=> {
    const[formData,setFormData]=useState({
        firstName:"",
        lastName:"",
        gender:"",
        dateOfBirth:"",
        email:"",
        password:"",
        phoneNumber:"",
        country:"",
        state:"",
        city:"",
        hobbies:"",
        avatar:null,
    });
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setFormData((prevState)=>({...prevState,[name]:value}));
    };
    const handleHobbiesChange=(e)=>{
        const{value,checked}=e.target;
        let updatedHobbies=[...formData.hobbies];
        if(checked){
            updatedHobbies.push(value);
        }else{
            updatedHobbies=updatedHobbies.filter((hobby)=>hobby!==value);
        }
        setFormData((prevState)=>({...prevState,hobbies:updatedHobbies}));
        };
       
        const handleSubmit=(e)=>{
            e.preventDefault();
            const isValid=true;
            if(isValid){
                axios.post('/api/Registration',formData)
                .then((response)=>{
                    console.log(response.data);
                })
                .catch((error)=>{
                    console.error(error);
                });
            }else{

            }
        }
    return (
        <div className="form">

          
            
            <form  onSubmit={handleSubmit}   className="form" style={{ textAlign: "center", backgroundColor: "blue", width: "298px" }}>

            <h1 style={{ textAlign: "center", color: "white" }}>Registration </h1>
            <Link to="/"> <h6>click here to go home page</h6><img src="https://scopeindia.org/images/scope-india-logo-bird.png" style={{ textAlign: "center" }} alt=""></img></Link>
           
                <label className="label"><p>FirstName:</p> </label>
                <input  className="input"  type="text" onChange={handleChange} placeholder="Enter Your First Name"/><br></br>

                <label className="label"><p>LastName:</p></label>
                <input  className="input"  type="text" onChange={handleChange} placeholder="Enter Your Last Name" /><br></br>

                <label className="label" ><p  >Email:</p></label>
                <input onChange={handleChange} className="input"  type="email"  placeholder="Enter Your Email"/><br></br>

                <label className="label"><p>password:</p></label>
                <input onChange={handleChange} className="input"  type="password" placeholder="Enter Your Password"/><br></br>
                <br></br>

                <h3 style={{color:"white"}}><p>Gender</p></h3>
                <label className="label">Male</label>
                <input onChange={handleChange} className="input" name="gender" value={"male"} type="radio" />

                <label className="label">Female</label>
                <input onChange={handleChange} className="input" name="gender" value={"female"} type="radio" />
                <label className="label">Others</label>
                <input onChange={handleChange} className="input" name="gender" value={Text} type="radio" /><br></br>

                <br></br>
                <h5 style={{color:"white"}}>Date of Birth:<input className="do" type={"date"} name="dob"></input></h5><br></br>
                <h5 style={{color:"white"}}><p>Phone Number:<input className="ph" type={"tel"} name="number" placeholder="Enter contact Number"></input></p></h5><br></br>

                <h5 style={{color:"white"}} ><p>
                    country :
                    <select className="cou" name="country">
                        <option value="option1">select country</option>
                        <option value="option2">India</option>
                        <option value="option3">Pakistan</option>
                        <option value="option4">Germany</option>
                        <option value="option5">Korea</option>
                        <option value="option6">Japan</option>
                        <option value="option7">Srilanka</option>
                        <option value="option8">America</option>
                    </select></p></h5>
                <br></br>

                <h5 style={{color:"white"}}><p>State :
                    <select className="sta" name="state" style={{ borderRadius: "10px" }}>
                        <option value="option1">select state</option>
                        <option value="option2">Kerala</option>
                        <option value="option3">Tamilnadu</option>
                        <option value="option4">ANdhra Pradesh</option>
                        <option value="option5">Arunachal Pradesh</option>
                        <option value="option6">Assam</option>
                        <option value="option7">Goa</option>
                    </select> </p></h5>
                <br></br>

                <h5 style={{color:"white"}}><p>City :
                    <select className="cit" name="city" >
                        <option value="option1">select City</option>
                        <option value="option2">Trivandrum</option>
                        <option value="option3">Kochi</option>
                        <option value="option4">Nagarcoil</option>
                    </select>
                </p></h5>
                <br></br>

                <h5 style={{color:"white"}}>Hobbies :</h5>
                <div className="hobbies-box">
                    <input onChange={handleHobbiesChange} type="radio" value={"ride"} />
                    <label className="Label">RIDE</label><br></br>

                    <input onChange={handleHobbiesChange} type="radio" value={"sports"} />
                    <label className="Label">SPORTS</label><br></br>

                    <input onChange={handleHobbiesChange} type="radio" value={"watching movies"} />
                    <label className="Label">WATCHIG MOVIES</label><br></br>

                    <input onChange={handleHobbiesChange} type="radio" value={"music"} />
                    <label className="Label">MUSIC</label><br></br>

                    <input onChange={handleHobbiesChange} type="radio" value={"reading books"} />
                    <label className="Label">READING BOOKS</label><br></br>
                    <br></br>
                </div>  


                <label htmlFor="image"><h5 style={{color:"white"}}>Upload image:</h5></label>
                
                <input type="file"
                    name="image"
                    accept="image/*"
                />




               <p style={{color:"white"}}><input onChange={handleSubmit} type="submit" className="sub" name="submit"></input></p>
              

            </form>
        </div>
    );
}
export default FormExample;
