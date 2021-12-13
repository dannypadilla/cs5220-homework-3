import { Link } from "react-router-dom";


function LessonManagement() {
    return (
        <>
            <h2>Lesson Management</h2>
            <Link to="/students">Students</Link> | <Link to="/groups">Groups</Link>
        </>
    );
}

export default LessonManagement;