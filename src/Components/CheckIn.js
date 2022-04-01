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
  MDBInput,
  MDBCard,
} from "mdb-react-ui-kit";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Style.css";

export default function CheckIn() {
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
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Check In
      </MDBCard>
      <MDBModal
        tabIndex="-1"
        show={fullscreenXlModal}
        setShow={setFullscreenXlModal}
      >
        <MDBModalDialog size="fullscreen">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Check in</MDBModalTitle>
              <MDBBtn
                type="button"
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div class="form-title">Ready to check in?</div>
              <p>Online check-in opens 24 hours before your flight departs</p>
              <div class="col row d-flex justify-content-center">
                <MDBInput
                  className="form-input"
                  placeholder="Booking reference"
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
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn type="button" color="secondary" onClick={toggleShow}>
                Continue
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
