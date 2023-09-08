import React from "react";
import {Button} from 'react-bootstrap';

const Logout=({logoutUser})=>{
    const handleLogout=()=>{
        logoutUser();
    };
    return(
        <div>
            <h1>
                Logout
            </h1>
            <Button variant="danger" onclick={handleLogout}>Logout</Button>
        </div>
    )
}
export default Logout;