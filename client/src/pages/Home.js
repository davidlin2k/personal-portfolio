import React from "react";
import Navbar from "../components/Navbar";
import ProfilePic from "../assets/profile-pic.jpeg"
import Experience from "../components/Experience";
import { Button, Link } from "@mui/material";
import { ParticlesContainer } from "../components/ParticlesContainer.tsx";

const Home = () => {
    return (
        <div>            
            <Navbar activeLink=""/>
            <ParticlesContainer />
            <div className="home-front-header">
                    <div className="home-front-header-content">
                        <img className="profile-pic" src={ProfilePic} alt="Header" />
                        <h1 style={{color: "#fff"}}>David Lin</h1>
                        <h2 style={{color: "#fff"}}>Software Developer</h2>
                        <Link component={Button} href="https://david-personal-portfolio-bucket.s3.us-east-2.amazonaws.com/David+Lin.pdf" sx={{ textDecoration: "none", fontWeight: "bold"}}>Resume</Link>
                    </div> 
            </div>
            <Experience />
        </div>
    );
}

export default Home;