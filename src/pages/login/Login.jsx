import { useState } from 'react'

import { login } from '../../services/authService'

import '../../styles/Login.css'

export default function Login(){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function handleLogin() {
        try{
            const userCredential = await login(email, senha)

            console.log('Logado com sucesso')
            console.log(userCredential.user)

        }
        catch(error){
            console.error('erro ao fazer login', error)
        }
        
    }
    
    return(
         <div>
      <h1>Login Administrativo</h1>

      <input
        type="email"
        placeholder="Digite seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Digite sua senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <button onClick={handleLogin}>Entrar</button>
    </div>
    )
}