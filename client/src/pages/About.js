import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import CustomizableWordCloud from "../components/CustomizableWordCloud";
import YouTubeEmbed from "../components/YouTubeEmbed";

const About = () => {
  useEffect(() => {
    document.title = "About David";  
  }, []);

  return (
    <div>
      <Navbar activeLink="ABOUT"/>
      <CustomizableWordCloud read="https://www.davidzylin.com/api/read/words" write="https://www.davidzylin.com/api/write/updateWords"/>
      <div className="music-video">
        <h1 style={{color: "#256D85", marginBottom: "0px"}}>Current Listening To</h1>
        <div className="section-header-bar"></div>
        <YouTubeEmbed embedId="r3LmhnAWiSg" />
      </div>
    </div>
  );
};

export default About;