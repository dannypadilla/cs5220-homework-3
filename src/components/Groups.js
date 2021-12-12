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
            <table border="1" cellpadding="5" cellspacing="2">

                <thead>
                    <tr>
                        <th>Group</th>
                        <th>Members</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Minnows</td>
                        <td>John, Luke</td>
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