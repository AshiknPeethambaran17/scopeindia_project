import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import FormExample from "./useparams/Register";
import Home from "./useparams/Home";
import Contact from "./useparams/Contact";
import About from "./useparams/About";
import Login from "./useparams/Login";
import Course from "./useparams/Course";
import RegistrationForm from "./useparams/RegistrationForm";


function App() {
    return (
        <Router>
           <Link to="/"></Link>
            <Routes>
                
                <Route exact path='/About' element={<About/>}></Route>
                <Route path='/About' element={<About />}></Route>

                <Route exact path='/contact' element={<Contact/>}></Route> 
                <Route path='/Contact' element={<Contact />}></Route>

                <Route exact path='/' element={<Home/>}></Route>
                <Route  path ='/Registration' element={<FormExample />}></Route>

                <Route exact path='/login' element={<Login/>}></Route>
                <Route  path ='/Login' element={<Login />}></Route>

                <Route exact path='/Course' element={<Course />}></Route>
                <Route path='/Course' element={<Course/>}></Route>
                
                <Route exact path='/RegistrationForm' element={<RegistrationForm/>}></Route>
                <Route path='/RegistrationForm' element={<RegistrationForm/>}></Route>
            </Routes>
        </Router>
    );
}

export default App;
