import React from "react";
import "./Footer.css";
import { Box, Typography, Button } from "@mui/material";
import Link from "@mui/material/Link";

const Footer = () => {
  return (
    <Box className="footer_outer">
      <ul className="footer_upper">
        <li className="footer_link_container">
          <img src="./images/logo.svg" alt="logo" />
        </li>
        <li className="footer_link_container">
          <Link className="footer_link" component="button" variant="body2">
            About
          </Link>
          <Link className="footer_link" component="button" variant="body2">
            Projects
          </Link>
          <Link className="footer_link" component="button" variant="body2">
            Projects
          </Link>
          <Link className="footer_link" component="button" variant="body2">
            Projects
          </Link>
        </li>
        <li className="footer_link_container">
          <Link className="footer_link" component="button" variant="body2">
            What we do
          </Link>
          <Link className="footer_link" component="button" variant="body2">
            Press
          </Link>
          <Link className="footer_link" component="button" variant="body2">
            Press
          </Link>
          <Link className="footer_link" component="button" variant="body2">
            Press
          </Link>
        </li>
        <li className="footer_link_container">
          <Link className="footer_link" component="button" variant="body2">
            Jobs
          </Link>
          <Link className="footer_link" component="button" variant="body2">
            Download
          </Link>
          <Link className="footer_link" component="button" variant="body2">
            Download
          </Link>
          <Link className="footer_link" component="button" variant="body2">
            Download
          </Link>
        </li>
        <li className="footer_link_container">
          <Typography variant="body1" className="footer_upper_typo">
            Join our community 🔥
          </Typography>
          <li className="footer_input">
            <input type="text" placeholder="Enter your email" />
           <Button> <img src="./images/rightarrow.svg" alt="rightarrow" /></Button>
          </li>
        </li>
      </ul>
      <li className="footer_bottom">
        <Typography className="bottom_typo" variant="caption">
          Copyright © 2021 Company LLC. All rights reserved
        </Typography>
      </li>
    </Box>
  );
};

export default Footer;
