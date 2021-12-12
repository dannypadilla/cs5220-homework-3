import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function Groups() {
    return (
        <>
            <h2>Groups</h2>
            <Link to="/">Back</Link>
        </>
    );
}

export default Groups;