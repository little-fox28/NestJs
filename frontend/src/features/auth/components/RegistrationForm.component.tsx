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

const RegistrationFormComponent: FC = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (data.password !== data.confirmPassword) {
      console.log("");
      return false;
    }
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
            Create Account
          </Typography>
          <TextField
            margin="dense"
            required
            id="name"
            label="Name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <TextField
            margin="dense"
            required
            id="email"
            label="Email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <TextField
            margin="dense"
            required
            id="password"
            label="Password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <TextField
            margin="dense"
            required
            id="com-password"
            label="Confirm password"
            value={data.confirmPassword}
            onChange={(e) =>
              setData({ ...data, confirmPassword: e.target.value })
            }
          />
          <FormControl required margin="dense">
            <InputLabel id="role">Role</InputLabel>
            <Select
              labelId="role"
              id="role"
              label="Role *"
              value={data.role}
              onChange={(e) =>
                setData({
                  ...data,
                  role: e.target.value,
                })
              }
            >
              <MenuItem value={"admin"}>Admin</MenuItem>
              <MenuItem value={"staff"}>Staff</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" style={{ marginTop: 10 }}>
            Register
          </Button>
          <Typography
            variant="body1"
            component={"p"}
            style={{ textAlign: "center", marginTop: "10px" }}
          >
            Already have an account? <Link to={"/signin"}>Login</Link>
          </Typography>
        </Grid>
      </form>
    </Box>
  );
};

export default RegistrationFormComponent;
