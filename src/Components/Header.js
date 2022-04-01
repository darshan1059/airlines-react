import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import styled from "styled-components";
import "./Style.css";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import ManageBooking from "./ManageBooking";
import CheckFlightStatus from "./CheckFlightStatus";
import CheckIn from "./CheckIn";
import CloseIcon from "@material-ui/icons/Close";

function Header() {
  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true); //isReadMore = true, then text is partially visible
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };

    return (
      <p className="text">
        {isReadMore ? text.slice(0, 250) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          <strong>{isReadMore ? "   ... Read More" : " Show Less"} </strong>
        </span>
      </p>
    );
  };

  return (
    <div class="container-fluid">
      <nav class="navbar mx-auto header-navbar">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="./images/logo2.svg" alt="" width="200" height="80" />
          </a>
          <NavMenu>
            <a>
            <SearchIcon />
              <form class="form-inline d-flex justify-content-center md-form form-sm">
                <input
                  class="form-control form-control-sm mr-3 w-75"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
                <i class="fas fa-search" aria-hidden="true"></i>
              </form>
            </a>
            <a>
              <PermIdentityIcon />
              <span data-toggle="modal" data-target="#loginModal">
                Login
              </span>
              {/* <!-- Modal Starts--> */}
              <div
                class="modal fade"
                id="loginModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="loginModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-xl" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true"> {/*  what is this????? */}
                          <CloseIcon />
                        </span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <div class="row">
                        {/* coloumn 1 ---- Login */}
                        <div class="col-6 loginform1">
                          {/* login form starts */}
                          <form>
                            <h3>
                              Have an Account, <br />
                              Login Here
                            </h3>{" "}
                            <hr />
                            <div class="form-group">
                              <label for="userEmail1">Email address</label>
                              <input
                                type="email"
                                class="form-control mx-0"
                                id="userEmail1"
                                aria-describedby="emailHelp"
                              />
                            </div>
                            <div class="form-group">
                              <label for="userPassword1">Password</label>
                              <input
                                type="password"
                                class="form-control mx-0"
                                id="userPassword1"
                              />
                            </div>
                            <div class="form-group form-check">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                id="rememberCheck1"
                              />
                              <label
                                class="form-check-label"
                                for="rememberCheck1"
                              >
                                Remember Me
                              </label>
                            </div>
                            <a>Forgot your Passowrd ?</a>
                            <button type="submit">Submit</button>
                          </form>
                          {/* login form ends */}
                        </div>
                        {/* coloumn 2 ---- sign up */}
                        <div class="col-6 loginform2">
                          <img
                            src="./images/logo2.svg"
                            alt=""
                            width="200"
                            height="80"
                          />
                          <hr />
                          <h3>Sign Up</h3>
                          <h5>
                            Book flights quicker, pay with Avios and earn
                            rewards as an Executive Club member.
                          </h5>
                          <button type="button">Join Us</button>
                        </div>
                        {/* coloumn 2 ---- ends */}
                      </div>
                    </div>{" "}
                    {/* Modal body ends here*/}
                  </div>
                </div>
              </div>
              {/* <!-- Modal Ends --> */}
            </a>
          </NavMenu>
        </div>
      </nav>
      <hr />
      <div className="row container-sm menu header-btns">
        <MDBRow>
          <MDBCol md="4" className="col-example text-center">
            <ManageBooking />
          </MDBCol>
          <MDBCol md="4" className="col-example text-center">
            <CheckIn />
          </MDBCol>
          <MDBCol md="4" className="col-example text-center">
            <CheckFlightStatus />
          </MDBCol>
        </MDBRow>
      </div>
      <div className="row mx-auto justify-content-center header-navbar">
        <WarningMenu>
          <div class="card text-center">
            <div class="card-body">
              <h5 class="card-title">Warning !</h5>
              <p class="card-text">
                <ReadMore>
                  You must check if you are eligible to travel from India.
                  Indian nationals, regardless of foreign residency status, can
                  only travel from India to the UK, Ireland and Cayman Islands
                  and must hold a valid visa. India nationals cannot travel
                  further to any other countries, unless their spouse is a
                  foreign national or they are a seaman travelling with
                  authorised documentation from the Ministry of Shipping. You
                  will not be allowed to board your flight if you do not meet
                  these requirements. If you’d like to talk, please call us on
                  our International Toll Free number 0008004401060 or contact
                  your travel agent. Due to COVID-19, we are currently working
                  with limited capacity.Thanks for bearing with us.
                </ReadMore>
              </p>
            </div>
            <div class="card-footer text-muted">
              As per Ministry of Aviation, Government of India
            </div>
          </div>
        </WarningMenu>
      </div>
    </div>
  );
}

export default Header;

const NavMenu = styled.div`
  display: flex;
  margin-left: 0.6;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    span {
      font-size: 15px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: blue;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -10px;
        opacity: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 280ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
    &: hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;
const WarningMenu = styled.div`
  left-margin: 20%;
  display: flex;
  align-items: center;
  width: 100%;
  // background-color: lightgrey;
  cursor: pointer;
  padding: 20px 20px;
  border: none;
`;
