import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faFile, faComment } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Contato() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [assunto, setAssunto] = useState('')
    const [mensagem, setMensagem] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        if (nome == "" || email == "" || assunto == "" || mensagem == "") {
            alert("Preencha todos os campos!")
        }
        else {
            alert(`Parabéns ${nome}, sua mensagem sobre ${assunto} foi enviada!`)
        }
    }

    return (
        <div className="min-h-screen bg-linear-to-t from-[#380121] to-[#11162D] text-white flex-col flex justify-center items-center">
            <div className="mt-50 text-7xl mb-10">
                CONTATO
            </div>
            <div className="flex justify-center border-2 border-white w-200 mb-30">
                <form onSubmit={handleSubmit} className="flex flex-col gap-20 p-15">
                    <div className="relative">
                        <input className="border-b-2 w-150 rounded-sm outline-none pl-5" placeholder="Nome" type="text" name="nome" onChange={(e) => setNome(e.target.value)} />
                        <FontAwesomeIcon icon={faUser} style={{ color: "#ffffff", }} className="absolute bottom-4 left-140" />
                    </div>

                    <div className="relative">
                        <input className="border-b-2 w-150 rounded-sm outline-none pl-5" placeholder="Nome@email.com" type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                        <FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffffff", }} className="absolute bottom-4 left-140" />
                    </div>

                    <div className="relative">
                        <input className="border-b-2 w-150 rounded-sm outline-none pl-5" placeholder="Assunto" type="text" name="assunto" onChange={(e) => setAssunto(e.target.value)} />
                        <FontAwesomeIcon icon={faFile} style={{ color: "#ffffff", }} className="absolute bottom-4 left-140" />
                    </div>

                    <div className="relative">
                        <textarea className="border-2 w-150 h-50 rounded-sm outline-none p-5" placeholder="Mensagem" type="" name="Mensagem" onChange={(e) => setMensagem(e.target.value)} />
                        <FontAwesomeIcon icon={faComment} style={{ color: "#ffffff", }} className="absolute top-5 left-140" />
                    </div>

                    <button type="submit" className="rounded-2xl self-center border-2 border-white h-15 w-100 transition duration-200 hover:bg-white hover:text-[#380121]">Enviar Mensagem</button>
                </form>
            </div>
        </div>
    )
}



export default Contato