
function Certifications() {
    return (
        <div id="Certifications" className="w-[100%] h-[80vh] flex flex-wrap justify-center items-center gap-x-[2rem] gap-y-[2rem] px-[15vw] bg-[#4793AF]">
            <div className="w-[200px] h-[200px] flex flex-col items-center justify-between gap-y-[0.5rem] p-[15px] bg-[#DD5746] rounded-[8px] shadow-2xl">
                <div className="w-[100] h-[90%]">
                    <img
                    className="w-[100%] h-[100%]"
                    src={'icons/Su.png'}
                    ></img>
                </div>
                <p className="w-[100%] text-[1.1rem] font-semibold text-[#8B322C] text-center">B.Sc. in Computer Science</p>
            </div>

            <div className="w-[200px] h-[200px] flex flex-col items-center justify-between gap-y-[0.5rem] p-[15px] bg-[#DD5746] rounded-[8px] shadow-2xl">
                <div className="w-[100] h-[90%]">
                    <img
                    className="w-[100%] h-[100%]"
                    src={'icons/tuwaiq.png'}
                    ></img>
                </div>
                <p className="w-[100%] text-[1.1rem] font-semibold text-[#8B322C] text-center">Tuwaiq js bootcamp</p>
            </div>


        </div>
    )
}

export default Certifications
