import React from "react";
import styled from "styled-components";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit"; 
import CardGroup from "react-bootstrap/CardGroup";

import Card from "react-bootstrap/Card";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Nav from "react-bootstrap/Nav";
import { Button, Col, Row } from "react-bootstrap";
import "./Style.css";
import ManageBooking from "./ManageBooking";
import CheckFlightStatus from "./CheckFlightStatus";
import CheckIn from "./CheckIn";

import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import FlightIcon from "@material-ui/icons/Flight";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer"
import TravellingTools from "./TravellingTools";

function HomePage() {
  AOS.init({
    offset: 200, //default 120
    delay: 50, //default 0
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
  });
  return (
      <div className="row homepage">
        <div class="container mt-5">
          <div class="row d-flex justify-content-center infocard">
            <div class="col-md-8" data-aos="fade-up" data-aos-delay="200">
              <div class="bg-white">
                <ul className="nav nav-tabs nav-fill" id="myTab" role="presentation">
                    <button
                      class="nav-link active"
                      id="faq_tab_1-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#faq_tab_1"
                      type="button"
                      role="tab"
                      aria-controls="faq_tab_1"
                      aria-selected="true"
                    >
                      <div class="d-flex flex-column lh-lg">
                        <span style={{ fontSize: "18px" }}>
                          <FlightTakeoffIcon /> &nbsp; Flight Ticket
                        </span>
                      </div>
                    </button>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade active show"
                    id="faq_tab_1"
                    role="tabpanel"
                    aria-labelledby="faq_tab_1-tab"
                  >
                    <div class="container p-3">
                      <div class="input-group mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="From"
                        />{" "}
                        <input
                          type="text"
                          class="form-control"
                          placeholder="To"
                        />
                      </div>
                      <div class="input-group mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Departure"
                        />
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Arrival"
                        />
                      </div>

                      <div class="input-group mb-3">
                        {/* <label for="customRange3" class="form-label">Passengers</label>
                        <input type="range" class="form-range form-control" min="1" max="10" step="1" id="customRange3" />
                        <select
                          class="form-select form-control"
                          id="inputGroupSelect02"
                        >
                          <option selected>Passenger</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3+</option>
                        </select>{" "} */}
                        <select
                          class="form-select form-control"
                          id="inputGroupSelect02"
                        >
                          <option selected value="Economy">Economy</option>
                          <option value="Business">Business</option>
                          <option value="First">First</option>
                        </select>
                      </div>
                      {/* Code of check box for isPWD/Unaccompanied Minor
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Person with Disability/Unaccompanied Minor</label>
                      </div> */}
                      <div class="mt-4 d-flex justify-content-center">
                        <button class="btn btn-success custom-button px-5">
                          Show Flights
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
export default HomePage;
const Container = styled.div`
  min-height: 85vh;
  border: 2px solid red;
`;
