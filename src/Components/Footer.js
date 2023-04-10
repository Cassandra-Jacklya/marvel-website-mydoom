import React from "react";
import { Link } from 'react-router-dom';

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
            <li className="FooterLink"><Link to="aim">Aim</Link></li>
            <li className="FooterLink"><Link to="vision">Vision</Link></li>
          </div>
          <div className="Column">
            <div className="FootHeading">Content</div>
            <li className="FooterLink"><Link to="characters">Characters</Link></li>
            <li className="FooterLink"><Link to="comics">Comics</Link></li>
            <li className="FooterLink"><Link to="about-us">Team</Link></li>    
          </div>
          <div className="Column">
            <div className="FootHeading">Social Media</div>
            <a className="FooterLink" href="https://www.youtube.com/@marvel/about" target="_blank">
              <i className="fab fa-facebook-f">
                <span className="social-media-icons">YouTube</span>
              </i>
            </a>
            <a className="FooterLink" href="https://www.instagram.com/marvel/" target="_blank">
              <i className="fab fa-instagram">
                <span className="social-media-icons">Instagram</span>
              </i>
            </a>
            <a className="FooterLink" href="https://twitter.com/Marvel?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank">
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
