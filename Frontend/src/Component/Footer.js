import React from "react";
import logo1 from "../images/rectengular_logo.png";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    // <div className="overflow_wrapper home vc_responsive sticky_header">
    // <div className="header home vc_responsive sticky_header">
    <div>
      <footer id="footer" className="sep_angled_positive_top separator_top ">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <aside
                id="plethora-aboutus-widget-1"
                className="widget aboutus-widget"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="pl_about_us_widget  ">
                  <p>
                    <img src={logo1} alt="" />
                  </p>
                  <p>We Care About Your Health!</p>
                  <p className="contact_detail">
                    <i className="fa fa-phone"></i>
                    <span>7742770604</span>
                  </p>
                  <p className="contact_detail">
                    <i className="fa fa-envelope"></i>
                    <span>brainscan@d.com</span>
                  </p>
                  <p className="contact_detail">
                    <i className="fa fa-location-arrow"></i>
                    <span>Jaipur, Rajasthan</span>
                  </p>
                </div>
              </aside>
            </div>
            <div className="col-sm-6 col-md-3">
              <aside
                id="nav_menu-3"
                className="widget widget_nav_menu"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <h4>Quick Links</h4>
                <div className="menu-quick-links-container">
                  <ul id="menu-quick-links" className="menu">
                    <li
                      id="menu-item-1784"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1784"
                    >
                      <a href="#footer">Contact Us</a>
                    </li>
                    <li
                      id="menu-item-1785"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1785"
                    >
                      <a href="/services">Our Services</a>
                    </li>
                    <li
                      id="menu-item-1786"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1786"
                    >
                      <Link to="/about">Who Are We</Link>
                    </li>
                    <li
                      id="menu-item-1787"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1787"
                    >
                      
                      <a href="#sanus">About BrainScan</a>
                    </li>
                  </ul>
                </div>
              </aside>
              <aside
                id="plethora-aboutus-widget-2"
                className="widget aboutus-widget"
              >
                <div className="pl_about_us_widget  "></div>
              </aside>
            </div>
            <div className="col-sm-6 col-md-3"></div>
          </div>
        </div>
      </footer>
      <div className="copyright dark_section">
        <div className="dark_section transparent_film">
          <div className="container">
            <p>
              {" "}
              Copyright @ 2023 Brain Scan. All Rights Reserved. | Made with ❤ in
              India
            </p>
            <div className="row">
              <div className="col-sm-6 col-md-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
