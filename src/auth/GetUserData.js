import { useEffect, useState } from "react";
import supabase from "./supabase";

export default async function GetUserData(){ 
    const [user, setUser] = useState({})

    useEffect(() => {
        async function getUser(){
            const request = await supabase.auth.getUser();
            setUser(request.data.user);
            return request;
        }
        getUser();
    }, []);
    
    return user;
}