import { FaLink } from "react-icons/fa6";
import { VscGithubInverted } from "react-icons/vsc";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import { useState, useEffect, useMemo } from 'react'

function ProjectItems(props) {
    const [isHover, setIsHover] = useState(false);
    const [WebLinkHover, setWebLinkbHover] = useState(false);
    const [GitLinkHover, setGitLinkbHover] = useState(false);
    const [imageCounter, setImageCounter] = useState(0);
    const [image, setImage] = useState('');

    const images = useMemo(() => [props.image1, props.image2, props.image3, props.image4, props.image5].filter(Boolean), [props.image1, props.image2, props.image3, props.image4, props.image5]);

    useEffect(() => {
        setImage(images[imageCounter]);
    }, [imageCounter, images]);

    function nextImage(dir) {
        if (dir === 'next') {
            setImageCounter((prev) => (prev + 1) % images.length);
        } else {
            setImageCounter((prev) => (prev - 1 + images.length) % images.length);
        }
    }

    return (
        <div className={`${isHover ? ' bg-[#8B322C]' : ' bg-transparent'} px-[20px] py-[5px] relative w-[70%] max-sm:w-[100%] h-[fit-content] border-t-[5px] border-[#8B322C] shadow-inset-project `}>
            <div className={`text-[1.7rem] font-bold ${isHover ? 'text-[#DD5746] ' : 'text-[#FFC470] '} text-[#FFC470]`} onMouseEnter={() => { setIsHover(true) }} onMouseLeave={() => { setIsHover(false) }}>{props.projectName}</div>
            {isHover ?
                <div onMouseEnter={() => { setIsHover(true) }} onMouseLeave={() => { setIsHover(false) }} className='flex flex-col justify-between items-center absolute z-20 top-[50%] right-0  translate-y-[-50%] w-[25vw] max-sm:w-[70vw] max-sm:h-[300px] max-sm:translate-x-[10%] h-[400px] bg-[#4793AF] rounded-lg transition-all duration-1000 p-[10px] shadow-2xl'>
                    <div className=" relative w-[100%] h-[220px] rounded-md shadow-2xl">
                        <div className=" absolute flex justify-center items-center rounded-lg w-[35px] h-[50px] right-0 top-[50%] translate-y-[-50%]">
                            <button onClick={() => { nextImage('next') }} className="w-[100%] h-[100%] hover:bg-[#2f5f71] bg-[#4793AF] flex justify-center items-center rounded-l-[5px] text-[2rem] text-[#FFC470]"><IoIosArrowForward></IoIosArrowForward></button>
                        </div>
                        <div className="w-[100%] h-[100%] rounded-md">

                            <img className="w-[100%] h-[100%] rounded-md" src={image}></img>

                        </div>
                        <div className="absolute  rounded-lg w-[35px] h-[50px] left-0 top-[50%]  translate-y-[-50%]">

                            <button onClick={() => { nextImage('back') }} className="w-[100%] h-[100%] hover:bg-[#2f5f71] bg-[#4793AF] flex justify-center items-center rounded-r-[5px] text-[2rem] text-[#FFC470]"><IoIosArrowBack></IoIosArrowBack></button>
                        </div>


                    </div>
                    <p className="W-[100%] text-[2rem] text-[#FFC470] font-bold text-left">{props.projectName}</p>
                    <div className='w-[100%] flex justify-evenly'>
                        <a href={props.weblink} onMouseEnter={() => { setWebLinkbHover(true) }} onMouseLeave={() => { setWebLinkbHover(false) }} className={`w-[30%] h-[40px] ${WebLinkHover ? 'bg-[#DD5746]' : 'bg-[#FFC470]'}  rounded-md flex justify-center items-center transition-all duration-300`}><FaLink className={`${WebLinkHover ? 'text-[#FFC470]' : 'text-[#DD5746]'}  text-[1.5rem]`}></FaLink></a>
                        <a href={props.githublink} onMouseEnter={() => { setGitLinkbHover(true) }} onMouseLeave={() => { setGitLinkbHover(false) }} className={`w-[30%] h-[40px] ${GitLinkHover ? 'bg-[#FFC470]' : 'bg-[#DD5746]'}  rounded-md flex justify-center items-center transition-all duration-300`}><VscGithubInverted className={`${GitLinkHover ? 'text-[#DD5746]' : 'text-[#FFC470]'} text-[1.5rem]`}></VscGithubInverted></a>

                    </div>
                </div>
                : null}
        </div>
    )
}

export default ProjectItems
