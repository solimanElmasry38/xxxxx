import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Signup } from "../pages/Auth/Signup/Signup";
import { Login } from "../pages/Auth/Login/Login";
import { Home } from "../pages/Home/Home";
import {Users} from "../components/users/users"
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { UpdateUser } from "../components/updateUser/updateUser";

export const routes = (
  <Routes>
    <Route path="" element={<Home />} />
    <Route path="signup" element={<Signup />} />
    <Route path="login" element={<Login />} />
    <Route path="dashboard" element={<Dashboard />}>
      <Route path="users" element={<Users />} />
      <Route path="users/:id" element={<UpdateUser />} />
    </Route>
  </Routes>
);
