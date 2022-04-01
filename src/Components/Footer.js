import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdb-react-ui-kit";
//import Contact from "./Contact";
import "./Style.css";
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import CloseIcon from '@material-ui/icons/Close';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';

const Footer = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4 footer">
    <MDBContainer fluid class="text-md-left footer-container" >
    {/* <div class="column footer-image">
      <h5 className="title footer-header">Airlines Management System</h5>
      <a class="navbar-brand" href="#">
        <img src="./images/Black_and_Bright_Yellow_Modern_Education_Logo-removebg-preview_1.png" alt="" width="150" height="60" />
      </a>
    </div> */}
    
      <MDBRow>
          <table class="table table-borderless footer-table">
            <tbody>
            <tr>
              <td  class="footer-table-tr-td1">
              <a href="#!">About Us</a>
              </td>
              <td>
              <a href="#!">Aim</a>
              </td>
              <td>
              <a href="#!">Vision</a>
              </td>
              <td>
              <a href="#!">Testimonials</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#!">Help Center</a>
              </td>
              <td>
                <a href="#!">Careers</a>
              </td>
              <td>
              <a href="#!">
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
              </td>
              <td>
                <a href="#!">Terms Conditions</a>
              </td>
            </tr>
            </tbody>
          </table>
          <table class="table table-borderless footer-table-icons">
            <tbody>
            <tr>
              <td>
                <a href="#!"><FacebookIcon /></a>
              </td>
              <td>
                <a href="#!"><InstagramIcon /></a>
              </td>
              <td>
                <a href="#!"><TwitterIcon /></a>
              </td>
              <td>
                <a href="#!"><YouTubeIcon /></a>
              </td>
            </tr>
            <tr>
              <td colspan="4">
              &copy; {new Date().getFullYear()} Copyright{" "}
              </td>
            </tr>
            </tbody>
          </table>
      </MDBRow>
    </MDBContainer>
    {/* <div className="footer-copyright py-1 ">
      <MDBContainer fluid>
        &copy; {new Date().getFullYear()} Copyright{" "}
      </MDBContainer>
    </div> */}
  </MDBFooter>



    // <MDBFooter className="font-small pt-4 mt-4 footer">
    //   <MDBContainer fluid class="text-md-left footer-container" >
    //   <h5 className="title footer-header">Airlines Management System</h5>
    //     <MDBRow>
    //       <MDBCol md="2" >
    //         <h5 className="title footer-col-header">About Us</h5>
    //         <ul>
    //           <li className="list-unstyled footer-col-links">
    //             <a href="#!">Aim</a>
    //           </li>
    //           <li className="list-unstyled footer-col-links">
    //             <a href="#!">Vision</a>
    //           </li>
    //           <li className="list-unstyled footer-col-links">
    //             <a href="#!">Testimonials</a>
    //           </li>
    //         </ul>
    //       </MDBCol>
    //       <MDBCol md="4"> 
    //         <h5 className="title footer-col-header">Contact Us</h5>
    //         <ul className="footer-content">
    //           <li className="list-unstyled footer-col-links">
    //             <a href="#!">Uttar Pradesh</a>
    //           </li>
    //           <li className="list-unstyled footer-col-links">
    //             <a href="#!">Ahemdabad</a>
    //           </li>
    //           <li className="list-unstyled footer-col-links">
    //             <a href="#!">Indore</a>
    //           </li>
    //           <li className="list-unstyled footer-col-links">
    //             <a href="#!">Mumbai</a>
    //           </li>
    //         </ul>
    //       </MDBCol>
    //       <MDBCol md="4">
    //       <h5 className="title footer-col-header">Social Media</h5>
    //       <ul>
    //         <li className="list-unstyled footer-col-links">
    //           <a href="#!">
    //             <FacebookIcon />
    //             {/* <FacebookIcon style={{ color: "white" }}/> */}
    //           </a>
    //           </li>
    //           <li className="list-unstyled footer-col-links">
    //             <a href="#!">
    //               <InstagramIcon />
    //             </a>
    //           </li>
    //           <li className="list-unstyled footer-col-links">
    //             <a href="#!">
    //              <TwitterIcon />
    //             </a>
    //           </li>
    //           <li className="list-unstyled footer-col-links">
    //             <a href="#!">
    //               <YouTubeIcon />  
    //             </a>
    //           </li>
    //         </ul>
    //       </MDBCol>
    //     </MDBRow>
    //   </MDBContainer>
    //   <div className="footer-copyright text-center py-3 ">
    //     <MDBContainer fluid>
    //       &copy; {new Date().getFullYear()} Copyright{" "}
    //     </MDBContainer>
    //   </div>
    // </MDBFooter>
  );
};
export default Footer;