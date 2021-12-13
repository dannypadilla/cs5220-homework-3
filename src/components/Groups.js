import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


function Groups() {

    const [entries, setEntries] = useState([]);
    useEffect( () => {
        axios.get("http://localhost:8080/groups").then( (res) => setEntries(res.data) );
    }, []);

    return (
        <>

        <h2>Groups</h2>

        <div>
            <Link to="/add_group">Add Group</Link>
        </div>
        <p></p>

        <div>
            <table border="1" cellPadding="5" cellSpacing="2">

                <thead>
                    <tr>
                        <th>Group</th>
                        <th>Members</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        entries.map(
                            (entry) => (
                                <tr key={entry.studentGroupId}>
                                    <td>{entry.name}</td>
                                    <td>{entry.studentList.join(", ") } </td>
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

export default Groups;