import React, { useState } from "react";

export default function ChoiceGame() {
  const choiceQuestions = [
    {
      id: 1,
      question: "Escolha Seu / Sua",
      options: [
        { id: "a", src: "/videos/seu1.mp4", correct: true },
        { id: "b", src: "/videos/seu2.mp4", correct: false }
      ]
    },
    {
      id: 2,
      question: "Escolha Sinal",
      options: [
        { id: "a", src: "/videos/sinal1.mp4", correct: true },
        { id: "b", src: "/videos/sinal2.mp4", correct: false }
      ]
    }
  ];

  const [step, setStep] = useState(0);
  const [result, setResult] = useState(null);

  const question = choiceQuestions[step];

  const handleSelect = (option) => setResult(option.correct);

  const handleNext = () => {
    if (step + 1 < choiceQuestions.length) {
      setStep(step + 1);
      setResult(null);
    } else {
      alert("Jogo concluído!");
      setStep(0);
      setResult(null);
    }
  };

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: "0 auto", fontFamily: "Segoe UI" }}>
      <h2>{question.question}</h2>

      <div style={{ marginTop: 20, display: "flex", gap: 20, flexWrap: "wrap" }}>
        {question.options.map((op) => (
          <div
            key={op.id}
            onClick={() => handleSelect(op)}
            style={{
              borderRadius: 20,
              overflow: "hidden",
              background: "#fff",
              border: "1px solid #eee",
              cursor: "pointer",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              flex: 1
            }}
          >
            <video src={op.src} width="100%" controls />
          </div>
        ))}
      </div>

      {result !== null && (
        <div style={{
          marginTop: 20,
          padding: 16,
          borderRadius: 12,
          background: result ? "#d8ffe0" : "#ffe0e0",
          textAlign: "center",
          fontSize: 18,
          fontWeight: "bold"
        }}>
          {result ? "✔️ Acertou!" : "❌ Tente novamente!"}
        </div>
      )}

      {result !== null && (
        <button
          onClick={handleNext}
          style={{
            marginTop: 20,
            padding: "10px 20px",
            borderRadius: 10,
            border: "none",
            background: "#ff8f00",
            color: "#fff",
            fontSize: 16,
            cursor: "pointer",
            display: "block",
            marginLeft: "auto"
          }}
        >
          Feito ✔
        </button>
      )}
    </div>
  );
}
