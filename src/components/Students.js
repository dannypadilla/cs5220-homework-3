import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function Students() {
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
                    <tr>
                        <td>a</td>
                        <td>b</td>
                        <td>c</td>
                        <td>d</td>
                        <td>e</td>
                    </tr>
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