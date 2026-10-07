import {
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'

/*
    * Realiza o login do usuário 
    * @param {string} email
    * @param {string} password
    * @returns (promise<UserCredentials>)
    *
*/

import { auth } from '../firebase/config'

export async function login(email, senha) {
    return await signInWithEmailAndPassword(auth, email, senha)
}

export async function logout() {
    return await signOut(auth)
}