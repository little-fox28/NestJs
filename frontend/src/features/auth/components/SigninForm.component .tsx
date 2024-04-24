import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { FC, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

const SignInFormComponent: FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submited!");
  };

  return (
    <Box
      sx={{
        border: 1,
        borderRadius: 2,
        padding: 4,
        borderColor: "#cccccc",
        width: "450px",
        mt: 2,
      }}
    >
      <form onSubmit={handleSubmit}>
        <Grid container direction={"column"} justifyContent={"flex-start"}>
          <Typography variant="h5" component={"h1"} marginBottom={2}>
            Signin
          </Typography>
          <TextField margin="dense" required id="email" label="Email" />
          <TextField margin="dense" required id="password" label="Password" />
          <Button type="submit" variant="contained" style={{ marginTop: 10 }}>
            Login
          </Button>
          <Typography
            variant="body1"
            component={"p"}
            style={{ textAlign: "center", marginTop: "10px" }}
          >
            No account? <Link to={"/register"}>Register</Link>
          </Typography>
        </Grid>
      </form>
    </Box>
  );
};

export default SignInFormComponent;
