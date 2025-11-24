import React from "react";
import './Contato.css'
import Form from "../components/Form";
import Header from "../components/Header";
import Footer from "../components/Footer";
import IconEmail from "../assets/email-icon.png";
import IconLibras from "../assets/logo-header.png";
import IconClock from "../assets/clock-icon.png";

export default function Contato(){
    return(
        <>
            <Header/>

            <div className="pagina-contato">

                {/* TÍTULO E DESCRIÇÃO */}
                <div className="titulo-bloco">
                    <h1>Contato</h1>
                    <p>
                        Entre em contato conosco! Estamos aqui para ajudar, tirar dúvidas e ouvir suas sugestões 
                        sobre como melhorar nossa plataforma SINAP de ensino de informática em Libras.
                    </p>
                </div>

                <div className="conteudo">

                    {/* FORMULÁRIO À ESQUERDA */}
                    <div className="form-bloco">
                        <h2>Envie sua Mensagem</h2>
                        <Form/>
                    </div>

                    {/* COLUNA DIREITA */}
                    <div className="coluna-direita">

                        {/* INFORMAÇÕES DE CONTATO */}
                        <div className="caixa">
                            <h2>Informações de Contato</h2>

                            <div className="linha">
                                <img src={IconEmail} className="icone"/>
                                <div>
                                    <p><strong>E-mail</strong></p>
                                    <p className="sub">contato@sinap.edu.br<br/>suporte@sinap.edu.br</p>
                                </div>
                            </div>

                        </div>

                        {/* PERGUNTAS FREQUENTES */}
                        <div className="caixa">
                            <h2>Perguntas Frequentes</h2>

                            <p><strong>• Os vídeos têm legendas?</strong><br/>
                            Sim, todos os vídeos possuem legendas e interpretação em Libras.</p>

                            <p><strong>• O conteúdo é gratuito?</strong><br/>
                            Todo o conteúdo é gratuito e sempre será.</p>

                            <p><strong>• Posso colaborar com o projeto?</strong><br/>
                            Entre em contato conosco para saber como contribuir!</p>
                        </div>

                        {/* NOSSA EQUIPE */}
                        <div className="caixa">
                            <h2>Nossa Equipe</h2>
                            <p>
                                Este projeto é desenvolvido por estudantes comprometidos com a inclusão digital e acessibilidade.
                                Nossa equipe inclui:
                            </p>

                            <ul>
                                <li>Desenvolvedores de tecnologia assistiva</li>
                                <li>Intérpretes e instrutores de Libras</li>
                                <li>Designers de experiência inclusiva</li>
                                <li>Especialistas em educação digital</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}
