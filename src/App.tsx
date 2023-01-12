import React, { useEffect } from "react";
import cityApi from "app/api/cityApi";
import { Route, Routes } from "react-router-dom";
import LoginPage from "features/auth/pages/LoginPage";
import { Admin } from "app/components/layout";
import { NotFound } from "app/components/common";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { authActions } from "features/auth/authSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    cityApi.getAll().then((res) => console.log(res.pagination));
  });
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(authActions.logout())}
      >Logout</Button>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
