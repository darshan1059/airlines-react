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
} from "mdb-react-ui-kit";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";
import "./Style.css";
import AOS from "aos";
import "aos/dist/aos.css";
export default function CheckFlightStatus() {
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
        data-aos="fade-left"
        data-aos-delay="100"
      >
        Check flight status
      </MDBCard>
      <MDBModal
        tabIndex="-1"
        show={fullscreenXlModal}
        setShow={setFullscreenXlModal}
      >
        <MDBModalDialog size="fullscreen">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Flight Status</MDBModalTitle>
              <MDBBtn
                size="sm"
                type="button"
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>...</MDBModalBody>
            <MDBModalFooter>
              <MDBBtn type="button" color="secondary" onClick={toggleShow}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
