import "./WorkShop.css";
import React from "react";
import SideImg from "../../assets/workshop/Frame 2.png";
import SideImg2 from "../../assets/workshop/Frame 3.png";
import hand from "../../assets/workshop/Icon.png";
import Employee from "../../assets/workshop/1.png";

function WrokShop() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="imges-wrap">
              <img className="project-img" src={SideImg} alt="" />
              <img src={SideImg2} alt="" />
            </div>
          </div>
          {/*  */}
          <div className="col-md-6">  
          <div className="right">
            <div className="headigs">
              <h1>Create or Join!</h1>
            </div>
            <div className="span">
              <span className="s-span">
                How do you want join our community by
              </span>
            </div>
            <div className="boxer">
              <div className="box">
                <div>
                  <img src={hand} alt="" />
                </div>
                <div className="text" >
                  <h6>Join As Project Manager</h6>
                  <span className="s-span">
                    Manage your industry Project in one click
                  </span>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="boxer" id="text-2">
              <div className="box">
                <div>
                  <img src={Employee} alt="" />
                </div>
                <div className="text">
                  <h6>Join As Project Manager</h6>
                  <span className="s-span">
                    Manage your industry Project in one click
                  </span>
                </div>
              </div>
              
            </div>
            <div className="button">
                  <button type="submit" className="btn btn-success rounded-3 ">
                    Next
                  </button>
                </div>
          </div>


        </div>

        </div>
      </div>
    </>
  );
}

export default WrokShop;
