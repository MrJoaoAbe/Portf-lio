import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className="bg-[#11162D] h-20 grid grid-cols-8 text-white">
            <div className="flex items-center col-start-1 ">
                <Link to="/" className="rouge-font text-6xl ml-10">J</Link>
            </div>
            <div className="flex items-center justify-end col-start-5 text-lg">
                <Link to="/sobremim">SOBRE MIM</Link>
            </div>
            <div className="flex items-center justify-center col-start-6 text-lg">
                <Link to="/projetos">PROJETOS</Link>
            </div>
            <div className="flex items-center justify-end col-start-7 text-lg">
                <Link to="/contato">ENTRE EM CONTATO</Link>
            </div>
            <div className="flex items-center justify-end col-start-8 text-lg mr-10">
                <h1>CURRICULO</h1>
            </div>
        </div>
    )
}

export default Navbar

"Rouge Script"