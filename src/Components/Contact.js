import React, { useState } from "react";
import ContactsIcon from '@material-ui/icons/Contacts';
import CloseIcon from '@material-ui/icons/Close';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import styled from "styled-components";
import "./Style.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  return (
    <div>
        <NavMenu>
            <a>
              <ContactsIcon />
              <span data-toggle="modal" data-target="#contactModal">
                Contact Us
              </span>
              {/* <!-- Modal Starts--> */}
              <div class="modal fade" id="contactModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><CloseIcon /></span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <div class="row">
                      {/* coloumn 1 ---- Project Details */}
                        <div class="col-6 contactus1">
                              <h3> Get In Touch With Us</h3>  
                            <hr />
                            <h3>Have any queries, Send it to us !</h3>  
                            <div class="form-content text-justify contactusdetails">
                                <p>This project has a dynamic and responsive UI using ReactJS. The back end uses Spring Boot MVC implemented in a maven-based project and the database technology is MySQL. This system is divided into roles providing authorization of functionalities using Spring Security: Admin role who will manage the day-2-day activities of the system by adding new flights, travel packages, controlling the rates of seats, and other functionalities. Users use the system to search, book, modify, and web check ins.</p>
                            </div><br />  
                            <p><CallIcon/>&nbsp;<strong>Phone no:</strong> +91-9898787888</p>
                            <p><EmailIcon/>&nbsp;<strong>Or Write to us us At :</strong> airlines@JMK.com</p>   
                        </div>  
                      {/* coloumn 2 ---- Feedback form */}
                        <div class="col-6 contactus2">
                               {/* login form starts */}
                          <form>
                            <div class="form-group">
                              <label for="userName">Name</label>
                              <input type="text" class="form-control mx-0" id="userName" aria-describedby="NameHelp" placeholder="Enter your Name Here"/>
                              
                            </div>
                            <div class="form-group">
                              <label for="userEmail">E-mail</label>
                              <input type="email" class="form-control mx-0" id="userEmail" aria-describedby="EmailHelp" placeholder="Enter your Email Here"/>
                              
                            </div>
                            <div class="form-group">
                              <label for="userSubject">Subject</label>
                              <input type="text" class="form-control mx-0" id="userSubject" aria-describedby="SubjectHelp" placeholder="Enter Subject Here"/>
                              
                            </div>
                            <div class="form-group">
    						    <label class="message">Your feedback</label>
    						    <textarea class="form-control mx-0" id="yourfeedback" rows="5" placeholdetr="your feedback"></textarea>
  						    </div> 
                            <button type="submit">Submit</button>
                          </form>
                          {/* login form ends */}
                        </div>
                      {/* coloumn 2 ---- ends */}
                      </div>
                    </div>   {/* Modal body ends here*/}
                  </div>
                </div>
              </div>
              {/* <!-- Modal Ends --> */}
            </a>
          </NavMenu>
    </div>
  )
}

export default Contact

const NavMenu = styled.div`
  display: flex;
  margin-top: 400px;

  align-items: center;
  justify-content: center;
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