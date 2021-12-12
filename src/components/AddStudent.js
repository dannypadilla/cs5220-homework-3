
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";


function AddStudent() {
    return (
        <>
        
        <h2>Add Student</h2>

        <div>
            <Link to="/students">Back</Link>
        </div>

        </>
    );
}


export default AddStudent;