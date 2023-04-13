import React from "react";
import { HeaderComp } from "../../components/header/header.jsx";
import { FooterComp } from "../../components/footer/footer.jsx";
import { Sidebar } from "../../components/sidebar/sidebar";
import "./Dashboard.scss";
import { Outlet } from "react-router-dom";
/////////////////////////
export const Dashboard = () => {
  return (
    <div id="DashboardPerant">
      <HeaderComp />

      <Sidebar />

      <section id="Content">
        <Outlet/>
      </section>
      <FooterComp />
    </div>
  );
};
