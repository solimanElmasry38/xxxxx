import React, { useState } from "react";
import { HeaderComp } from "../../../components/header/header.jsx";
import { FooterComp } from "../../../components/footer/footer.jsx";
import "./Signup.scss";
import axios from "axios";
/////////////////////
export const Signup = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [PasswordConf, setPasswordConf] = useState("");
  let error_masseges = document.getElementsByClassName("errorMassege");

  const handelSubmit = async (e) => {
    e.preventDefault();
    let name_lenght = (Name.length >= 8) & (Name.length <= 20),
      name_format = !/\d/.test(Name),
      email_format = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(
        Email
      ),
      password_format =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(Password),
      password_lenght = Boolean(
        (Password.length >= 8) & (Password.length <= 20)
      ),
      password_conf_format = Password === PasswordConf;
    let submitCond =
      name_lenght &
      name_format &
      email_format &
      password_format &
      password_lenght &
      password_conf_format;
    if (submitCond) {
      let data = {
        name: Name,
        email: Email,
        password: Password,
        password_confirmation: PasswordConf,
      };
      let res = await axios
        .post("http://127.0.0.1:8000/api/register", data)
        .catch((error) => {
          if (error.response.status === 422) {
            error_masseges[2].innerHTML = `email is already exist`;
            document.getElementById("emailInput").value = "";
          }
        });
      if (res.status === 200) {
        window.localStorage.setItem("email", Email);
        window.location.pathname = "/";
      }
    }
  };

  const handelName = (user_name) => {
    setName(user_name);
    let nameLength =
        (user_name.length >= 8) & (user_name.length <= 20) ||
        user_name.length === 0,
      nameFormat = !/\d/.test(user_name);
    nameLength
      ? (error_masseges[0].innerHTML = ``)
      : (error_masseges[0].innerHTML = `*name must be 8:20`);
    nameFormat
      ? (error_masseges[1].innerHTML = ``)
      : (error_masseges[1].innerHTML = `* name must not contain nembers`);
  };

  const handelEmail = (user_email) => {
    setEmail(user_email);
    let emailFormat = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(
      user_email
    );
    if (emailFormat || user_email.length === 0) {
      error_masseges[2].innerHTML = ``;
    } else {
      error_masseges[2].innerHTML = `*exam_3mple@gmail.com`;
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
      ? (error_masseges[3].innerHTML = ``)
      : (error_masseges[3].innerHTML = `*must mor than 7`);
    passwordFormat
      ? (error_masseges[4].innerHTML = ``)
      : (error_masseges[4].innerHTML = `*format error`);
  };

  const handelPasswordConf = (user_password_conf) => {
    setPasswordConf(user_password_conf);
    let passwordConfFormat = Password === user_password_conf;
    if (passwordConfFormat) {
      error_masseges[5].innerHTML = ``;
    } else {
      error_masseges[5].innerHTML = `*passord did not match`;
    }
  };

  return (
    <div id="SignupPerant">
      <HeaderComp />
      <section id="signUpSec" className="Signupsec">
        <div className="overLay">
          <div className="contentBox">
            <h1 className="contentHeading">welcome back!</h1>
            <p className="content">
              To keep contected with us please login with your personal info{" "}
            </p>
            <a href="#  " className="Btn">
              login
            </a>
          </div>
        </div>
        <div className="formContainer">
          <form
            method="POST"
            action=""
            id="SignupForm"
            className="SignupForm"
            onSubmit={handelSubmit}
          >
            <h1 className="formHeading">create acount</h1>
            <div className="socialBox">
              <i className="fa-brands fa-facebook" />
              <i className="fa-brands fa-google" />
              <i className="fa-brands fa-github" />
            </div>
            <p className="notice">or use your email for ragistertion</p>
            <div id="nameFieldBox" className=" inputContainer">
              <input
                type="text"
                id="nameInput"
                placeholder="fullName..."
                name="nameInput"
                value={Name}
                onChange={(e) => {
                  handelName(e.target.value);
                }}
              />
              <p className="errorMassege" />
              <p className="errorMassege" />
            </div>
            <div id="emailFieldBox" className=" inputContainer">
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
            <div id="passwordFieldBox" className=" inputContainer">
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
            </div>
            <div id="passwordConfFieldBox" className=" inputContainer">
              <input
                type="password"
                id="passwordConfInput"
                placeholder="confirm password..."
                name="passwordConfInput"
                value={PasswordConf}
                onChange={(e) => {
                  handelPasswordConf(e.target.value);
                }}
              />
              <p className="errorMassege" />
            </div>
            <button type="submit" className="submitBtn">
              sign in
            </button>
          </form>
        </div>
      </section>

      <FooterComp />
    </div>
  );
};
