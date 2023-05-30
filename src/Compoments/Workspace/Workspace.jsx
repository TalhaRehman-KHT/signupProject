import "./Workspace.css";

import React from "react";
import bodypic from "../../assets/workspace/Frame 3.png";
import Logo from "../../assets/workspace/Frame 2.png";
import cros from "../../assets/workspace/Vector (3).png";

function Workspace() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="img">
              <img className="upimg" src={Logo} alt="" />
            </div>
            <div className="img2">
              <img src={bodypic} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <form className="singup-form">
              <div className="heading-one">
                <h2 id="workspace">Create your Workspace!</h2>
                <span className="s-span">
                  Enter Details About your organization
                </span>
              </div>

              <div className="form-group">
                <label htmlFor="email">Company Name*</label>
                <img className="input-icons" src="" alt="" />
                <input
                  type="text"
                  className="form-control custom-indent"
                  id="text"
                  placeholder="Enter your Company Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Members Email</label>
                <img className="input-icons-2" src="" alt="" />
                <input
                  type="email"
                  className="form-control custom-indent"
                  id="email"
                  placeholder="Email Here"
                  required
                />
              </div>

              <div className="boxxer">
                <div id="personscontainer" className="container">
                  <div className="row">
                    <div className="col">
                      <div className="person">
                        <span id="personspan">abc@xyz.com</span>
                        <img src={cros} alt="" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="person">
                        <span id="personspan">abc@xyz.com</span>
                        <img src={cros} alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <div className="person">
                        <span id="personspan">abc@xyz.com</span>
                        <img src={cros} alt="" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="person">
                        <span id="personspan">abc@xyz.com</span>
                        <img id="personimg" src={cros} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button id="letsgo" type="submit" className="btn btn-success rounded-3 ">
                LETSGO
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Workspace;
