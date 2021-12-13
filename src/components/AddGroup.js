
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";


function AddGroup() {
    const [name, setGroup] = useState("");

    let history = useHistory();

    const onSubmit = function (e) {
        e.preventDefault();

        axios.post("http://localhost:8080/groups", {
            name
        })
        .then( () => history.push("/groups") );
    };

    return (
        <>

        <h2>Add Group</h2>

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
                                    onChange={(e) => setGroup(e.target.value)}
                                    required
                                />
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
            <Link to="/groups">Back</Link>
        </div>

        </>
    );
}


export default AddGroup;