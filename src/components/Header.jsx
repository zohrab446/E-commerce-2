import '../App.css';
import React from 'react'
import '../css/Header.css'
import { useState } from "react";
import { IoIosBasket } from "react-icons/io";
import { CiLight } from "react-icons/ci";
import { MdNightlightRound } from "react-icons/md";




 function Header() {
    
    const[theme , setTheme] = useState(false);
    const changeTheme = () =>{
        const root = document.getElementById("root");
      
        if(theme){
            root.style.backgroundColor="black";
            root.style.color="#fff"
        }else{
            root.style.backgroundColor="#fff";
            root.style.color="black"   
        }
        setTheme(!theme);
    }
  return (
    <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}} >
        <div className='flex-row'>
            <img className='logo' src="./src/images/logo.png" alt="" />
            <p className='logo-text'>N.E</p>
        </div>

        <div className='flex-row'>
          <input className='search-input' type="text"  placeholder='FIND Something'/>
          <IoIosBasket className='icon'/>
         {theme ? <CiLight className='icon' onClick={changeTheme}/> : <MdNightlightRound className='icon' onClick={changeTheme}/>}
          
        </div>
    </div>
  )
}


export default Header