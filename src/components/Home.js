import { Typography, Grid, Button } from "@mui/material"
import supabase from "../auth/supabase";
import GetUserData from "../auth/GetUserData";
import { useEffect, useState } from "react";

export default function Home(props){
  
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);
    const [userName, setUserName] = useState(null)

    GetUserData().then(
      function(value){
        setUser(value);
      },
      function(error){
        console.log(error)
      }
    );

    useEffect(() => {
      if(user.id){
          setUserName(getUsernameFromUUID(user.id));
          setLoading(false);
      }
    }, [user])

    
    async function getUsernameFromUUID(uuid) {
      const { data, error } = await supabase
        .from('profiles')
        .select('username')
        .eq('id', uuid)
        .single()
    
      console.log(data);
      setUserName(data)
      if (error) {
        console.error(error)
        return null
      }
      return data
    }


    async function handleSignOut(){
      await supabase.auth.signOut();
      window.location.reload();
    }

    function isLoggedIn(){
      return user ? true : false
    }


    return(
      <Grid container direction="column">
          <Grid item>
            {/* Welcome, {userName.username} */}
          </Grid>
          <Grid item>
            <Typography>
              {/* {isLoggedIn() ? "Logged In" : "Logged Out"} */}
            </Typography>
          </Grid>
          <Grid item>
            <Button onClick={() => handleSignOut()}>Log Out</Button>
          </Grid>
          <Grid item>
            <Button onClick={() => console.log(user)}>log user object</Button>
          </Grid>
          <Grid item>
            <Button onClick={() => {
              console.log(userName)
            }}>log username</Button>
          </Grid>
      </Grid>
    )

}