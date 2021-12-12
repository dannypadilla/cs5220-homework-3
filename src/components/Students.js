import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function Students() {
    return (
        <>
            <h2>Students</h2>
            <Link to="/">Back</Link>
        </>
    );
}

export default Students;