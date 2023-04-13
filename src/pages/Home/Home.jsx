import React from 'react';
import { HeaderComp } from "../../components/header/header.jsx";
import { FooterComp } from "../../components/footer/footer.jsx";
import  './Home.scss';
////////////////////////////
export const Home = () => {

  return (
    <div id="HomePerant">
      <HeaderComp />
      Home Component
      <FooterComp />
    </div>
  );
};
