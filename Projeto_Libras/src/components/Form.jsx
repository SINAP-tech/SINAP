import React from "react";
import { useState } from "react";
import './Form.css'

export default function Form(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [opcao, setOpcao] = useState('');
    const [aceito, setAceito] = useState(false);

    function enviarFormulario(e){
        e.preventDefault();
        console.log("Nome:", nome);
        console.log("Email:", email);
        console.log("Mensagem:", mensagem);
        console.log("Opção selecionada:", opcao);
        console.log("Confirmou caixa:", aceito);

        
        if (!aceito) {
            alert("Você precisa confirmar antes de enviar.");
        return;
        }

        alert("Formulário enviado com sucesso! 🚀");
        }
    
    return(
        <>
        <form onSubmit={enviarFormulario} className="formulario">
            <label>
                nome: 
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Seu nome completo" required/>
            </label>

            <br/>

            <label>
                email: 
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="seu@email.com" required className="Label"/>
            </label>

            <br />

            <label className="Label">Assunto
                <select value={opcao} onChange={(e) => setOpcao(e.target.value)} >
                    <option value="">Selecione o assunto</option>
                    <option value="">Dúvida sobre o conteúdo</option>
                    <option value="">Problema Técnico</option>
                    <option value="">Sugestão de Conteúdo</option>
                    <option value="">Colaboração</option>
                    <option value="">Outros</option>
                </select>
            </label>

            <br />
            <label> assunto: 
                <input type="mensagem" onChange={(e) => setMensagem(e.target.value)} placeholder="escreva sua mensagem aqui..." className="Label" />
            </label>

            <br />

            <label><input type="checkbox" checked={aceito} onChange={() => setAceito(!aceito)}/>Preciso de atendimento em Libras</label>
            <br />
            <div>
            <button type="submit">Enviar</button>
            </div>
        </form>
        </>
    );
}