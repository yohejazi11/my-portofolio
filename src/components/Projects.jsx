import ProjectItems from "./ProjectItems"
function Projects() {
    return (
        <div id="Projects" className="w-[100%] h-[100vh] bg-[#DD5746] p-[20px] shadow-inset-section">
            <h1 className="text-[5rem] font-bold text-[#8B322C] p-[20px] max-sm:text-[3rem]">PROJECTS</h1>

            <div className="w-[100%] flex flex-col gap-y-[2rem] p-[20px]">

                <ProjectItems
                    projectName={'WHITE TIK'}
                    image1={'/whittik1.png'}
                    image2={'/whittik2.png'}
                    image3={'/whittik3.png'}
                    image4={'/whittik4.png'}
                    image5={'/whittik5.png'}
                    weblink={''}
                    githublink={'https://github.com/arwaalqhtanii/Final-Project'}

                ></ProjectItems>

                <ProjectItems
                    projectName={'TUWAIQ SITE'}
                    image1={'/tuwaiq1.png'}
                    image2={'/tuwaiq2.png'}
                    image3={'/tuwaiq3.png'}
                    weblink={'https://yohejazi11.github.io/week-2-project/'}
                    githublink={'https://github.com/yohejazi11/week-2-project'}
                ></ProjectItems>

                <ProjectItems
                    projectName={'bodan aqar'}
                    image1={'/bodan1.png'}
                    image2={'/bodan2.png'}
                    image3={'/bodan3.png'}
                    weblink={'https://bodanaqar.com/'}
                    githublink={'https://github.com/yohejazi11/aqarSite'}
                ></ProjectItems>
                <ProjectItems
                    projectName={'national day project'}
                    image1={'/national1.png'}
                    image2={'/national2.png'}
                    image3={'/national3.png'}
                    image4={'/national4.png'}
                    weblink={'https://yohejazi11.github.io/W4-D5-National-Day-Project/'}
                    githublink={'https://github.com/yohejazi11/W4-D5-National-Day-Project'}
                ></ProjectItems>




            </div>

        </div>
    )
}

export default Projects
