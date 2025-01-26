
function Certifications() {
    return (
        <div className="w-[100%] flex flex-col p-[20px] bg-[#4793AF] shadow-inset-less">
            <p className="w-[80%] text-[5rem] font-bold text-[#F5F5DC] p-[20px] max-sm:w-[100%] max-sm:text-[3rem]">Certifications</p>
            <div id="Certifications" className="w-[100%] h-[50vh] flex flex-wrap justify-center items-center gap-x-[2rem] gap-y-[2rem] px-[15vw] max-sm:h-[fit-content]">
                <div className="w-[200px] h-[200px] flex flex-col items-center justify-between gap-y-[0.5rem] p-[15px] bg-[#F5F5DC] rounded-[8px] card-shadow-hard">
                    <div className="w-[100] h-[90%]">
                        <img
                            className="w-[100%] h-[100%]"
                            src={'icons/Su.png'}
                        ></img>
                    </div>
                    <p className="w-[100%] text-[1.1rem] font-semibold text-[#4793AF] text-center">B.Sc. in Computer Science</p>
                </div>

                <div className="w-[200px] h-[200px] flex flex-col items-center justify-between gap-y-[0.5rem] p-[15px] bg-[#F5F5DC] rounded-[8px] card-shadow-hard">
                    <div className="w-[100] h-[70%]">
                        <img
                            className="w-[100%] h-[100%]"
                            src={'icons/tuwaiq.png'}
                        ></img>
                    </div>
                    <p className="w-[100%] text-[1.1rem] font-semibold text-[#4793AF] text-center">Tuwaiq js bootcamp</p>
                </div>
            </div>

        </div>

    )
}

export default Certifications
