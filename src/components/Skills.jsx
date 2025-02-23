
function Skills() {
    return (
        <div id="Skills" className="w-[100%] flex flex-col p-[20px] shadow-inset-less">
            <p className="w-[80%] text-[5rem] font-bold text-[#4793AF] p-[20px] max-sm:w-[100%] max-sm:text-[3rem]">Skills</p>
            <div  className="w-[100%] h-[80vh] max-sm:h-[fit-content] p-[20px] flex flex-wrap justify-center items-center gap-x-[2rem] gap-y-[2rem] px-[15vw]">
                <div className="w-[200px] h-[200px] flex flex-col items-center justify-center gap-y-[0.5rem] p-[30px] bg-[#4793AF] rounded-[8px] card-shadow">
                    <div className="w-[100] h-[90%]">
                        <img
                            className="w-[100%] h-[100%]"
                            src={'icons/html.png'}
                        ></img>
                    </div>
                    <p className="text-[2rem] font-semibold text-[#FFC470]">HTML</p>
                </div>

                <div className="w-[200px] h-[200px] flex flex-col items-center justify-center gap-y-[0.5rem] p-[30px] bg-[#4793AF] rounded-[8px] card-shadow">
                    <div className="w-[100] h-[90%]">
                        <img
                            className="w-[100%] h-[100%]"
                            src={'icons/css-3.png'}
                        ></img>
                    </div>
                    <p className="text-[2rem] font-semibold text-[#FFC470]">CSS</p>
                </div>

                <div className="w-[200px] h-[200px] flex flex-col items-center justify-center gap-y-[0.5rem] p-[30px] bg-[#4793AF] rounded-[8px] card-shadow">
                    <div className="w-[100] h-[90%]">
                        <img
                            className="w-[100%] h-[100%]"
                            src={'icons/bootstrap.png'}
                        ></img>
                    </div>
                    <p className="text-[2rem] font-semibold text-[#FFC470]">Bootstrap</p>
                </div>

                <div className="w-[200px] h-[200px] flex flex-col items-center justify-center gap-y-[0.5rem] p-[30px] bg-[#4793AF] rounded-[8px] card-shadow">
                    <div className="w-[100] h-[90%]">
                        <img
                            className="w-[100%] h-[100%]"
                            src={'icons/atom.png'}
                        ></img>
                    </div>
                    <p className="text-[2rem] font-semibold text-[#FFC470]">React.js</p>
                </div>

                <div className="w-[200px] h-[200px] flex flex-col items-center justify-center gap-y-[0.5rem] p-[30px] bg-[#4793AF] rounded-[8px] card-shadow">
                    <div className="w-[100] h-[90%]">
                        <img
                            className="w-[100%] h-[100%]"
                            src={'icons/git.png'}
                        ></img>
                    </div>
                    <p className="text-[2rem] font-semibold text-[#FFC470]">Git</p>
                </div>

                <div className="w-[200px] h-[200px] flex flex-col items-center justify-center gap-y-[0.5rem] p-[30px] bg-[#4793AF] rounded-[8px] card-shadow">
                    <div className="w-[100] h-[90%]">
                        <img
                            className="w-[100%] h-[100%]"
                            src={'icons/github-sign.png'}
                        ></img>
                    </div>
                    <p className="text-[2rem] font-semibold text-[#FFC470]">GitHub</p>
                </div>
                <div className="w-[200px] h-[200px] flex flex-col items-center justify-center gap-y-[0.5rem] p-[30px] bg-[#4793AF] rounded-[8px] card-shadow">
                    <div className="w-[100] h-[90%]">
                        <img
                            className="w-[100%] h-[100%]"
                            src={'icons/figma.png'}
                        ></img>
                    </div>
                    <p className="text-[2rem] font-semibold text-[#FFC470]">Figma</p>
                </div>
            </div>
        </div>

    )
}

export default Skills
