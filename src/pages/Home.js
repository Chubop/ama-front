import { Typography, Grid, Button } from "@mui/material"
import supabase from "../auth/supabase";
import { Link } from "react-router-dom";
import LoginButton from "../auth/LoginButton";
import { useEffect, useState } from "react";

export default function Home(props){
    
    const [session, setSession] = useState(null);

    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })

      supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })
    }, [])

    return(
      <div>
        {session ? (
          <>
            <p>Welcome, {session.user.email}.</p>
            
            <Link to="/createpage">
              <Button variant="outlined">
                Create Asker Page
              </Button>
            </Link>

          </>
          ) : (
          <div>
            <p>Please sign in to view your profile.</p>
            <LoginButton/>
          </div>
        )}

      </div>
    )
}