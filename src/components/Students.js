import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Students() {

    const [students, setStudents] = useState([]);
    useEffect( () => {
        axios.get("http://localhost:8080/students").then( (res) => setStudents(res.data) );
    }, []);

    return (
        <>

        <h2>Students</h2>

        <div>
            <Link to="/add_student">Add Student</Link>
        </div>

        <div>
            <table border="1px">

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Parent</th>
                        <th>Email</th>
                        <th>Group</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        students.map(
                            (student) => (
                                <tr key={student.id}>
                                    <td>{student.name}</td>
                                    <td>b</td>
                                    <td>{student.parentName}</td>
                                    <td>{student.parentEmail}</td>
                                    <td>{student.groupName}</td>
                                </tr>
                            )
                        )
                    }
                </tbody>

            </table>
        </div>

        <div>
            <Link to="/">Back</Link>
        </div>

        </>
    );
}

export default Students;