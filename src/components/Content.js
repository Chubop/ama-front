import { Grid } from "@mui/material";


export default function Content(props){
    return(
        <div style={props.style}>
            <Grid container alignContent={'center'} justifyContent={'space-around'} alignItems={'center'}
            direction={'column'}
            spacing={4}>
                {props.children}
            </Grid>
        </div>
    )
}