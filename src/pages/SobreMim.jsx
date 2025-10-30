import JoaoAbe from '../assets/JoaoAbe.jpg'

function SobreMim() {
    return (
        <div className="min-h-screen bg-linear-to-t from-[#380121] to-[#11162D] text-white">
            <div className="pt-50 pb-20 grid grid-cols-2">
                <div>
                    <div className="flex justify-center mt-55 text-8xl mb-10">
                        SOBRE MIM
                    </div>
                    <div>
                        <div className="ml-50 mb-20 p-5 text-xl wrap-break-word w-180 border-l-4">
                            <p>Olá! Meu nome é João Abe e desde pequeno sempre fui apaixonado por tecnologia — entender e criar sempre fizeram parte da minha curiosidade.
                                Atualmente curso Engenharia de Software e estou cada vez mais próximo de transformar essa paixão em uma carreira sólida.</p>
                        </div>
                        <div className="ml-50 p-5 text-xl wrap-break-word w-180 border-l-4">
                            <p>Atuo com ABAP e também possuo conhecimentos em Python, JavaScript e SQL.
                                Busco constantemente aprimorar minhas habilidades técnicas e aprender novas tecnologias que me desafiem e ampliem minha visão como desenvolvedor.</p>
                        </div>
                    </div>

                </div>

                <div>
                    <img src={JoaoAbe} alt="JoaoAbe" className='w-170 rounded-4xl select-none pointer-events-none shadow-2xl' draggable="false" />
                </div>
            </div>


        </div>
    )
}

export default SobreMim