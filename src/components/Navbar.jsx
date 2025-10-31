import { NavLink } from "react-router-dom"
import Curriculo from "../assets/CurriculoJoaoAbe.pdf"

function Navbar() {
    return (
        <div className="bg-[#11162D] h-20 grid grid-cols-8 text-white">
            <div className="flex items-center col-start-1 ">
                <NavLink to="/" className="rouge-font text-6xl ml-10">J</NavLink>
            </div>

            <div className="flex items-center justify-end col-start-5 text-lg">
                <NavLink to="/sobremim" className={({ isActive }) =>
                    isActive
                        ? "border-b-2 border-white pb-1 text-white rounded-b-md"
                        : "hover:border-b-2 hover:border-white pb-1 text-white transition duration-500 rounded-b-md"
                }>SOBRE MIM</NavLink>
            </div>

            <div className="flex items-center justify-center col-start-6 text-lg">
                <NavLink to="/projetos" className={({ isActive }) =>
                    isActive
                        ? "border-b-2 border-white pb-1 text-white rounded-b-md"
                        : "hover:border-b-2 hover:border-white pb-1 text-white transition duration-500 rounded-b-md"
                }>PROJETOS</NavLink>
            </div>

            <div className="flex items-center justify-end col-start-7 text-lg">
                <NavLink to="/contato" className={({ isActive }) =>
                    isActive
                        ? "border-b-2 border-white pb-1 text-white rounded-b-md"
                        : "hover:border-b-2 hover:border-white pb-1 text-white transition duration-500 rounded-b-md"
                }>ENTRE EM CONTATO</NavLink>
            </div>

            <div className="flex items-center justify-end col-start-8 text-lg mr-10">
                <a href={Curriculo} download="CurriculoJoãoAbe">CURRICULO</a>
                {/* Adicionei este download para as pessoaa poderem baixar meu curriculo através do portfólio */}
            </div>
        </div>
    )
}

export default Navbar

"Rouge Script"