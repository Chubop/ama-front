import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import supabase from "./supabase";


export default function SignIn(props){
    return(
        <Auth
        supabaseClient={supabase}
        appearance={{theme: ThemeSupa}}
        providers={["google"]}/>
    )
}