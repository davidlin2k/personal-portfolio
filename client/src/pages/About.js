import React from "react";
import Navbar from "../components/Navbar";
import CustomizableWordCloud from "../components/CustomizableWordCloud";

const About = () => {
  return (
    <div>
      <Navbar activeLink="ABOUT"/>
      <CustomizableWordCloud read="https://www.davidzylin.com/api/read/words" write="https://www.davidzylin.com/api/write/updateWords"/>
      <div>
        
      </div>
    </div>
  );
};

export default About;