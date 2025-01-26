
function About() {
    return (
        <div id="About" className=" flex flex-col justify-center w-[100%] h-[100vh] bg-[#FFC470] p-[20px] shadow-inset-first-section">
            <h1 className="w-[80%] text-[5rem] font-bold text-[#DD5746] p-[20px] max-sm:w-[100%] max-sm:text-[3rem]">ABOUT</h1>
            <p className="w-[80%] text-[2rem] text-[#8B322C]  p-[20px] max-sm:w-[100%] max-sm:text-[1.2rem]">A web developer specialized in building web applications. Focused on creating interactive experiences with an emphasis on good user experience, utilizing technologies like React, Node.js, and Express.js. Passionate about continuous learning and delivering innovative solutions that meet user needs.</p>
            <div className="flex justify-center gap-x-[2rem] w-[100%] mt-[2rem]">
                <a
                    className="w-[200px] h-[64px] max-sm:w-[150px] flex justify-center items-center rounded-[8px] bg-[#DD5746] text-[#8B322C] hover:bg-[#FFC470] hover:text-[#DD5746] hover:border-[#DD5746] hover:border-[2px] transition-all duration-300 text-[2rem] max-sm:text-[1.5rem] font-semibold text-center button-shadow"
                    href="https://drive.google.com/file/d/1rVxpTN9DrnkQT7-GWWEANfI12h0zbo8F/view?usp=sharing"
                >CV</a>
                <a
                    className="w-[200px] h-[64px] max-sm:w-[150px]  flex justify-center items-center rounded-[8px] bg-[#FFC470] text-[#DD5746] hover:bg-[#DD5746] hover:text-[#8B322C] hover:border-[#8B322C] border-[#DD5746] border-[2px] transition-all duration-300 text-[2rem] max-sm:text-[1.5rem] font-semibold text-center button-shadow"
                    href="#Contact"><p>Contact me</p></a>

            </div>
        </div>
    )
}

export default About
