import React, { useState } from "react";



const RegistrationForm = () => {
    

const [fname, setFname] = useState('');
const [lname, setLname] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [submitted, setSubmitted] = useState(true);
const [error, setError] = useState(false);
const handleFirstName = (e) => {
    setFname(e.target.value);
    setSubmitted(true);
};
const handleLastName = (e) => {
    setLname(e.target.value);
    setSubmitted(true);
};
const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false)
};
const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
};
const handleGender = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
};

const handleSubmit = (e) => {
    e.preventDefault();
    if (fname === '' || email === '' || password === '') {
        setError(true);
    } else {
        setSubmitted(true);
        setError(false);
    }
};
const errorMessage = () => {
    return (
        <div className="error" style={{ display: error ? '' : 'none' }}>

        </div>
    );
};
const successMessage = () => {
    return (
        <div className="success" style={{ display: submitted ? "" : "none", }}>
            <h1>user {fname} succesfully registered!!</h1>
        </div>
    )
}

  return (
  
    
    <div>
         <img className= "iks"src="https://scopeindia.org/images/snowpark-home-slider-logo-new.png" alt="SCOPE INDIA"></img>
      <form onSubmit={handleSubmit}>
        
        
      
      {successMessage && <p>Registration successful!</p>}
      {errorMessage && <p>Unable to register. Please try again.</p>}
      </form>
    </div>
  );
};

export default RegistrationForm;
