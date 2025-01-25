
function Contact() {
    return (
        <div id="Contact" className="w-[100%] h-[20vh] bg-[#DD5746] flex justify-evenly max-sm:flex-col gap-y-[1rem] max-sm:h-[fit-content]  items-center p-[20px]">
            <p className="text-[#8B322C] font-bold text-[2rem] max-sm:text-[1.5rem]">+966-503531981</p>
            <p className="text-[#8B322C] font-bold text-[2rem] max-sm:text-[1.5rem]">Email: yohejazi@gmail.com</p>
            <ul className="flex gap-x-[0.5rem]">
                <li><a href="https://github.com/yohejazi11"><img src="icons/github.png"></img></a></li>
                <li><a href="https://www.linkedin.com/in/yousef-hejazi-218a69167/"><img src="icons/linkedin.png"></img></a></li>
            </ul>
        </div>
    )
}

export default Contact
