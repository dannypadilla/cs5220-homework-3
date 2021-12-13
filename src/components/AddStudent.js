
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";


function AddStudent() {
    
    const [name, setName] = useState("");
    const [birthYear, setBirthYear] = useState("");
    const [parentName, setParentName] = useState("");
    const [parentEmail, setParentEmail] = useState("");
    const [groupId, setGroupId] = useState("");

    const [groups, setGroup] = useState([]);

    let history = useHistory();

    useEffect( () => {
        axios.get("http://localhost:8080/groups").then( (res) => setGroup(res.data) );
    }, []);

    const onSubmit = function(e) {
        e.preventDefault();

        axios.post("http://localhost:8080/students", {
            name,
            birthYear,
            parentName,
            parentEmail,
            groupId
        }).then( () => history.push("/students") );
    };

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
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>Birth year</th>
                            <td>
                                <input
                                    type="text"
                                    name="birthYear"
                                    value={birthYear}
                                    onChange={(e) => setBirthYear(e.target.value)}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>Parent Name</th>
                            <td>
                                <input
                                    type="text"
                                    name="parentName"
                                    value={parentName}
                                    onChange={(e) => setParentName(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>Parent Email</th>
                            <td>
                                <input
                                    type="text"
                                    name="parentEmail"
                                    value={parentEmail}
                                    onChange={(e) => setParentEmail(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>Group</th>
                            <td>
                                <select name="groupId" onChange={(e) => setGroupId(e.target.value)}>
                                    <option></option>
                                    {
                                        groups.map(
                                            (group) => (
                                                <option
                                                    key={group.studentGroupId}
                                                    value={group.studentGroupId}
                                                    >
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