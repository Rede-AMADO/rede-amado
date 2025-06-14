/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";

import forum from "../assets/forum-lgbt.png";
import ser from "../assets/ser-diversidade.png";
import centrale from "../assets/centrale.png";

export const API_BASE_URL = "http://127.0.0.1:8000";

export async function sendContact(contactData) {
  const response = await fetch(`${API_BASE_URL}/contato/`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contactData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || "Erro ao enviar contato");
  }

  return await response.json();
}

function Contact({ isOpen, onClose }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [feedback, setFeedback] = useState(null);
  
  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFeedback(null);

    try {
      const result = await sendContact({ nome, email, mensagem });
      setFeedback({ type: "success", text: "Contato salvo com sucesso!" });
      setNome("");
      setEmail("");
      setMensagem("");
    } catch (err) {
      setFeedback({ type: "error", text: err.message });
    }
  };

  return (
    <div className="fixed inset-0 backdrop-blur-xs bg-opacity-50 z-50 flex justify-center items-center transition-opacity" >
      <div className="bg-[rgb(254,253,251)] w-full max-w-5xl scale-75 rounded-lg p-6 relative shadow-lg flex flex-col md:flex-row gap-10 animate-fade-in">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl animate-fade-out"
          onClick={onClose}
        >
            X
        </button>

        <div className="md:w-1/3 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Instituições Parceiras</h2>

          <div className="bg-white shadow rounded-lg p-4 space-y-6">
            <div className="text-center">
              <img src={forum} alt="Fórum LGBT" className="mx-auto h-40" />
              <p className="text-sm text-gray-600 mt-1">forumlgbt.org.br</p>
            </div>
            <div className="text-center">
              <img src={ser} alt="SER Diversidade" className="mx-auto h-40" />
              <p className="text-sm text-gray-600 mt-1">serdiversidade.org</p>
            </div>
            <div className="text-center">
              <img src={centrale} alt="Centrale" className="mx-auto h-40" />
              <p className="text-sm text-gray-600 mt-1">centrale.org</p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Contato</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 outline-none"
              required
            />
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 outline-none"
              required
            />
            <textarea
              placeholder="Mensagem"
              rows="4"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 outline-none"
              required
            />
            <button
              type="submit"
              className="bg-[#205d60] text-white px-6 py-2 rounded hover:bg-[#17484a] transition"
            >
              Enviar
            </button>
          </form>

          {feedback && (
            <p className={`mt-2 text-sm ${
              feedback.type === "success" ? "text-green-600" : "text-red-600"
            }`}>
              {feedback.text}
            </p>
          )}

          <span className="text-center ">
            "Se você não consegue amar a si mesmo, como você vai amar qualquer outra pessoa?” — RuPaul
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contact;