import React from "react";
import { useState } from "react";
import { Form,Button, FormLabel } from "react-bootstrap";

const ProfileEdit=({user,updateuser})=>{
    const[name,setName]=useState(user.name);
    const[email,setEmail]=useState(user.email);

    const handleSave=()=>{
        const updatedUser={...user,name,email};
        updatedUser(updatedUser);
    };
    return(
        <div>
            <h1>Edit Profile</h1>
            <form>
                <Form.Group controlId="name">
                    <FormLabel>Name</FormLabel>
                    <Form.Control
                    type="text"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}/>

                </Form.Group>


                <Form.Group controlId="email">
                    <FormLabel>Email</FormLabel>
                    <Form.Control
                    type="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}/>

                </Form.Group>
                <Button variant="primary" onClick={handleSave}>save</Button>
            </form>
        </div>
    )
}
export default ProfileEdit;