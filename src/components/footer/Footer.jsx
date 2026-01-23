import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./Footer.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/mohamed-3wad"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon className="icon" />
        </a>
        <a
          href="https://github.com/midrra"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon className="icon" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100005790937811"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon className="icon" />
        </a>
        <a
          href="https://mail.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MailIcon className="icon" />
        </a>
      </div>
      <div className="rights">
        <h1>All copy Right 2025 @ ROM Technology</h1>
      </div>
    </div>
  );
};

export default Footer;
