import React from "react";
import impo from "../Images/woman.png"

export default function Home(){
    return(
        <div className="container">

            <div className="content">

                <h1>Designer, Software & Full Stack Developer</h1>
                <h2>I design and code beautifully simple things, and I love what I do.</h2>
                <img src={impo} alt="profile"></img>

            </div>

            <div className="info">

                <h2>Hi, I’m Bhagyashi. Nice to meet you.</h2>
                <p>Since beginning my journey as a freelance designer over 11 years ago, 
                    I've done remote work for agencies,<br/> consulted for startups,
                    and collaborated with talented people to create digital products 
                    <br/>for both business and consumer use.I'm quietly confident, naturally curious, and
                     <br/>perpetually working on improving my chops one design problem at a time.</p>
            </div>

            
            
        </div>
    )
}