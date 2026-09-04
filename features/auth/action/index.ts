"use server"

import {auth} from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

//sign-in with github
export async function signinWithGithub(formData:FormData){
    const callback=formData.get("callbackUrl");

    const result =await auth.api.signInSocial({
        body:{
            provider:"github",
            callbackURL:"/dashboard"
        },
        headers:await headers()
    })
console.log("result=",result);
    if(result.url){
        redirect(result.url);
    }
}

// //sign-in with google
// export async function signinWithGoogle(formData:FormData){
//     const callback=formData.get("callbackUrl");
// console.log("callback:",callback,"formData:",formData);

//     const result =await auth.api.signInSocial({
//         body:{
//             provider:"google",
//             callbackURL:"/dashboard"
//         },
//         headers:await headers()
//     })
// console.log("result=",result);
//     if(result.url){
//         redirect(result.url);
//     }
// }