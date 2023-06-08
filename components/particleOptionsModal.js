import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { SketchPicker } from "react-color";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const ParticleOptionsModal = ({ isOpen, onClose, onSpeedChange, onColorChange1,onColorChange2,onColorChange3,onColorChange4,onColorChange5,onColorChange6 }) => {
  const [particleSpeed, setParticleSpeed] = useState(3);
  const [particleColor1, setParticleColor1] = useState("#83ea9c");
  const [particleColor2, setParticleColor2] = useState("#FFFFFF");
  const [particleColor3, setParticleColor3] = useState("#a5fc03");
  const [particleColor4, setParticleColor4] = useState("#03e3fc");
  const [particleColor5, setParticleColor5] = useState("#fcad03");
  const [particleColor6, setParticleColor6] = useState("#fc035a");
  

  const [open1, set1open] = useState("none");
  const [open2, set2open] = useState("none");
  const [open3, set3open] = useState("none");
  const [open4, set4open] = useState("none");
  const [open5, set5open] = useState("none");
  const [open6, set6open] = useState("none");

  const handleSpeedChange = (value) => {
    setParticleSpeed(value);
    onSpeedChange(value);
  };

  const handleColorChange1 = (color) => {
    setParticleColor1(color.hex);
    onColorChange1(color.hex);
  };
  const handleColorChange2 = (color) => {
    setParticleColor2(color.hex);
    onColorChange2(color.hex);
  };
  const handleColorChange3 = (color) => {
    setParticleColor3(color.hex);
    onColorChange3(color.hex);
  };
  const handleColorChange4 = (color) => {
    setParticleColor4(color.hex);
    onColorChange4(color.hex);
  };
  const handleColorChange5 = (color) => {
    setParticleColor5(color.hex);
    onColorChange5(color.hex);
  };
  const handleColorChange6 = (color) => {
    setParticleColor6(color.hex);
    onColorChange6(color.hex);
  };


  const openPicker = (number) =>{
    set1open("none");
    set2open("none");
    set3open("none");
    set4open("none");
    set5open("none");
    set6open("none");

    switch (number) {
      case 1:
        set1open("block");
      break;
      case 2:
        set2open("block");
      break;
      case 3:
        set3open("block");
      break;
      case 4:
        set4open("block");     
      break;
      case 5:
        set5open("block");       
      break;
      case 6:
        set6open("block");      
      break;  
    
    }
  }
  return (
    <Modal open={isOpen} onClose={onClose} center>
      <h2>Particle Options</h2>
      <div>
        <label>Speed</label>
        <Slider
          min={1}
          max={25}
          value={particleSpeed}
          onChange={handleSpeedChange}
        />
      </div>


      <div>
        <label>Color</label>
        <div>
        <button onClick={()=>{openPicker(1)}} style={{padding:'2px', backgroundColor: particleColor1,height:'15px',width:'15px', margin:'5px'}} />
        <button onClick={()=>{openPicker(2)}} style={{padding:'2px', backgroundColor: particleColor2,height:'15px',width:'15px', margin:'5px'}} />
        <button onClick={()=>{openPicker(3)}} style={{padding:'2px', backgroundColor: particleColor3,height:'15px',width:'15px', margin:'5px'}} />
        <button onClick={()=>{openPicker(4)}} style={{padding:'2px', backgroundColor: particleColor4,height:'15px',width:'15px', margin:'5px'}} />
        <button onClick={()=>{openPicker(5)}} style={{padding:'2px', backgroundColor: particleColor5,height:'15px',width:'15px', margin:'5px'}} />
        <button onClick={()=>{openPicker(6)}} style={{padding:'2px', backgroundColor: particleColor6,height:'15px',width:'15px', margin:'5px'}} />
        </div>
        <div style={{display:open1}}>
        <SketchPicker color={particleColor1} onChange={handleColorChange1}/>
        </div>
        <div style={{display:open2}}>
        <SketchPicker color={particleColor2} onChange={handleColorChange2}/>
        </div>
        <div style={{display:open3}}>
        <SketchPicker color={particleColor3} onChange={handleColorChange3}/>
        </div>
        <div style={{display:open4}}>
        <SketchPicker color={particleColor4} onChange={handleColorChange4}/>
        </div>
        <div style={{display:open5}}>
        <SketchPicker color={particleColor5} onChange={handleColorChange5}/>
        </div>
        <div style={{display:open6}}>
        <SketchPicker color={particleColor6} onChange={handleColorChange6}/>
        </div>
      </div>

     <button onClick={onClose}>
      Done
      </button> 
    </Modal>
  );
};

export default ParticleOptionsModal;
