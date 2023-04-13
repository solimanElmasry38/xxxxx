import React, { useState } from "react";
import axios from "axios";
import { HeaderComp } from "../../../components/header/header.jsx";
import { FooterComp } from "../../../components/footer/footer.jsx";
import "./Login.scss";
//////////////////////////
export const LogOut = () => {
  window.localStorage.removeItem("email");
};

export const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  let error_masseges = document.getElementsByClassName("errorMassege");

  const handelSubmit = async (e) => {
    e.preventDefault();
    let email_format = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(
        Email
      ),
      password_format =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(Password),
      password_lenght = Boolean(
        (Password.length >= 8) & (Password.length <= 20)
      );

    let submitCond = email_format & password_format & password_lenght;

    if (submitCond) {
      let data = {
        email: Email,
        password: Password,
      };
      let res = await axios
        .post("http://127.0.0.1:8000/api/login", data)
        .catch((error) => {
          if (error.response.status === 401) {
            error_masseges[2].innerHTML = `email and password didnot match`;
            document.getElementById("emailInput").value = "";
            document.getElementById("passwordInput").value = "";
          }
        });

      if (res.status === 200) {
        window.localStorage.setItem("email", Email);
        window.location.pathname = "/";
      }
    }
  };

  const handelEmail = (user_email) => {
    setEmail(user_email);
    let emailFormat = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(
      user_email
    );
    if (emailFormat || user_email.length === 0) {
      error_masseges[0].innerHTML = ``;
    } else {
      error_masseges[0].innerHTML = `*exam_3mple@gmail.com`;
    }
  };

  const handelPassword = (user_password) => {
    setPassword(user_password);
    let passwordLenght =
        (user_password.length >= 8) & (user_password.length <= 20),
      passwordFormat =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
          user_password
        );
    passwordLenght
      ? (error_masseges[1].innerHTML = ``)
      : (error_masseges[1].innerHTML = `*must mor than 7`);
    passwordFormat
      ? (error_masseges[2].innerHTML = ``)
      : (error_masseges[2].innerHTML = `*format error`);
  };

  return (
    <div id="LoginPerant">
      <HeaderComp />
      <section id="signUpSec" className="LoginSec">
        <div className="overLay">
          <div className="contentBox">
            <h1 className="contentHeading">create acounte!</h1>
            <p className="content">
              To keep contected with us please login with your personal info{" "}
            </p>
            <a href="#x" className="Btn">
              signup
            </a>
          </div>
        </div>
        <div className="formContainer">
          <form
            method="POST"
            action=""
            id=""
            className="LoginForm"
            onSubmit={handelSubmit}
          >
            <h1 className="formHeading">welcome back</h1>
            <div className="socialBox">
              <i className="fa-brands fa-facebook" />
              <i className="fa-brands fa-google" />
              <i className="fa-brands fa-github" />
            </div>
            <p className="notice">
              <a href="#x">forget your password?</a>
            </p>
            <div id="emailFieldBoxLog" className=" inputContainer">
              <input
                type="email"
                id="emailInput"
                placeholder="email..."
                name="emailInput"
                value={Email}
                onChange={(e) => {
                  handelEmail(e.target.value);
                }}
              />
              <p className="errorMassege" />
            </div>
            <div id="passwordFieldBoxLog" className=" inputContainer">
              <input
                type="password"
                id="passwordInput"
                placeholder="password..."
                name="passwordInput"
                value={Password}
                onChange={(e) => {
                  handelPassword(e.target.value);
                }}
              />
              <p className="errorMassege" />
              <p className="errorMassege" />
              <p className="errorMassege" />
            </div>
            <button type="submit" className="submitBtn">
              login
            </button>
          </form>
        </div>
      </section>
      <FooterComp />
    </div>
  );
};
