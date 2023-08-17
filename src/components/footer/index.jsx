import React from "react";
import { footerStyle } from "./style";

export const Footer = () => {
  const classes = footerStyle();

  return (
    <div className={classes.footerWrapper}>
      <footer className="site-footer" id="footer">
        <div className="bottom-footer">
          <div className="container">
            <div className="text-center">
              
              <p className="copyright-text">
                Contact us on Whatsapp : 9876543210 & Twiter
              </p>
              <p className="copyright-text">
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
