import Link from "@mui/material/Link";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

function LessonManagement() {
    return (
        <>
        <Container maxWidth="lg" sx={{ mt:3, mb: 4 }}>
            <Grid container spacing={3}>

                <Grid item xs={12} md={4} lg={3}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                    <h2>Lesson Management</h2>
                    <Link href="/students" sx={{ mt: 3 }} >Students</Link>
                    <Link href="/groups" sx={{ mt: 3 }}>Groups</Link>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
        </>
    );
}

export default LessonManagement;