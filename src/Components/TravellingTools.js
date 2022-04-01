import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage,
} from "mdb-react-ui-kit";
import "./Style.css";

function TravellingTools() {
  return (
    <section class="places">
      <div class="places-text">
        <strong>FEATURED TOURs PACKAGES</strong>
        <h2>
          <u>Favourite Places</u>
        </h2>
      </div>

      <div class="trav-cards">
        <div class="trav-card">
          <div class="zoom-img">
            <div class="img-trav-card">
              <img src="./images/vancouver.jpg" />
            </div>
          </div>
          <h4>North Remembers</h4>
          <div class="trav-card-box-dest">
            <p class="location">&#9992; Vancouver, Canada</p>
          </div>
        </div>
        <div class="trav-card">
          <div class="zoom-img">
            <div class="img-trav-card">
              <img src="./images/paris.jpg" />
            </div>
          </div>
          <h4>Loveliest Affair</h4>
          <div class="trav-card-box-dest">
            <p class="location">&#9992; Paris, France</p>
          </div>
        </div>
        <div class="trav-card">
          <div class="zoom-img">
            <div class="img-trav-card">
              <img src="./images/monaco.jpg" />
            </div>
          </div>
          <h4>Summerly Days</h4>
          <div class="trav-card-box-dest">
            <p class="location">&#9992; Monaco, Monaco</p>
          </div>
        </div>
        <div class="trav-card">
          <div class="zoom-img">
            <div class="img-trav-card">
              <img src="./images/singapore.jpg" />
            </div>
          </div>
          <h4>Nights To Forget</h4>
          <div class="trav-card-box-dest">
            <p class="location">&#9992; Singapore, Singapore</p>
          </div>
        </div>
        <div class="trav-card">
          <div class="zoom-img">
            <div class="img-trav-card">
              <img src="./images/safari.jpg" />
            </div>
          </div>
          <h4>Walk With Nature</h4>
          <div class="trav-card-box-dest">
            <p class="location">&#9992; Masai Mara, Kenya</p>
          </div>
        </div>
        <div class="trav-card">
          <div class="zoom-img">
            <div class="img-trav-card">
              <img src="./images/japan.jpg" />
            </div>
          </div>
          <h4>Sakura with Serenity</h4>
          <div class="trav-card-box-dest">
            <p class="location">&#9992; Tokyo, Japan</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default TravellingTools;
