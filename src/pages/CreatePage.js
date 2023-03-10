import { Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";


export default function CreatePage(){
    return(
        <>
            <Grid container direction="column">
                <Grid item>
                    <Typography>Create page</Typography>
                </Grid>
                <Grid item>
                    <Typography>Enter page name</Typography>
                    <TextField placeholder="e.g., John Doe"/>
                </Grid>
                <Grid item>
                    <Typography>Enter page snub</Typography>
                    <TextField placeholder="e.g., johnd"/>
                </Grid>
                <Grid item>
                    <Typography>Enter five starter questions.</Typography>
                    <TextField placeholder="1"/>
                    <TextField placeholder="2"/>
                    <TextField placeholder="3"/>
                    <TextField placeholder="4"/>
                    <TextField placeholder="5"/>
                </Grid>
                <Grid item>
                    <Button>Submit</Button>
                </Grid>
            </Grid>

        </>
    )
}