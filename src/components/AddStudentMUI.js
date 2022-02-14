
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Link from "@mui/material/Link";

import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';


function AddStudentMUI() {
    
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
        
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
            <Paper variant="outlined" sx={{ my: { xs:3, md: 6}, p: { xs: 2, md: 3} }}>
                <Typography component="h1" variant="h4" align="center">
                    Add Student
                </Typography>
                
            <Box>
                <form onSubmit={onSubmit}>
                    <FormControl fullWidth sx={{ m: 1}}>
                        <TextField
                            type="text"
                            label="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </FormControl>

                    <FormControl fullWidth sx={{ m: 1}}>
                        <TextField
                            type="text"
                            label="Birth Year"
                            value={birthYear}
                            onChange={(e) => setBirthYear(e.target.value)}
                            required
                        />
                    </FormControl>

                    <FormControl fullWidth sx={{ m: 1}}>
                        <TextField
                            type="text"
                            label="Parent Name"
                            value={parentName}
                            onChange={(e) => setParentName(e.target.value)}
                            required
                        />
                    </FormControl>

                    <FormControl fullWidth sx={{ m: 1}}>
                        <TextField
                            type="text"
                            label="Parent Email"
                            value={parentEmail}
                            onChange={(e) => setParentEmail(e.target.value)}
                            required
                        />
                    </FormControl>

                    <FormControl fullWidth sx={{ m: 1}}>
                        <InputLabel id="demo-simple-select-label">Group</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Group"
                            onChange={(e) => setGroupId(e.target.value)}
                        >
                            <MenuItem>
                                <em>None</em>
                            </MenuItem>  // For empty input
                            {
                                groups.map(
                                    (group) => (
                                        <MenuItem
                                            key={group.studentGroupId}
                                            value={group.studentGroupId}
                                            >
                                                {group.name}
                                        </MenuItem>
                                    )
                                )
                            }
                        </Select>
                    </FormControl>
                    <Grid
                        container
                        justifyContent="space-between"
                    >
                        <Grid item xs={2}>
                            <Button href="/students" variant="contained" startIcon={<ArrowBackRoundedIcon />}>Back</Button>
                        </Grid>
                        
                        <Grid item xs={2}>
                            <Button type="submit" variant="contained" endIcon={<AddCircleOutlineRoundedIcon />}>Add</Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
            </Paper>
        </Container>
        </>
    );
}


export default AddStudentMUI;