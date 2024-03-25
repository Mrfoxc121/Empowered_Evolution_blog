"use client"

import Link from "next/link"
import Logo from "./Logo"
import { DribbleIcon, Pintrest,  MediumIcon, SunIcon, TwitterXIcon, MoonIcon } from "../Icon"
import siteMetadata from "@/src/utils/siteMetaData"
import { useThemeSwitch } from "../Hooks/useThemeSwitch"
import { useState } from "react"
import { cx } from "@/src/utils"


const Header = () => {

  const [mode, setMode] = useThemeSwitch()
  const [click, setClick] = useState(false)

  const toggle = ()=>{
    setClick(!click)
  }

  return (
    <div className='w-full p-4 px-5 sm:px-10 flex items-center justify-between'>
     <Logo />
     <button className="inline-block sm:hidden z-50" onClick={toggle}>
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span className="absolute top-0 right-1 inline-block w-full h-0.5 rounded transition-all duration-200 bg-dark dark:bg-light"
            style={{
                transform: click ? "rotate(-45deg) translateY(0)" : "rotate(0deg) translateY(6px)"
            }}
            > &nbsp;</span>
          <span className="absolute top-0 right-1 inline-block w-full h-0.5 rounded transition-all duration-200 bg-dark dark:bg-light"
          style={{
            opacity: click ? 0 : 1
        }}> 
          &nbsp;</span>
          <span className="absolute top-0 right-1 inline-block w-full h-0.5 rounded transition-all duration-200 bg-dark dark:bg-light"
           style={{
            transform: click ? "rotate(45deg) translateY(0)" : "rotate(0deg) translateY(-6px)"
        }}> &nbsp;</span>
          </div>       
        </div>
      </button>
      <nav className="w-max flex sm:hidden md:flex items-center gap-4 font-medium capitalize rounded-full px-6 sm:px-8 py-3  fixed top-6 right-1/2 translate-x-1/2 bg-light dark: backdrop-blur-sm z-50 transition-all ease duration-300" 
      style={{
        top: click ? "1rem" : "-5rem"
    }}>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
        <button onClick={() => setMode(mode === "light" ? "dark" : "light") } className={cx("w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1", mode === "light" ? "bg-dark text-light" : "bg-light text-dark")}>
            {
              mode === "light" ?   <MoonIcon className={"fill-dark"} /> : <SunIcon className={"fill-dark"} />
            }
        </button>
     </nav>
     <nav className="w-max hidden md:flex items-center gap-4 font-medium capitalize rounded-full px-8 py-3  fixed top-6 right-1/2 translate-x-1/2 bg-light backdrop-blur-sm z-50" >
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
        <button onClick={() => setMode(mode === "light" ? "dark" : "light") } className={cx("w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1", mode === "light" ? "bg-dark text-light" : "bg-light text-dark")}>
            {
              mode === "light" ?   <MoonIcon className={"fill-dark"} /> : <SunIcon className={"fill-dark"} />
            }
        </button>
     </nav>
     <div className="hidden sm:flex items-center">
        <a className=" inline-block w-6 h-6 mr-4" href={siteMetadata.linkedin} target="_blank">
        <MediumIcon className="w-6 h-6 hover:scale-125 transition-all ease duration-200 dark:fill-light"/>
        </a>
        <a className="inline-block w-6 h-6 mr-4" href={siteMetadata.github} target="_blank">
            <Pintrest className="cursor-pointer w-6 h-6 hover:scale-125 transition-all ease duration-200 dark:fill-light"/>
        </a>
        <a className="inline-block w-6 h-6 mr-4" href={siteMetadata.dribbble} target="_blank">
            <DribbleIcon className="cursor-pointer w-6 h-6 hover:scale-125 transition-all ease duration-200" />
        </a>
        <a className="inline-block w-6 h-6 mr-4" href={siteMetadata.twitter} target="_blank">
            <TwitterXIcon className="cursor-pointer w-6 h-6 hover:scale-125 transition-all ease duration-200 dark:fill-light"/>
        </a>
     </div>
    </div>
  )
}

export default Header
