import { Box, Paper, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../authSlice";

export default function LoginPage() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(authActions.login({
      username:'',
      password:''
    }));
  };
  return (
    <div className="flex justify-content-center align-content-center min-h-screen">
      <Paper elevation={1} className="p-3">
        <Typography variant="h5" component="h1">
          Student Managenment
        </Typography>
        <Box mt={4}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
          >
            Fake Login
          </Button>
        </Box>
      </Paper>
    </div>
  );
}
function createCache(arg0: {
  root: { backgroundColor: string; color: string };
}) {
  throw new Error("Function not implemented.");
}
