import React from 'react';
import logo from "../images/trans_logo.png";
// import About from '../about';
// import Contact from '../contact';
// import signup from '../signup';
import {Link} from "react-router-dom";


const Navbar=()=> {
  return ( 
       
        <div className="mainbar  transparent">
          <div className="container">
            <div className="logo">
              
              <a href="index.html" className="brand">
                <img class="logo1" src={logo} alt="BrainScan" />
                
              </a>
            </div>      	
              <div className="menu_container">
                <span className="close_menu">
                  &times;
                </span>
                {/* <Routes><Route path="/about" element={<About />}/></Routes> */}
                <ul id="menu-primary-menu" className="main_menu hover_menu">
                  <li id="menu-item-1789" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-145 current_page_item menu-item-1789 active">
                    <a title="Home" href="/">Home</a>
                  </li>
                  <li id="menu-item-1673" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1673 lihasdropdown">
                    <a title="Our Services" href="#">Our Services</a>
                    <ul role="menu" className=" menu-dropdown">
                      <li id="menu-item-1758" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1758"><a  href="http://127.0.0.1:5000/login">Heart Disease Diagnostic</a></li>
                      <li id="menu-item-1769" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1769"><a  href="#">Pneumonia Detection</a></li>
                      <li id="menu-item-1759" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1759"><a  href="#">Malaria Detection</a></li>
                      <li id="menu-item-1759" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1759"><a  href="http://0.0.0.0/brain/test">Brain Tumor Detection</a></li>
                      <li id="menu-item-1759" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1759"><a  href="http://0.0.0.0/skin/test">Skin Cancer Detection</a></li>
                    </ul>
                  </li>
                  <li id="menu-item-1760" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1760">
                    <Link to="/about">aboutus</Link>
                  </li>
                  <li id="menu-item-1771" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1771">
                    <Link to="/contact">Contactus</Link>
                  </li>
                  &nbsp;&nbsp;
                  <li id="menu-item-1760" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1760">
                    {/* <Link to="http://127.0.0.1:5000/api">Get Started</Link> */}
                    <a href="http://127.0.0.1:5000/login"  target="" className="btn btn-xs btn-secondary"><strong> Get Started</strong></a>
                  </li>
                </ul>        
              </div>
              <label className="mobile_collapser">
                <span>MENU</span>
              </label>
            </div>
          </div>
  );
}

export default Navbar;
