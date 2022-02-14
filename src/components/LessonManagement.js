import Link from "@mui/material/Link";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import Typography from "@mui/material/Typography";

import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';

function LessonManagement() {
    return (
        <>
        <Container component="main" maxWidth="sm" sx={{ mt:3, mb: 4 }}>
            <Grid
                container
                justifyContent="space-between"
            >
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Typography component="h1" variant="h4" align="center">
                        Lesson Management
                    </Typography>

                    <ButtonGroup fullWidth="true" variant="contained" aria-label="outlined primary button group">
                        <Button href="/students" variant="contained" startIcon={<SchoolIcon />}>Students</Button>
                        <Button href="/groups" variant="contained" startIcon={<GroupIcon />}>Groups</Button>
                    </ButtonGroup>


                </Paper>

            </Grid>
        </Container>
        </>
    );
}

export default LessonManagement;