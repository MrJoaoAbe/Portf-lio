import { Link } from "react-router-dom"

function Footer() {
    return (
        <div className="bg-[#21212A] p-10 text-gray-500 flex justify-center">
            <div className="grid grid-cols-3 gap-x-30">
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold mb-2">Contatos</h3>
                    <p>11968406349</p>
                    <p>Suzano São Paulo</p>
                    <p>joaovictorsouzaabe@gmail.com</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold mb-2">Redes Sociais</h3>
                    <a className='hover:text-[#ffffff] transition duration-200' href="https://www.instagram.com/jao_abe06/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a className='hover:text-[#ffffff] transition duration-200' href="https://www.linkedin.com/in/jo%C3%A3o-victor-de-souza-abe-008647352/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                    <a className='hover:text-[#ffffff] transition duration-200' href="https://github.com/MrJoaoAbe" target="_blank" rel="noopener noreferrer">Github</a>
                    <a className='hover:text-[#ffffff] transition duration-200' href="https://www.youtube.com/@Joaovictor-ds8rb" target="_blank" rel="noopener noreferrer">Youtube</a>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold mb-2">Links Úteis</h3>
                    <Link to="/" className="hover:text-[#ffffff] transition duration-200">HOME</Link>
                    <Link to="/sobremim" className="hover:text-[#ffffff] transition duration-2">SOBRE MIM</Link>
                    <Link to="/projetos" className="hover:text-[#ffffff] transition duration-2">PROJETOS</Link>
                    <Link to="/contato" className="hover:text-[#ffffff] transition duration-2">ENTRE EM CONTATO</Link>
                </div>
            </div>
        </div>

    )
}

export default Footer