import React from "react";
import "./Singup.css";
import logo from "../../assets/img/Frame 2.png";
import Pic2 from "../../assets/img/4. Designer Desk 2.png";
import Email from "../../assets/img/Vector (2).png";
import Lock from "../../assets/img/Group.png";

function Singup() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="box-one">
              {/* img */}
              <div className="img-1st">
                <img className="logo-img" src={logo} alt="project" />
              </div>
              {/*  headig  */}
              <div className="heading">
                <h1>Hi, Welcome to Projex!</h1>
              </div>
              {/*  img */}
              <div className="img-2nd">
                <img className="img2" src={Pic2} alt="project" />
              </div>
            </div>
          </div>
          <div className="col-md-6">

            
            <form className="singup-form">
              <div className="heading-one">
                <h2>Sign Up</h2>
                <span className="s-span">
                  Kindly enter your credentials below to get access to your
                  account.
                </span>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <img className="input-icons" src={Email} alt="" />
                <input
                  type="email"
                  className="form-control custom-indent"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Password</label>
                <img className="input-icons-2" src={Lock} alt="" />
                <input
                  type="text"
                  className="form-control custom-indent"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Confirm Password</label>
                <img className="input-icons-3" src={Lock} alt="" />
                <input
                  type="password"
                  className="form-control custom-indent-2"
                  id="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button type="submit" className="btn btn-success rounded-3 ">
                Create account
              </button>

              <div className="last-p">
                <span className="sing-last-input">
                  Already have an account? <span> </span>  
                </span>
                <a className="login" href="#">
                    <span> </span> Login
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Singup;
