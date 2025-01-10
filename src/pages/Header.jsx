import React from 'react'
import { FcEngineering } from "react-icons/fc";
const Header = () => {
  return (
       <h1 className="title">
           <div className="title-icon">
              <FcEngineering className="d-block" />
           </div>    
           <div className="title-text">
             <a href="https://github.com/JeWookRyu">류제욱</a>
           </div>   
       </h1>    
  )
}

export default Header

