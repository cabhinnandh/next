import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";

const ButtonNaming = () => {
  const [fname, setFname] = useState("click any button "); 

  const reactHandle = (buttonName = "click any button") => {
    setFname(buttonName);
  };

  
  useEffect(() => {
    reactHandle(); 
  }, []);

  return (
    <div>
      <h1>Button Naming</h1>
      <div>Welcome {fname}</div>
      <div>
        <Button variant="outlined" onClick={() => reactHandle("React")}>
          React
        </Button>
      </div>
      <div>
        <Button variant="outlined" onClick={() => reactHandle("Angular")}>
          Angular
        </Button>
      </div>
      <div>
        <Button variant="outlined" onClick={() => reactHandle("Vue.js")}>
          Vue.js
        </Button>
      </div>
    </div>
  );
};

export default ButtonNaming;
