import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function BarraPesquisa() {
    return (
        <div className="relative flex justify-center mt-80 text-xl mb-10 ">
            <input type="text" className="border-b-2 border-white w-150 outline-none pl-10" />
            <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute right-1/5 top-5" />
        </div>
    )
}

export default BarraPesquisa