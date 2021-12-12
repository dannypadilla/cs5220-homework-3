
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";


function AddGroup() {
    return (
        <>

        <h2>Add Group</h2>

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
            <Link to="/groups">Back</Link>
        </div>

        </>
    );
}


export default AddGroup;