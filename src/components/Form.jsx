import React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";// importando API
import './Form.css'

export default function Form(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [opcao, setOpcao] = useState('');

    function enviarFormulario(e){
    e.preventDefault();

    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Mensagem:", mensagem);
    console.log("Opção selecionada:", opcao);

    emailjs.send(
        "service_nb2n4or",
        "template_tucue2o",
        {
            nome: nome,
            email: email,
            assunto: opcao,
            mensagem: mensagem
        },
        "YkPt8KUD2iMV6tJyR"
    );// importando os IDS e definindo os prompts

    alert("Formulário enviado com sucesso! 🚀");
}
    
    return(
        <>
        <form onSubmit={enviarFormulario} className="formulario">
            <div className="escreva">
            
            <label className="Label">
                <p>Nome</p>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Seu nome completo" required/>
            </label>

            
            <label className="Label">
                <p>Email:</p>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="seu@email.com" required className="Label"/>
            </label>
            </div>
            <br />
            <p>Assunto</p>
            <label className="Label">
                <select value={opcao} onChange={(e) => setOpcao(e.target.value)} >
                    <option value="">Selecione o assunto</option>
                    <option value="Dúvida sobre o conteúdo">Dúvida sobre o conteúdo</option>
                    <option value="Problema Técnico">Problema Técnico</option>
                    <option value="Sugestão de Conteúdo">Sugestão de Conteúdo</option>
                    <option value="Colaboração">Colaboração</option>
                    <option value="Outros">Outros</option>
                </select>
            </label>

            <br />
            <p>Mensagem</p>
            <label className="LabelMensagem">
                <textarea type="mensagem" onChange={(e) => setMensagem(e.target.value)} placeholder="escreva sua mensagem aqui..." className="mesage" />
            </label>
            <br />
            <div>
            <button type="submit">Enviar</button>
            </div>
        </form>
        </>
    );
}