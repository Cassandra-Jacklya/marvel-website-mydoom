import React from "react";

const Footer = () => {
  return (
    <>
    <div className="Box">
      <div className="Box-div-el">
          <p className="Box-p-el">
            © MyD00M Marvel Entertainment
          </p>
      </div>
      <div className="FootContainer">
        <div className="Row">
          <div className="Column">
            <div className="FootHeading">About Us</div>
            <a className="FooterLink" href="#">Aim</a>
            <a className="FooterLink" href="#">Vision</a>
            <a className="FooterLink" href="#">Testimonials</a>
          </div>
          <div className="Column">
            <div className="FootHeading">Content</div>
            <a className="FooterLink" href="#">Characters</a>
            <a className="FooterLink" href="#">Comics</a>
            <a className="FooterLink" href="#">Team</a>
          </div>
          <div className="Column">
            <div className="FootHeading">Social Media</div>
            <a className="FooterLink" href="#">
              <i className="fab fa-facebook-f">
                <span className="social-media-icons">Facebook</span>
              </i>
            </a>
            <a className="FooterLink" href="#">
              <i className="fab fa-instagram">
                <span className="social-media-icons">Instagram</span>
              </i>
            </a>
            <a className="FooterLink" href="#">
              <i className="fab fa-twitter">
                <span className="social-media-icons">Twitter</span>
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default Footer;
