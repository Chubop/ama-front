import { useEffect, useState } from "react";
import supabase from "./supabase";

export default async function GetUserData(){ 
    const [user, setUser] = useState({})
    let x = {'h': 1}
    let y = {...x}
    useEffect(() => {
        async function getUser(){
            await supabase.auth.getUser().then((value) => {
                if(value.data?.user) {
                    console.log(y)
                    console.log(user);
                    console.log(value.data.user);
                    setUser({...x});
                    console.log(user);
                }
            })
        }
        getUser();
    }, []);
    return user;
}