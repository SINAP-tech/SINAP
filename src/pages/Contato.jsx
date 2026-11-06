import React, { useState } from "react";
import Header from "../components/navbar/Header";
import Footer from "../components/navbar/Footer";
import VoltarArrow from "../components/input/button-back"; // Componente do botão de voltar
import "../styles/Contato.css";

import DaianeIMG from "../assets/DaianeIMG.png";
import ThataIMG from "../assets/ThataIMG.jpeg";
import LourencoIMG from "../assets/LourencoIMG.jpeg";
import ArthurIMG from "../assets/ArthurIMG.jpeg";

const teamMembers = [
  {
    image: DaianeIMG,
    name: "Daiane da Silva Algarves Castelo Branco",
    role: "Orientadora",
  },
  {
    image: ThataIMG,
    name: "Thamyres Vargas Sales",
    role: "Estudante",
  },
  {
    image: LourencoIMG,
    name: "Lourenço Silva Aguiar",
    role: "Estudante",
  },
  {
    image: ArthurIMG,
    name: "Arthur Lopes Conceição",
    role: "Estudante",
  },
];

export default function Contato() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "Dúvida",
    message: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  function resetForm() {
    setSent(false);
    setForm({
      name: "",
      email: "",
      subject: "Dúvida",
      message: "",
    });
  }

  return (
    <div className="contact-page-wrapper">
      <Header />

      {/* CABEÇALHO PADRONIZADO COM O DESIGN DE CONCEITOS */}
      <section className="original-contact-heading">
        <div className="original-contact-heading-container">
          <div className="back-wrapper seta-branca">
            <VoltarArrow />
          </div>
          <span className="eyebrow-tag">FALE CONOSCO</span>
          <h1>Como podemos ajudar?</h1>
          <p>
            Envie dúvidas, sugestões ou contribuições para melhorar nossa
            plataforma de ensino de informática em Libras.
          </p>
        </div>
      </section>

      <main className="contact-layout">
        <div className="contact-container">
          
          {/* COLUNA ESQUERDA: FORMULÁRIO */}
          <div className="contact-form-card">
            {sent ? (
              <div className="form-success" role="status">
                <span className="success-icon">✓</span>
                <h2>Mensagem enviada!</h2>
                <p>
                  Obrigado por contribuir com o SINAP. Responderemos assim que
                  possível.
                </p>
                <button type="button" className="btn-figma-secondary" onClick={resetForm}>
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-heading">
                  <h2>Envie sua Mensagem</h2>
                </div>

                <div className="field-row">
                  <label>
                    <span>Nome</span>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(event) =>
                        setForm({ ...form, name: event.target.value })
                      }
                      placeholder="Seu nome completo"
                    />
                  </label>

                  <label>
                    <span>E-mail</span>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(event) =>
                        setForm({ ...form, email: event.target.value })
                      }
                      placeholder="seu@email.com"
                    />
                  </label>
                </div>

                <label className="field-full">
                  <span>Assunto</span>
                  <select
                    value={form.subject}
                    onChange={(event) =>
                      setForm({ ...form, subject: event.target.value })
                    }
                  >
                    <option value="Dúvida">Dúvida</option>
                    <option value="Sugestão">Sugestão</option>
                    <option value="Feedback de acessibilidade">
                      Feedback de acessibilidade
                    </option>
                    <option value="Parceria">Parceria</option>
                  </select>
                </label>

                <label className="field-full">
                  <span>Mensagem</span>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(event) =>
                      setForm({ ...form, message: event.target.value })
                    }
                    placeholder="Escreva sua mensagem aqui..."
                  />
                </label>

                <button type="submit" className="btn-figma-primary">
                  Enviar
                </button>
              </form>
            )}
          </div>

          {/* COLUNA DIREITA: CARDS DE INFORMAÇÃO E EQUIPE */}
          <div className="contact-side-cards">
            
            <article className="side-card">
              <h2>Informações de Contato</h2>
              <div className="contact-item">
                <span className="mail-icon">✉️</span>
                <div>
                  <strong>E-mail</strong>
                  <p>sinap98@gmail.com</p>
                </div>
              </div>
            </article>

            <article className="side-card contact-team-card">
              <span className="eyebrow">Quem faz o SINAP</span>
              <h2>Nossa Equipe</h2>
              <p className="team-intro">
                Projeto desenvolvido no IFMA — Campus Timon por estudantes do
                curso de Informática, com orientação docente.
              </p>

              <div className="contact-team-list">
                {teamMembers.map((member) => (
                  <div className="contact-team-member" key={member.name}>
                    <img
                      src={member.image}
                      alt={`Foto de ${member.name}`}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          member.name
                        )}&background=2563EB&color=fff&size=128`;
                      }}
                    />
                    <div>
                      <strong>{member.name}</strong>
                      <span>{member.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </article>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}