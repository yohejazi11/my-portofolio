import { useState } from "react"


function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div className={`fixed flex  items-center  ${menuOpen?'w-[30vw] h-[100vh] max-sm:w-[70vw] right-0 rounded-none pr-[15px] justify-end':'w-[100px] h-[96vh] max-sm:h-[60px] max-sm:w-[60px] right-3 rounded-xl justify-center max-sm:top-[10%]'}  top-[50%]  translate-y-[-50%]  bg-[#8B322C] transition-all duration-200 z-50 shadow-inset-top  `}>
            <div className= {`flex flex-col items-center ${menuOpen?'rounded-full  w-[80px] h-[80px]  bg-[#F5F5DC] absolute left-[0%] translate-x-[-70%]':'rounded-xl  w-[100px] h-[96vh] max-sm:w-[60px] max-sm:h-[60px] bg-[#F5F5DC] hover:w-[90px] hover:h-[94vh] max-sm:hover:h-[90px]'} justify-center  transition-all duration-200 cursor-pointer shadow-2xl`} onClick={()=>{menuOpen?setMenuOpen(false):setMenuOpen(true)}}>
                <ul className={`flex flex-col justify-center items-center ${menuOpen?'gap-y-0 relative ':'gap-y-[0.3rem] '}  transition-all duration-200 `} >
                    <li className={`w-[40px] ${menuOpen?'absolute rotate-45 ':' '} h-[5px] rounded-full bg-slate-800 transition-all duration-700`}></li>
                    <li className={`w-[40px] ${menuOpen?'absolute -rotate-45 ':' '} h-[5px] rounded-full bg-slate-800 transition-all duration-700`}></li>
                </ul>
            </div>
            {menuOpen?
            <div className="flex justify-start items-center p-[20px] w-[85%] h-[85%]  rounded-xl bg-[#DD5746] shadow-inset-top">
                <ul className="w[100%] h-[100%]">
                    <li className="text-[4rem] font-bold text-[#FFC470] max-sm:text-[2em]">YOUSEF</li>
                    <li className="text-[2.5rem] font-bold text-[#FFC470] max-sm:text-[1.5rem]"><a href="#About">ABOUT</a></li>
                    <li className="text-[2.5rem] font-bold text-[#FFC470] max-sm:text-[1.5rem]"><a href="#Projects">WORKS</a></li>
                    <li className="text-[2.5rem] font-bold text-[#FFC470] max-sm:text-[1.5rem]"><a href="#Certifications">Certifications</a></li>
                    <li className="text-[2.5rem] font-bold text-[#FFC470] max-sm:text-[1.5rem]"><a href="#Contact">CONTACT</a></li>
                </ul>

            </div>

                :null}
        </div>

    )
}

export default Header
