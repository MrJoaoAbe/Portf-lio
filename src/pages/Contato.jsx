import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faFile, faComment } from "@fortawesome/free-solid-svg-icons";

function Contato() {
    return (
        <div className="min-h-screen bg-linear-to-t from-[#380121] to-[#11162D] text-white flex-col flex justify-center items-center">
            <div className="mt-50 text-7xl mb-10">
                CONTATO
            </div>
            <div className="flex justify-center border-2 border-white w-200 mb-30">
                <form action="" className="flex flex-col gap-20 p-15">
                    <div className="relative">
                        <input className="border-b-2 w-150 rounded-sm outline-none pl-5" placeholder="Nome" type="text" name="nome" />
                        <FontAwesomeIcon icon={faUser} style={{ color: "#ffffff", }} className="absolute bottom-4 left-140" />
                    </div>

                    <div className="relative">
                        <input className="border-b-2 w-150 rounded-sm outline-none pl-5" placeholder="Nome@email.com" type="email" name="email" />
                        <FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffffff", }} className="absolute bottom-4 left-140" />
                    </div>

                    <div className="relative">
                        <input className="border-b-2 w-150 rounded-sm outline-none pl-5" placeholder="Assunto" type="text" name="assunto" />
                        <FontAwesomeIcon icon={faFile} style={{ color: "#ffffff", }} className="absolute bottom-4 left-140" />
                    </div>

                    <div className="relative">
                        <textarea className="border-2 w-150 h-50 rounded-sm outline-none p-5" placeholder="Mensagem" type="" name="Mensagem" />
                        <FontAwesomeIcon icon={faComment} style={{ color: "#ffffff", }} className="absolute top-5 left-140" />
                    </div>
                </form>
            </div>
        </div>
    )
}



export default Contato