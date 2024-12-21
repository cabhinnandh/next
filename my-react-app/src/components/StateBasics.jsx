import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const StateBasics = () => {
  const [fname, setFname] = useState("");
    const [submit, setSubmit] = useState("");
   

  const onChangeHandle = (e) => {
    setFname(e.target.value);
  };

  const onClickHandle = () => {
    setSubmit(fname);
  };

  const onKeyPressHandle = (e) => {
    if (e.key === "Enter") {
      setSubmit(fname);
    }reerfer;
  };

  return (
    <div>
      <Typography>Welcome to state basics, {submit}</Typography>
      <TextField
        variant="outlined"
        onChange={onChangeHandle}
       
      />
      <Button variant="outlined" onClick={onClickHandle}>
        SUBMIT
      </Button>
     
    </div>
  );
};

export default StateBasics;
