import React from "react";
import "../css/Contact.css";

export default function Contact() {
  let gWidth;
  let gHeight;

  switch (screen.orientation.type) {
    case "landscape-primary":
      gWidth = "50%";
      gHeight = "50%";
      break;
    case "landscape-secondary":
      gWidth = "50%";
      gHeight = "50%";
      break;
    case "portrait-secondary":
    case "portrait-primary":
      gWidth = "90%";
      gHeight = "50%";
      break;
    default:
      console.log("The orientation API isn't supported in this browser :(");
  }

  return (
    <>
      <div className="contact-page">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27832.722465368555!2d-130.11005305606008!3d64.15130695171112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1690639466796!5m2!1sen!2sus"
          className="google-map"
          width={gWidth}
          height={gHeight}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: "0" }}
        ></iframe>
        <div className="contact-info">
          <div className="address-div">
            <h3>Address</h3>
            <address>
              South Inuvik, <br></br>
              Northwest Territories, <br></br>
              Canada
            </address>
            <address>
              <a href="https://www.google.com/maps/place/64%C2%B008'56.2%22N+130%C2%B005'23.7%22W/@64.1489383,-130.0924923,17z/data=!3m1!4b1!4m13!1m8!3m7!1s0x5170f55d74c9c737:0xa34ad4db88f66834!2sInuvik,+Unorganized,+NT,+Canada!3b1!8m2!3d71.6238064!4d-121.7003759!16s%2Fg%2F1tlkc00f!3m3!8m2!3d64.148936!4d-130.089912!5m1!1e4?entry=ttu">
                64°08'56.2"N 130°05'23.7"W
              </a>
            </address>
          </div>

          <div className="phone-div">
            <h3>Telephone</h3>
            <a href="tel:+5555552344">+555-555-FILK</a>
          </div>
          <div className="email-div">
            <h3>Email</h3>
            <a href="mailto:bootswoodworking@inuvik.nwt">
              bootswoodworking@inuvik.nwt
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
