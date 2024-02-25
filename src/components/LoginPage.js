import React from "react";
import "./LoginPage.css";
import SwagatName from "./SwagatName";
import { Link } from "react-router-dom";
const LoginPage = (props) => {
  const HeaderText = "स्वागतम् !"; // Removed double quotes
  const paragraph = "Sign In to Your Account";

  return (
    <div className="login_form">
      <div className="ImageDiv"></div>
      <form action="" className="form-element">
        <h1 id="welcome">
          {" "}
          <SwagatName HeaderText={HeaderText} />
        </h1>
        <p id="welcomepara">
          <SwagatName HeaderText={paragraph} />
        </p>
        <label id="label1" htmlFor="">
          User id Or Registered Mobile
        </label>
        <br />
        <br />
        <input className="input-i" type="text" />
        <br /> <br />
        <label id="label2" htmlFor="">
          Password
        </label>
        <br /> <br />
        <input className="input-i" type="text" />
        <div className="check-box">
          <input type="checkbox" id="termsCheckbox" />
          <a id="term" href="#">
            Terms & Conditions
          </a>
          {/* <a href="https://www.imwallet.in/terms">Terms & Condition</a> */}
          <span className="checkmark"></span>
          <a className="Reset_password" href="">
            Reset Password
          </a>
        </div>
        <button className="input-i loginButton" >Secure Login</button>
        <p className="p-warning">
          If having an issue in login, Press ctrl + shift + R. Then try.
        </p>
        <div className="Resister_here">
          <p>Don't have an account?</p>

          {/* Register button */}
          <Link to={"/register"}>
            <button to={"/register"} className="rtbutton">
              Register here
            </button>
          </Link>
        </div>
        <div className="ImageDiv2">
          {/* Flex container for images */}
          <div className="imageContainer">
            {/* First row */}
            <div className="imageRow">
              <img
                src="https://5.imimg.com/data5/SELLER/Default/2023/10/352458160/HU/MO/SR/19048503/cbo-pharma-erp-software-500x500.png"
                alt=""
                className="image"
              />
              <img
                src="https://images.moneycontrol.com/static-mcnews/2022/04/NPCI.png?impolicy=website&width=1600&height=900"
                alt="Image 2"
                className="image"
              />
            </div>
            {/* Second row */}
            <div className="imageRow">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQIMHbKe45ZjSO4cXSeIVHYxvN5i_U_twQFwXGFwD9vbZWcLB-6J2zMNT84QvdvJWB0tY&usqp=CAU"
                alt="Image 3"
                className="image"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Digital_India_logo.svg/1200px-Digital_India_logo.svg.png"
                alt="Image 4"
                className="image"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default LoginPage;
