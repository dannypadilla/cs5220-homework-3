
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
                        <th>Name</th>
                        <th>
                            <input type="text"></input>
                        </th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <td colspan="2" scope="row">
                            <button>Add</button>
                        </td>
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