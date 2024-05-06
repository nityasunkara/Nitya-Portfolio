import React, { useEffect, useRef } from 'react'
import tailwindLogo from "../Utils/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg"
import HtmlLogo from "../Utils/Html.png"
import cssLogo from "../Utils/Css.png";
import jsLogo from "../Utils/js.png";
import reactLogo from "../Utils/react.png"
import pythonLogo from "../Utils/Python.png";
import muiLogo from "../Utils/Mui.png"
import bootStrapLogo from "../Utils/bootstrap-logo.svg"
import primeReactLogo from "../Utils/primereact-logo.webp"
import visualStudioLogo from "../Utils/Visual Studio.png"
import gitHubLogo from "../Utils/GitHub.png"

const MySkills = () => {
    const container = useRef(null);
    const container1 = useRef(null);
    const container2 = useRef(null);
    function scrollHandler(element, speed, initialTranslateLTR, initialTranslateRTL, isLTR) {
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;

        let totalTranslate = 0;
        if(isLTR) {
            totalTranslate = translateX + initialTranslateLTR;
        } else {
            totalTranslate = -(translateX + initialTranslateRTL);
        }

        element.style.transform = `translateX(${totalTranslate}px)`;
    }
    useEffect(()=>
    {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    document.addEventListener("scroll", () => {
                        scrollHandler(
                            entry.target,
                            0.15,
                            -48*4,
                            0,
                            true
                        );
                    })
                } else {
                    document.removeEventListener("scroll", () => {
                        scrollHandler(
                            entry.target,
                            0.15,
                            -48*4,
                            0,
                            true
                        );
                    })
                }
            });
        });
        observer.observe(container.current);
        
        return () => observer.unobserve(container.current);
    },[container])
    
    useEffect(()=>
    {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    document.addEventListener("scroll", () => {
                        scrollHandler(
                            entry.target,
                            0.15,
                            0,
                            36*4,
                            false
                        );
                    })
                } else {
                    document.removeEventListener("scroll", () => {
                        scrollHandler(
                            entry.target,
                            0.15,
                            0,
                            36*4,
                            true
                        );
                    })
                }
            });
        });
        observer.observe(container1.current);
        
        return () => observer.unobserve(container2.current);
    },[container1])
    useEffect(()=>
    {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    document.addEventListener("scroll", () => {
                        scrollHandler(
                            entry.target,
                            0.15,
                            -48*4,
                            0,
                            true
                        );
                    })
                } else {
                    document.removeEventListener("scroll", () => {
                        scrollHandler(
                            entry.target,
                            0.15,
                            -48*4,
                            0,
                            true
                        );
                    })
                }
            });
        });
        observer.observe(container2.current);
        
        return () => observer.unobserve(container2.current);
    },[container2])
    const skills = [
        {
            logo:HtmlLogo,
            name:"HTML",
        },
        {
            logo:cssLogo,
            name:"CSS",
        },
        {
            logo:bootStrapLogo,
            name:"BootStrap",
        },
        {
            logo:tailwindLogo,
            name:"Tailwind CSS",
        },
        {
            logo:reactLogo,
            name:"React JS",
        },
        {
            logo:pythonLogo,
            name:"Python",
        },
        {
            logo:muiLogo,
            name:"Material UI",
        },
        {
            logo:primeReactLogo,
            name:"Prime React",
        },
        {
            logo:gitHubLogo,
            name:"GitHub",
        },
        {
            logo:jsLogo,
            name:"JavaScript",
        },
        {
            logo:visualStudioLogo,
            name:"Visual Studio",
        },
        {
            logo:tailwindLogo,
            name:"Tailwind CSS",
        },
        {
            logo:tailwindLogo,
            name:"Tailwind CSS",
        },
        {
            logo:tailwindLogo,
            name:"Tailwind CSS",
        },
    ]
  return (
    <div className='w-full flex flex-col items-center'>
        <h1 className='text-4xl font-bold mb-[50px]'>My Skills</h1>
        <div className='flex flex-col gap-4 w-full overflow-hidden'>
            <div ref={container} className='flex flex-row  -translate-x-48 w-screen gap-4 transition-transform ease-linear'>
                {skills.map((skill)=><div className='flex flex-col items-center justify-center min-w-[130px] rounded-lg  min-h-[130px] border border-gray-300 gap-4'>
                    <img alt='logo' className='h-[40px] w-[40px]' src={skill?.logo}/>
                    <h1 className='text-md font-semibold'>{skill?.name}</h1>
                </div>)}
            </div>
            <div ref={container1} className='flex flex-row -translate-x-36 w-screen gap-4 transition-transform ease-linear'>
                {skills.map((skill)=><div className='flex flex-col items-center justify-center min-w-[130px] rounded-lg  min-h-[130px] border border-gray-300 gap-4'>
                    <img alt='logo' className='max-h-[40px] max-w-[40px]' src={skill?.logo}/>
                    <h1 className='text-md font-semibold'>{skill?.name}</h1>
                </div>)}
            </div>
            <div ref={container2} className='flex laptop:hidden flex-row -translate-x-48 w-screen gap-4 transition-transform ease-linear'>
                {skills.map((skill)=><div className='flex flex-col items-center justify-center min-w-[130px] rounded-lg  min-h-[130px] border border-gray-300 gap-4'>
                    <img alt='logo' className='h-[40px] w-[40px]' src={skill?.logo}/>
                    <h1 className='text-md font-semibold'>{skill?.name}</h1>
                </div>)}
            </div>
        </div>
    </div>
  )
}

export default MySkills