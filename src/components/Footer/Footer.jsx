import React from "react";
import "./Footer.css";
import { Box, Typography, Button } from "@mui/material";
import Link from "@mui/material/Link";

const Footer = () => {
  return (
    <Box className="footer_outer">
      <Box className="footer_upper">
        <Box className="footer_link_container">
          <img src="./images/logo.svg" alt="logo" />
        </Box>
        <Box className="footer_all_links">
          <Box className="footer_link_container">
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
          </Box>
          <Box className="footer_link_container">
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
          </Box>
          <Box className="footer_link_container">
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
          </Box>
        </Box>
        <Box className="footer_link_container">
          <Typography variant="body1" className="footer_upper_typo">
            Join our community 🔥
          </Typography>
          <Box className="footer_input">
            <input type="text" placeholder="Enter your email" />
            <Button>
              {" "}
              <img src="./images/rightarrow.svg" alt="rightarrow" />
            </Button>
          </Box>
        </Box>
      </Box>
      <li className="footer_bottom">
        <Typography className="bottom_typo" variant="caption">
          Copyright © 2021 Company LLC. All rights reserved
        </Typography>
      </li>
    </Box>
  );
};

export default Footer;
