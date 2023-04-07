import React from "react";

const Footer = () => {
  return (
    <div className="Box">
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
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </a>
            <a className="FooterLink" href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </a>
            <a className="FooterLink" href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </a>
            {/* <a className="FooterLink" href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </a> */}
          </div>
        </div>
      </div>
      <p style={{ color: "white", textAlign: "center",  fontFamily: "cursive", fontSize: "x-small", marginTop: "30px"}}>
        MyD00M Marvel Entertainment
      </p>
    </div>
  );
};
export default Footer;
