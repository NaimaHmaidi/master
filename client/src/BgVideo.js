import React from "react";
import video from './assets/video.mp4';
import { NavLink } from "react-router-dom";
import './BgVideo.css'

function BgVideo (){
   return(
    <div className="bgContainer" style={{marginTop:'50px'}} >
        <div className="overlay"></div>
        <video src={video} autoPlay loop muted/>
        <div className="containe" style={{marginTop:'30px'}}>
            <h2 className="wlc">WELCOME</h2>
            <h1 className="title">WORK JOBE</h1>
        </div>
        
        <div className="button2">
            <NavLink to="/auth " style={{color:'white'}}>
                <p style={{fontSize:'20px'}}>login/resgister</p>
            </NavLink>
        </div>
        <div className="button3">
            <NavLink to="/" style={{color:'white'}}>
                <p style={{fontSize:'20px'}}>Home</p>
            </NavLink>
        </div>
       



    </div>
   );
}

export default BgVideo;
