import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./Footer.scss";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="social-media">
        <TwitterIcon className="icon" />
        <InstagramIcon className="icon" />
        <a href="https://github.com/midrra" target="_blank">
          <GitHubIcon className="icon" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100005790937811"
          target="_blank"
        >
          <FacebookIcon className="icon" />
        </a>
        <a href="https://mail.google.com">
          <MailIcon className="icon" />
        </a>
      </div>
      <div className="rights">
        <h1>All copy Right 2023 @ ROM Technology</h1>
      </div>
    </div>
  );
};

export default Footer;
