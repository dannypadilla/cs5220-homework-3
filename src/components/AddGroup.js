
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";


function AddGroup() {
    return (
        <>
            <h2>Add Group</h2>
            <Link to="/groups">Back</Link>
        </>
    );
}


export default AddGroup;