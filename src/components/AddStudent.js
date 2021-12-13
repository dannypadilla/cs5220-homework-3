
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";


function AddStudent() {
    const [student, setStudent] = useState("");
    const [groups, setGroup] = useState([]);

    useEffect( () => {
        axios.get("http://localhost:8080/groups").then( (res) => setGroup(res.data) );
    }, []);


    let history = useHistory();

    const onSubmit = function(e) {
        e.preventDefault();
    }

    return (
        <>
        
        <h2>Add Student</h2>

        <div>

            <form onSubmit={onSubmit}>
                <table border="1" cellPadding="5" cellSpacing="2">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <td>
                                <input
                                    type="text"
                                    name="group"
                                    value={student}
                                    onChange={(e) => setStudent(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>Birth year</th>
                            <td>
                                <input
                                    type="text"
                                    name="group"
                                    value={student}
                                    onChange={(e) => setStudent(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>Parent Name</th>
                            <td>
                                <input
                                    type="text"
                                    name="group"
                                    value={student}
                                    onChange={(e) => setStudent(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>Parent Email</th>
                            <td>
                                <input
                                    type="text"
                                    name="group"
                                    value={student}
                                    onChange={(e) => setStudent(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>Group</th>
                            <td>
                                <select>
                                    <option></option>
                                    {
                                        groups.map(
                                            (group) => (
                                                <option
                                                    key={group.studentGroupId}
                                                    value={group.studentGroupId}>
                                                        {group.name}
                                                </option>
                                            )
                                        )
                                    }
                                </select>
                            </td>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td colSpan="2">
                                <button>Add</button>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </form>

        </div>

        <div>
            <Link to="/students">Back</Link>
        </div>

        </>
    );
}


export default AddStudent;