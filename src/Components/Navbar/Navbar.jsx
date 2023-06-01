import React, {useEffect, useState} from "react";
import style from "./Navbar.module.css"
import List from "./List/List";


let Navbar = (props)=>{

    let list = props.listNavbar.map((l,index)=> <List key={index} textList={l.name} linkList={l.link} currentUrl={props.currentUrl}/>)

    const [scroll, setScroll] = useState(0)
    const handleScroll = ()=>{
        setScroll(window.scrollY)
    }

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll)
        return ()=> window.removeEventListener("scroll",handleScroll)
    },[])

    return(
        <div className={scroll<200 ? `${style.nav}`: `${style.nav} ${style.nav_scrolled}`}>
            <div className={style.nav_content}>
                <ul className={style.nav_ul}>
                    {list}
                </ul>
            </div>
        </div>
    )
}

export default Navbar