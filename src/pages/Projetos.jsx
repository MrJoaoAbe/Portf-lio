import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import CardProjeto from "../components/CardProjeto";
import BarraPesquisa from "../components/BarraPesquisa";

function Projetos() {
    return (
        <div className="min-h-screen bg-linear-to-t from-[#380121] to-[#11162D] text-white">
            <div className="grid grid-cols-2">
                <div className="flex justify-center mt-70 text-8xl mb-10">
                    PROJETOS
                </div>
                {/* <div className="relative flex justify-center mt-80 text-xl mb-10 ">
                    <input type="text" className="border-b-2 border-white w-150 outline-none pl-10" />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute right-1/5 top-5" />
                </div> */}
                <BarraPesquisa />
            </div>

            <CardProjeto />

        </div>
    )
}



export default Projetos