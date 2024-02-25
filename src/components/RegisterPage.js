import React from "react";
import "./RegisterPage.css";
import FaqSection from "./FaqSection";
import { Link } from "react-router-dom";
const RegisterPage = () => {
  const ans1 = `We are delighted that you are here. It's so simple, just like blinking your eyes "twice". Fill this form, you will get an ID & Password within few minutes. After first login, please upload your KYC to enjoy all the services, but wait, dont forget to change your password.`;
  const ans2 = `Hmm, That's a tricky one. Registrarion is free with complementary Recharge, Bill Payment & Money Transfer. if you need any other services, you may need to contact your KAM(Key Account manager) for further process.`;
  const ans3 = `It work Amazingly. If you have any retail shop or you want to start a small business, you can join us & start earning.`;
  const ans4 = `Ohh Fishh !! Please go to Login page & Click "Forgot Password" & Follow the steps.`;

  return (
    <div className="container">
      <div className="main">
        <div className="imgDiv">
          <div className="logo"></div>
        </div>

        <div className="divRegisterForm">
          <div className="formSectionDiv">
            <div className="one" id="userCreate">
              <div className="efn">
                <input type="text" placeholder="Enter First Name" />
              </div>
              <div className="eln">
                <input type="text" placeholder="Enter Last Name" />
              </div>
            </div>
            <div className="two">
              <div className="eem">
                {" "}
                <input type="text" placeholder="Enter Email" />
              </div>
              <div className="emobile">
                {" "}
                <input type="text" placeholder="Enter MObile Number" />
              </div>
              <div className="eotp">
                {" "}
                <input type="text" placeholder="Enter Otp" />
              </div>
            </div>
            <div className="three">
              <div className="ean">
                <input type="text" placeholder="Enter Agency Name" />
              </div>
              <div className="epc">
                <input type="text" placeholder="Enter Pin Code" />
              </div>
            </div>
            <div className="four">
              <div className="es">
                <input type="text" placeholder="Enter State" />
              </div>
              <div className="ec">
                <input type="text" placeholder="Enter City" />
              </div>
              <div className="eb">
                <input type="text" placeholder="Enter Block" />
              </div>
            </div>
            <div className="five">
              <div className="ss">
                <input type="number" placeholder="Enter SubArea" />
              </div>
              <div className="ea">
                <input type="text" placeholder="Enter Address" />
              </div>
              <div className="ein">
                <select name="InterestedIn" id="interestedIn">
                  <option value="" disabled selected>
                    Select an option
                  </option>
                  <option value="Retailer">Retailer</option>
                  <option value="Distributor">Distributor</option>
                  <option value="API">API</option>
                </select>
              </div>
            </div>
            <div className="six">
              <div className="sbutton">
                <button type="submit">Submit</button>
              </div>
              <div className="rtlogin">
                <Link to={"/"}>
                  <button className="rtbutton">Return to Login </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="faqSetionDiv">
            <div className="faqlist">
              <div className="name">
                <h2>FAQ</h2>
              </div>
              <div className="f1">
                <FaqSection que={"How can I make a account?"} ans={ans1} />
              </div>
              <div className="f2">
                {" "}
                <FaqSection que={"Is there any registration fee?"} ans={ans2} />
              </div>
              <div className="f3">
                {" "}
                <FaqSection que={"How does it work?"} ans={ans3} />
              </div>
              <div className="f4">
                {" "}
                <FaqSection que={"Forgot my password! What next?"} ans={ans4} />
              </div>
            </div>
          </div>
        </div>

        <div className="copyrightDiv">
          <hr />
          <div className="copyright">
            <p>
              Copyright © 2024 <a href="#">Imwallet</a>. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterPage;
