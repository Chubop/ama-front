import { Typography, Grid, Button } from "@mui/material"
import supabase from "../auth/supabase";
import GetUserData from "../auth/GetUserData";

export default function Home(props){
    
    const user = GetUserData();

    async function handleSignOut(){
      await supabase.auth.signOut();
    }

    return(
      <Grid container direction="column">
          <Grid item>
            Welcome
          </Grid>
          <Grid item>
            <Typography>
              {user ? "Logged In" : "Logged Out"}
            </Typography>
          </Grid>
          <Grid item>
            <Button onClick={() => handleSignOut()}>Log Out</Button>
          </Grid>
      </Grid>

    )
}