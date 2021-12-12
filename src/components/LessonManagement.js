import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function LessonManagement() {
    const [name, setName] = useState("");

    return (
        <>
            <h2>Lesson Management</h2>
            <Link to="/students">Students</Link> | <Link to="/groups">Groups</Link>
        </>
    );
}

export default LessonManagement;