import React, {useEffect, useState} from "react";
import style from "./Header.module.css"
import List from "./List/List";
import SearchContainer from "./Search/SearchContainer";
import Logo from "./Logo/Logo";

let Header = (props)=>{
    let list = props.header.list.map((l,index)=> <List key={index} textList={l.name} linkList={l.link} currentUrl={props.currentUrl}/>)

    const [scroll, setScroll] = useState(0)
    const handleScroll = ()=>{
        setScroll(window.scrollY)
    }

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll)
        return ()=> window.removeEventListener("scroll",handleScroll)
    },[])

    return(
        <div className={scroll<200 ? `${style.heaeder_content}`: `${style.heaeder_content} ${style.header_scrolled}`}>
            <Logo/>
            <ul className={style.header_nav}>
                {list}
            </ul>
            <SearchContainer store={props.store}/>
        </div>
    )
}

export default Header