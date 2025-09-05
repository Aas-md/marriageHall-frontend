import {signup} from '../api.js'

export async function authSignup(username,password,email){
    
    let res = await signup(username,password,email)
    return res 
}