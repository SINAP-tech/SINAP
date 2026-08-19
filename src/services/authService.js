import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';

/*
    * Realiza o login do usuário 
    * @param {string} email
    * @param {string} password
    * @returns (promise<UserCredentials>)
    *
*/

export async function login(email, senha) {
    return await signInWithEmailAndPassword(auth, email, senha)   
}