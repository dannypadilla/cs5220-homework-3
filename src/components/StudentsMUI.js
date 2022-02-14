import { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import axios from "axios";

import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";


function StudentsMUI() {

    const [students, setStudents] = useState([]);
    useEffect( () => {
        axios.get("http://localhost:8080/students").then( (res) => setStudents(res.data) );
    }, []);

    const current_date = new Date();

    return (
        <>
        <Container maxWidth="lg" sx={{ mt:3, mb: 4 }}>
            <Grid container spacing={3}>

                <Grid item xs={12}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Link color="primary" href="/" sx={{ mt: 3 }}>Back</Link>
                        <h2>Students</h2>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Age</TableCell>
                                    <TableCell>Parent</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell align="right">Group</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {
                                    students.map(
                                        (student) => (
                                            <TableRow key={student.id}>
                                                <TableCell>{student.name}</TableCell>
                                                <TableCell>{current_date.getFullYear() - student.birthYear}</TableCell>
                                                <TableCell>{student.parentName}</TableCell>
                                                <TableCell>{student.parentEmail}</TableCell>
                                                <TableCell>{student.groupName}</TableCell>
                                            </TableRow>
                                        )
                                    )
                                }
                            </TableBody>
                        </Table>
                        <Link color="primary" href="/add_student" sx={{ mt: 3 }}>Add Student</Link>
                    </Paper>
                </Grid>
                
            </Grid>
        </Container>
        </>
    );
}

export default StudentsMUI;