import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function Groups() {
    return (
        <>

        <h2>Groups</h2>

        <div>
            <Link to="/add_group">Add Group</Link>
        </div>

        <div>
            <table border="1px">
                
                <thead>
                    <tr>
                        <th>Group</th>
                        <th>Members</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>a</td>
                        <td>b</td>
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

export default Groups;