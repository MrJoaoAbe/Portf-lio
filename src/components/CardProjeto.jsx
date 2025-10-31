import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function CardProjeto({ key, nome, descricao, linguagem, linkProjeto, fork, estrelas }) {
    return (
        <div className="flex justify-center mt-20">
            <div className="grid grid-cols-2 grid-rows-3 border-2 border-white w-250 p-10 gap-5">
                <h1 className="flex justify-center col-start-1 text-4xl font-bold">{nome}</h1>
                <p className="flex justify-center col-start-1 text-xl">{!descricao ? "Sem descrição ainda..." : descricao}</p>
                <div className="flex justify-center flex-row col-start-1 gap-15">
                    <p className="flex justify-center items-center h-10 text-xl">< FontAwesomeIcon icon={faStar} style={{ color: "#ffffff", }} /> : {estrelas}</p>
                    <p className="flex justify-center items-center text-xl h-10 border-2 border-white rounded-4xl p-1">{!linguagem ? "HTML" : linguagem}</p>
                </div>

                <p className="flex justify-center col-start-2 row-start-1 text-xl">Gostou do Projeto?</p>
                <a href={linkProjeto} className="flex justify-center items-center col-start-2  row-start-2 rounded-2xl self-center border-2 h-15 w-100 bg-white text-[#380121]">Acessar Projeto</a>
                <a href={fork} className="flex justify-center items-center col-start-2  row-start-3 rounded-2xl self-center border-2 h-15 w-100 bg-white text-[#380121]">Fork</a>
            </div>
        </div>
    )
}

export default CardProjeto

