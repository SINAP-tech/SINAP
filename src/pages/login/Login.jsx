import { useState } from 'react'
import { login } from '../../services/authService'

import LogoSinap from '../../assets/logo-header.png'
import BannerSinap from '../../assets/ReditBanner.png'

import '../../styles/Login.css'

export default function Login() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const [mostrarSenha, setMostrarSenha] = useState(false)
    const [erro, setErro] = useState('')
    const [entrando, setEntrando] = useState(false)

    async function handleLogin(e) {

        e.preventDefault()

        if (entrando) return

        setErro('')

        const emailLimpo = email.trim().toLowerCase()

        // Validação dos campos
        if (!emailLimpo || !senha) {
            setErro('Preencha o e-mail e a senha.')
            return
        }

        // Validação simples do formato do e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (!emailRegex.test(emailLimpo)) {
            setErro('Digite um e-mail válido.')
            return
        }

        try {

            setEntrando(true)

            await login(emailLimpo, senha)

            console.log('Logado com sucesso')

        }
        catch (error) {
            console.error('Erro ao fazer login:', error)

            if (error.code === 'auth/too-many-requests') {
                    setErro(
                        'Muitas tentativas. Aguarde alguns minutos e tente novamente.'
                    )
                    return
                }

                setErro('E-mail ou senha incorretos.')
        }       
            finally {

                setEntrando(false)

            }
    }

    return (
        <div className="login-page">

            <div className="login-decoration">

                <div className="login-circle login-circle-one"></div>
                <div className="login-circle login-circle-two"></div>
                <div className="login-circle login-circle-three"></div>

                <div className="login-brand">
                    <img 
                    src={LogoSinap} 
                    alt=""
                    className='login-logo'
                    />

                    <p>
                        Área administrativa
                    </p>

                    <span>
                        Gerenciamento dos conteúdos
                        educacionais em Libras.
                    </span>

                    <img 
                    src={BannerSinap} 
                    alt=""
                    className='login-banner'
                    />
                </div>

            </div>

            <div className="login-content">

                <div className="login-card">

                    <div className="login-header">

                        <span className="login-tag">
                            ADMINISTRAÇÃO
                        </span>

                        <h2>
                            Bem-vindo de volta!
                        </h2>

                        <p>
                            Entre com sua conta para
                            acessar o painel administrativo.
                        </p>

                    </div>

                    <form onSubmit={handleLogin}>

                        <div className="login-field">

                            <label htmlFor="email">
                                E-mail
                            </label>

                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Digite seu e-mail"
                                autoComplete="email"
                                maxLength={254}
                            />

                        </div>

                        <div className="login-field">

                            <label htmlFor="senha">
                                Senha
                            </label>

                            <div className="password-wrapper">

                                <input
                                    id="senha"
                                    type={mostrarSenha ? 'text' : 'password'}
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                    placeholder="Digite sua senha"
                                    autoComplete="current-password"
                                    maxLength={128}
                                />

                                <button
                                    type="button"
                                    className="password-toggle"
                                    onClick={() =>
                                        setMostrarSenha(!mostrarSenha)
                                    }
                                    aria-label={
                                        mostrarSenha
                                            ? 'Ocultar senha'
                                            : 'Mostrar senha'
                                    }
                                >
                                    {mostrarSenha ? '🙈' : '👁️'}
                                </button>

                            </div>

                        </div>

                        <button
                            type="submit"
                            className="login-button"
                        >
                            {entrando ? (
                                <>
                                    <span className="login-spinner"></span>
                                    Entrando...
                                </>
                            ) : (
                                'Entrar'
                            )}
                        </button>

                        {erro && (
                            <div className="login-error">
                                {erro}
                            </div>
                        )}

                    </form>

                </div>

            </div>

        </div>
    )
}