import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap';


const ChangePassword=({logoutUser})=>{
    const[currentPassword,setCurrentPassword]=useState('');
    const [newPassword,setNewPassword]=useState('');
    const handleChangePassword=()=>{
        logoutUser();
    };
    return(
        <div>
            <h1>Change Password</h1>
            <Form>
                <Form.Group controlId="currentpassword">
                    <Form.Label>Current Password</Form.Label>
                    <Form.Control
                    type="password"
                    value={currentPassword}
                    onChange={(e)=>setCurrentPassword(e.target.value)}/>
                </Form.Group>


                <Form.Group controlId="newpassword">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control
                    type="password"
                    value={newPassword}
                    onChange={(e)=>setNewPassword(e.target.value)}/>
                </Form.Group>
                <Button varient="primary" onClick={handleChangePassword}>save</Button>




            </Form>
        </div>
            
        )
}
export default ChangePassword;