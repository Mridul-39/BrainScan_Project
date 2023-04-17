import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import bottom from "./images/2409773.jpg";
import Mridul from "./images/Mridul.jpeg";
import Asad from "./images/Asad.jpeg";
import charan from "./images/charan.jpeg";

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div className="header home vc_responsive sticky_header">
          <Navbar />
        </div>
        <section
          id="about"
          style={{ backgroundImage: `url(${bottom})` }}
          className="vc_row wpb_row vc_row-fluid secondary_section text-center transparent_film vcenter bgimage bg_vcenter"
        >
          <div className="container">
            <div className="row">
              <div className="wpb_column vc_column_container col-sm-12">
                <div className="wpb_wrapper">
                  <div className="section_header subtitle_bottom   fancy text-center">
                    <h2 data-aos="fade-up" data-aos-duration="1500">
                      Meet our Team
                    </h2>
                  </div>
                  <div className="vc_empty_space" style={{ height: "32px" }}>
                    <span className="vc_empty_space_inner"></span>
                  </div>
                  <div className="team_members_grid row">
                    <div
                      className="col-sm-6 col-md-3"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <div
                        className="team_member teaser_box centered same_height_col "
                        style={{ height: "auto", minHeight: "359px" }}
                      >
                        <span
                          style={{
                            backgroundImage: `url(${Mridul})`,
                            borderRadius: "50%",
                          }}
                          data-colorset=""
                          className="linkify figure stretchy_wrapper ratio_1-1"
                        >
                          {" "}
                        </span>

                        <div className="content boxed  with_button ">
                          <div className="hgroup">
                            <h4>Mridul Goyal</h4>
                            <p>Student</p>
                          </div>

                          <div className="team_social">
                            <a href="https://twitter.com/">
                              <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/mridulgoyal-/">
                              <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://www.instagram.com/mridul_511/">
                              <i className="fab fa-instagram"></i>
                            </a>
                          </div>

                          <div className="desc">
                            <p></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-sm-6 col-md-3"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <div
                        className="team_member teaser_box centered same_height_col "
                        style={{ height: "auto", minHeight: "359px" }}
                      >
                        <span
                          style={{
                            backgroundImage: `url(${Asad})`,
                            borderRadius: "50%",
                          }}
                          data-colorset=""
                          className="linkify figure stretchy_wrapper ratio_1-1"
                        >
                          {" "}
                        </span>

                        <div className="content boxed  with_button ">
                          <div className="hgroup">
                            <h4>Mohammad Asad</h4>
                            <p>Student</p>
                          </div>

                          <div className="team_social">
                            <a href="https://twitter.com/">
                              <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/mohammad-asad-ae/">
                              <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://www.instagram.com/nasrasad_6678/">
                              <i className="fab fa-instagram"></i>
                            </a>
                          </div>

                          <div className="desc">
                            <p></p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="col-sm-6 col-md-3"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <div
                        className="team_member teaser_box centered same_height_col "
                        style={{ height: "auto", minHeight: "359px" }}
                      >
                        <span
                          style={{
                            backgroundImage: `url(${charan})`,
                            borderRadius: "50%",
                          }}
                          data-colorset=""
                          className="linkify figure stretchy_wrapper ratio_1-1"
                        >
                          {" "}
                        </span>

                        <div className="content boxed  with_button ">
                          <div className="hgroup">
                            <h4>Devanpalli Charan Tej</h4>
                            <p>Student</p>
                          </div>

                          <div className="team_social">
                            <a href="https://twitter.com/">
                              <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.linkedin.com/in//">
                              <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://www.instagram.com/_forever__single__/">
                              <i className="fab fa-instagram"></i>
                            </a>
                          </div>

                          <div className="desc">
                            <p></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="vc_empty_space" style={{ height: "32px" }}>
                    <span className="vc_empty_space_inner"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="separator_bottom">
            <div></div>
          </div>
        </section>
        
        <Footer />
      </div>
    </div>
  );
};

export default About;
