import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Image from "next/image";
import Typography from "@mui/material/Typography";

const LoginModal = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Image src="/logo.jpg" alt="logo" width={250} height={250} />
      <Typography variant="h4" component="div" gutterBottom>
        Login
      </Typography>
      <TextField
        id="outlined-basic"
        label="Email Address"
        variant="outlined"
        style={{ margin: "10px", width: "400px" }}
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        style={{ margin: "10px", width: "400px" }}
      />
      <Button variant="outlined" style={{ margin: "10px" }}>
        Login
      </Button>
    </div>
  );
};

export default LoginModal;
