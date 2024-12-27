import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import PersonIcon from "@mui/icons-material/Person";
import "./Footer.scss";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="social-media">
        <TwitterIcon className="icon"/>
        <InstagramIcon className="icon"/>
        <GitHubIcon className="icon"/>
        <PersonIcon className="icon"/>
        <MailIcon className="icon"/>
      </div>
      <div className="rights">
        <h1>All copy Right 2023 @ ROM Technology</h1>
      </div>
    </div>  
  );
};

export default Footer;
