import React from "react";
import "./topmenu.css";
import button from "../../assets/Button.png";
import button1 from "../../assets/Button (1).png";
import button2 from "../../assets/Button (2).png";
import button3 from "../../assets/Button (3).png";
import line from "../../assets/Line 224.png";
import SearchPage from '../../pages/SearchPage'

const Functionbar: React.FC = () => {
    
  return (
    <div className="functionbar">
      <div >
        <div className="buttonsection">
        <img src={button} width="25" />
        <img src={button1} width="25" />
        <img src={button2} width="25" />
        <img src={button3} width="25" />
        <div className="selectedtext">
        <img src={line} height={25} />
        <p>2 selected</p>
        <button className="deletebuttton">Delete Selected</button>
        </div>
        </div>
       
        <SearchPage />
      </div>
      
    </div>
  );
}


export default Functionbar;