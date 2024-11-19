// import React from "react";
// import { Link } from 'react-router-dom';

// export default function Footer() {
//   return (
//     <section className="footer-section bg-primary">

//       <div className="container dialog-box bg-secondary p-4 w-75">
//         <div className="row mx-auto">
//           <div className="col-md-8">
//             <h3>Ready to get started?</h3>
//             <h3>Talk to us today</h3>
//           </div>
//           <div className="col-md-4 text-end">
//             <Link to="/contact" className="btn btn-primary px-3" role="button">
//               Get Started
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* main footer */}
//       <footer className="main-footer-section">
//         <div className="container">
//           <div className="row">
//             <h3>Thapa Technical</h3>
//             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit quis qui maiores sunt iusto.</p>
//           </div>
//         </div>
//       </footer>
//     </section>
//   );
// }



import React from "react";
import {Link } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="contact-short text-center p-5 mb-4">

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg">
              <h3 className="text-heading">Ready to get started?</h3>
              <h3 className="text-heading">Talk to us today</h3>
            </div>
            <div className="col-lg text-lg-end mt-3 mt-lg-0">
              <Link to="/Contact" className="btn btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-bg ">
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-12">
              <h3 className="text-center text-lg-start">Algolyte</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="col-lg-3 my-5 my-lg-0">
              <h3 className="text-center text-lg-start">Subscribe to get important updates</h3>
              <form action="#">
                <input
                  type="email"
                  name="email"
                  placeholder="YOUR E-MAIL"
                  className="form-control mb-2"
                />
                <input
                  type="submit"
                  value="Subscribe"
                  className="btn btn-primary mx-auto "
                />
              </form>
            </div>

            <div className="col-lg-3 col-6">
              <h3>Follow Us</h3>
              <div className="d-flex gap-3 footer-social-icons">
                <FaDiscord className="icons" />
                <FaInstagram className="icons" />
                <a
                  href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light"
                >
                  <FaYoutube className="icons" />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-6">
              <h3>Call Us</h3>
              <h4>+91 12345678978</h4>
            </div>
            
            
          </div>

          <hr className="my-4 border-light" />
          <div className="row">
            <div className="col-md-8">
              <div className="d-flex justify-content-center justify-content-md-start">
                <p>
                  @{new Date().getFullYear()} Algolyte. All Rights Reserved
                </p>
              </div>
            </div>
            <div className="col-md-4">
            <div className='d-flex flex-column align-items-center align-items-md-end mt-3 mt-md-0 '>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
          </div>


        </div>
      </footer>
    </>
  );
};

export default Footer;
