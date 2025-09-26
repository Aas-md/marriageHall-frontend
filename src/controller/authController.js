import {signup} from '../api.js'
import { loginApi } from '../api.js'

export async function authSignup(username,password,email){
    
    let res = await signup(username,password,email)
    return res 
}

export async function login(username,password){
    let res = await loginApi(username,password)
    return res
}