import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import CardProjeto from "../components/CardProjeto";
import BarraPesquisa from "../components/BarraPesquisa";
import { useState, useEffect } from "react";

function Projetos() {

    const [repositorio, setRepositorio] = useState([]);

    const API = import.meta.env.VITE_GITHUB_API;

    useEffect(() => {
        fetch(API)
            .then(res => res.json())
            .then(data => {
                if (data.items) {
                    setRepositorio(data.items);
                }
            })
            .catch(err => console.error("Erro ao buscar repositórios:", err));
    }, [API]);


    return (
        <div className="min-h-screen bg-linear-to-t from-[#380121] to-[#11162D] text-white pb-20">
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

            {repositorio.map(repo => (
                <CardProjeto
                    key={repo.id}
                    nome={repo.name}
                    descricao={repo.description}
                    linguagem={repo.language}
                    linkProjeto={repo.html_url}
                    fork={repo.forks_url}
                    estrelas={repo.stargazers_count}
                />
            ))}


        </div>
    )
}



export default Projetos