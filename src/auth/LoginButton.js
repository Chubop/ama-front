import { Button } from '@mui/material';
import React from 'react';
import supabase from './supabase';

const LoginButton = () => {


    const handleLogin = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
    });
    }

  return (
    <>    
        <Button variant="contained" color="primary" onClick={handleLogin}>
            Log In with Google
        </Button>
    </>

  );
};

export default LoginButton;