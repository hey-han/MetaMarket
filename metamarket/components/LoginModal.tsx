import React, { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const LoginModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | undefined>(undefined);

  const { setUser } = useContext(AuthContext);

  const loginOnClick = async () => {
    try {
      // should definitely refactor this part here, but will do next time when got time
      const result = await axios.post("http://localhost:1404/api/auth/local", {
        identifier: email,
        password: password,
      });
      setUser({
        ...result.data.user,
        jwt: result.data.jwt,
      });
      setError(undefined);
    } catch (error) {
      console.log(error);
      setError("Please try again");
    }
  };

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
        onChange={(text) => setEmail(text.target.value)}
        style={{ margin: "10px", width: "400px" }}
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        onChange={(text) => setPassword(text.target.value)}
        style={{ margin: "10px", width: "400px" }}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Button
        variant="outlined"
        style={{ margin: "10px" }}
        onClick={loginOnClick}
      >
        Login
      </Button>
    </div>
  );
};

export default LoginModal;
