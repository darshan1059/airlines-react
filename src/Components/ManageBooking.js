import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBInput,
} from "mdb-react-ui-kit";

import "./Style.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ManageBooking() {
  const [fullscreenXlModal, setFullscreenXlModal] = useState(false);

  const toggleShow = () => setFullscreenXlModal(!fullscreenXlModal);
  AOS.init({
    offset: 200, //default 120
    delay: 50, //default 0
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
  });

  return (
    <>
      <MDBCard
        onClick={toggleShow}
        className="Card"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        Manage Booking
      </MDBCard>
      <MDBModal
        tabIndex="-1"
        show={fullscreenXlModal}
        setShow={setFullscreenXlModal}
      >
        <MDBModalDialog size="fullscreen">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Booking</MDBModalTitle>

              <MDBBtn
                type="button"
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
              {/* <MDBCard onClick={toggleShow} style={{ maxWidth: "22rem" }}>
                <MDBCardBody>
                  <MDBCardTitle>Manage Booking</MDBCardTitle>
                </MDBCardBody>
              </MDBCard> */}
            </MDBModalHeader>
            <MDBModalBody>
              <div>
                <h3>Manage My Booking</h3>
                <div class="col row d-flex justify-content-center">
                  <MDBInput
                    className="form-input"
                    placeholder="Booking Reference"
                    id="typeText"
                    type="text"
                  />
                  <MDBInput
                    className="form-input"
                    placeholder="Last Name"
                    id="typeText"
                    type="text"
                  />
                </div>
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBCard
                color="secondary"
                onClick={toggleShow}
                className="Card"
              >
                Continue
              </MDBCard>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
