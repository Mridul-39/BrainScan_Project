import React from "react";
// import React from "react";
import slider2 from "./images/wtr.gif";
import slider3 from "./images/2409741.jpg";
import hrr from "./images/hrr.jpg";
import heart from "./images/strive-cardiology.png";
import mosquito from "./images/mosquito.png";
import ecg from "./images/ecg.gif";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Diseases from "./Component/diseases";


function home() {
  return (
    <div className="overflow_wrapper home vc_responsive sticky_header">
      <div className="header home vc_responsive sticky_header">
        <Navbar />
      </div>
      <div className="head_panel">
        <div className="slider_wrapper">
          <div id="head_panel_slider" className="owl-carousel">
            <div className="stretchy_wrapper ratio_slider">
              <div
                style={{ backgroundImage: `url(${ecg})` }}
                aria-hidden="true"
                className="item    "
              >
                <div className="container">
                  <div className="caption caption_left caption_fancy  text-left">
                    <div className="inner black_section transparent_film animated slideInUp">
                      <div className="t1">BRAINSCAN</div>
                      <div className="t2">Computer Aided Diagnostic System</div>
                      <p className="desc hidden-xxs">
                        We use ML to detect patterns of certain diseases within
                        patient electronic healthcare records and provide
                        information of various anomalies.
                      </p>
                      <div>
                        <a
                          href="#services"
                          target="_self"
                          className="btn btn-primary"
                        >
                          Try Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="stretchy_wrapper ratio_slider">
              <div
                style={{
                  backgroundImage: `url(${slider2})`,
                  backgroundPositionY: "between",
                }}
                aria-hidden="true"
                className="item    "
              ></div>
            </div>
            <div className="stretchy_wrapper ratio_slider">
              <div
                style={{ backgroundImage: `url(${slider3})` }}
                aria-hidden="true"
                className="item    "
              >
                <div className="container">
                  <div className="caption caption_left caption_fancy  text-left">
                    <div className="inner black_section transparent_film animated slideInUp">
                      <div className="t1">INSTANT PREDICTION</div>
                      <div className="t2">We care about yout health</div>
                      <p className="desc hidden-xxs"></p>
                      <div>
                        <a
                          href="#services"
                          target="_self"
                          className="btn btn-primary"
                        >
                          Our Services
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="brand-colors"> </div>
      <span className="progress_ball">
        <i className="fa fa-refresh"></i>
      </span>

      <div className="loader-modal"></div>
      <div
        id="loader"
        data-opening="m -5,-5 0,70 90,0 0,-70 z m 5,35 c 0,0 15,20 40,0 25,-20 40,0 40,0 l 0,0 C 80,30 65,10 40,30 15,50 0,30 0,30 z"
        className="pageload-overlay"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewbox="0 0 80 60"
          preserveaspectratio="none"
        >
          <path d="m -5,-5 0,70 90,0 0,-70 z m 5,5 c 0,0 7.9843788,0 40,0 35,0 40,0 40,0 l 0,60 c 0,0 -3.944487,0 -40,0 -30,0 -40,0 -40,0 z"></path>
        </svg>
      </div>
      <div className="main foo" data-colorset="foo">
        <section className="vc_row wpb_row vc_row-fluid no_padding no_cols_padding elevate folded_section transparent">
          <div className="container">
            <div className="row">
              <div className="wpb_column vc_column_container col-sm-3 col-xs-6 skincolored_section">
                <div className="wpb_wrapper">
                  <div className="teaser_box wpb_content_element text-center  transparent boxed same_height_col  with_button    ">
                    <div className="figure transparent">
                      <i className="fas fa-heartbeat"></i>
                    </div>
                    <div className="content text-center   with_button ">
                      <div className="hgroup">
                        <h4 className="neutralize_links">Heart Disease</h4>
                        <p>Dignostics</p>
                      </div>
                      <div className="link centered">
                        <a
                          href=""
                          target=""
                          className="btn btn-xs btn-secondary"
                        >
                          <strong>Will Be Added Soon</strong>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpb_column vc_column_container col-sm-3 col-xs-6 skincolored_section vc_custom_1447875610924">
                <div className="wpb_wrapper">
                  <div className="teaser_box wpb_content_element text-center  transparent boxed same_height_col  with_button    ">
                    <div className="figure transparent">
                      <i className="fas fa-lungs-virus"></i>
                    </div>
                    <div className="content text-center   with_button ">
                      <div className="hgroup">
                        <h4 className="neutralize_links">Covid 19</h4>
                        <p>Detection</p>
                      </div>
                      <div className="link centered">
                        <a
                          href="http://127.0.0.1:5000/login"
                          target=""
                          className="btn btn-xs btn-secondary"
                        >
                          <strong>Analyze Now</strong>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpb_column vc_column_container col-sm-3 col-xs-6 skincolored_section">
                <div className="wpb_wrapper">
                  <div className="teaser_box wpb_content_element text-center  transparent boxed same_height_col  with_button    ">
                    <div className="figure transparent">
                      <i className="fas fa-allergies"></i>
                    </div>
                    <div className="content text-center   with_button ">
                      <div className="hgroup">
                        <h4 className="neutralize_links">Skin Cancer</h4>
                        <p>Detection</p>
                      </div>
                      <div className="link centered">
                        <a
                          href="#"
                          target=""
                          className="btn btn-xs btn-secondary"
                        >
                          <strong>Will Be Added Soon</strong>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpb_column vc_column_container col-sm-3 col-xs-6 secondary_section vc_custom_1447875610924">
                <div className="wpb_wrapper">
                  <div className="teaser_box wpb_content_element text-center  transparent boxed same_height_col  with_button    ">
                    <div className="figure transparent">
                      <i className="fas fa-brain"></i>
                    </div>
                    <div className="content text-center   with_button ">
                      <div className="hgroup">
                        <h4 className="neutralize_links">Brain Tumor</h4>
                        <p>Detection</p>
                      </div>
                      <div className="link centered">
                        <a
                          href="#"
                          target=""
                          className="btn btn-xs btn-secondary"
                        >
                          <strong>Will Be Added Soon</strong>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="sanus"
          className="vc_row wpb_row vc_row-fluid no_top_padding separator_bottom sep_angled_positive_bottom"
        >
          <div className="container">
            <div className="row">
              <div className="wpb_column vc_column_container col-sm-12">
                <div className="wpb_wrapper">
                  <div className="section_header subtitle_bottom   fancy text-left">
                    <h2>What is BRAINSCAN?</h2>
                  </div>
                </div>
              </div>
              <div className="wpb_column vc_column_container col-sm-8 margin_bottom_grid text-left">
                <div className="wpb_wrapper">
                  <div className="wpb_text_column wpb_content_element ">
                    <div className="wpb_wrapper">
                      <p>
                        The model structure of medical imaging in neuroscience
                        involves acquiring medical images using specific
                        techniques, preprocessing to enhance quality and remove
                        noise, analyzing images to extract meaningful
                        information, statistically analyzing data to determine
                        significant differences, and interpreting results to
                        develop new treatments for neurological and psychiatric
                        disorders.
                      </p>
                    </div>
                  </div>
                  <div className="vc_separator wpb_content_element vc_separator_align_left vc_sep_width_100 vc_sep_pos_align_right vc_sep_color_black vc_separator-has-text"></div>
                </div>
              </div>
              <div className="wpb_column vc_column_container col-sm-4 text-left">
                <div className="wpb_wrapper">
                  <div className="teaser_box wpb_content_element text-center image_hover skincolored_section    with_button    ">
                    <div className="figure ">
                      <div
                        className="figure  stretchy_wrapper ratio_16-9"
                        style={{ backgroundImage: `url(${hrr})` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="services" className="container">
              <div className="row">
                <div
                  className="wpb_column vc_column_container col-sm-12"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="wpb_wrapper">
                    <div className="section_header subtitle_bottom   fancy text-left">
                      <h2 className="text-center">
                        DL Services Provided by us
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="wpb_column vc_column_container col-sm-12 col-md-8 margin_bottom_grid text-left">
                  <div className="wpb_wrapper">
                    <div className="vc_row wpb_row vc_inner vc_row-fluid">
                      <div
                        className="wpb_column vc_column_container col-sm-4"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                      >
                        <div className="wpb_wrapper">
                          <div className="teaser_box wpb_content_element text-center  transparent boxed_special same_height_col  with_button    ">
                            <div className="figure transparent">
                              <img src={heart} alt="Cardio Exam" />
                            </div>
                            <div className="content text-center   with_button ">
                              <div className="hgroup">
                                <h4 className="neutralize_links">
                                  Heart Disease
                                </h4>
                                <p>Diagnostic</p>
                              </div>
                              <div className="link centered">
                                <a
                                  href="#"
                                  target=""
                                  className="btn btn-xs btn-primary"
                                >
                                  <strong>Will Be Added Soon</strong>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="wpb_column vc_column_container col-sm-4"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                      >
                        <div className="wpb_wrapper">
                          <div className="teaser_box wpb_content_element text-center  transparent boxed_special same_height_col  with_button    ">
                            <div className="figure transparent">
                              <i className="fas fa-lungs-virus"></i>
                            </div>

                            <div className="content text-center   with_button ">
                              <div className="hgroup">
                                <h4 className="neutralize_links">
                                  Covid 19
                                </h4>
                                <p>Detection</p>
                              </div>

                              <div className="link centered">
                                <a
                                  href="http://127.0.0.1:5000/login"
                                  target=""
                                  className="btn btn-xs btn-primary"
                                >
                                  <strong>Let's Go</strong>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="wpb_column vc_column_container col-sm-4"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                      >
                        <div className="wpb_wrapper">
                          <div className="teaser_box wpb_content_element text-center  transparent boxed_special same_height_col  with_button    ">
                            <div className="figure transparent">
                              <i className="fas fa-allergies"></i>
                            </div>

                            <div className="content text-center   with_button ">
                              <div className="hgroup">
                                <h4 className="neutralize_links">
                                  Skin Cancer
                                </h4>
                                <p>Detection</p>
                              </div>

                              <div className="link centered">
                                <a
                                  href="#"
                                  target=""
                                  className="btn btn-xs btn-primary"
                                >
                                  <strong>Will Be Added Soon</strong>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="wpb_column vc_column_container col-sm-4"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                      >
                        <div className="wpb_wrapper">
                          <div className="teaser_box wpb_content_element text-center  transparent boxed_special same_height_col  with_button    ">
                            <div className="figure transparent">
                              <img src={mosquito} alt="malaria"></img>
                            </div>
                            <div className="content text-center   with_button ">
                              <div className="hgroup">
                                <h4 className="neutralize_links">Malaria</h4>
                                <p>Detection</p>
                              </div>
                              <div className="link centered">
                                <a
                                  href="#"
                                  target=""
                                  className="btn btn-xs btn-primary"
                                >
                                  <strong>Will Be Added Soon</strong>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="wpb_column vc_column_container col-sm-4"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                      >
                        <div className="wpb_wrapper">
                          <div className="teaser_box wpb_content_element text-center  transparent boxed_special same_height_col  with_button    ">
                            <div className="figure transparent">
                              <i className="fas fa-brain"></i>
                            </div>
                            <div className="content text-center   with_button ">
                              <div className="hgroup">
                                <h4 className="neutralize_links">
                                  Brain Tumor
                                </h4>
                                <p>Detection</p>
                              </div>
                              <div className="link centered">
                                <a
                                  href="#"
                                  target=""
                                  className="btn btn-xs btn-primary"
                                >
                                  <strong>Will Be Added Soon</strong>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="wpb_column vc_column_container col-sm-12 col-md-4 text-left"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                  data-aos-delay="200"
                >
                  <div className="wpb_wrapper">
                    <div className="vc_separator wpb_content_element vc_separator_align_left vc_sep_width_100 vc_sep_pos_align_right vc_sep_color_black x_bold vc_separator-has-text">
                      <span className="vc_sep_holder vc_sep_holder_l">
                        <span className="vc_sep_line"></span>
                      </span>
                      <h4>Steps To Analyze</h4>
                      <span className="vc_sep_holder vc_sep_holder_r">
                        <span className="vc_sep_line"></span>
                      </span>
                    </div>
                    <div className="wpb_raw_code wpb_content_element wpb_raw_html">
                      <div className="wpb_wrapper">
                        <h4>
                          <strong>STEP 1:</strong>
                          <br /> Select the service you want to use.
                        </h4>
                        <h4>
                          <strong>STEP 2:</strong>
                          <br /> Create / Login to your Account.
                        </h4>
                        <h4>
                          <strong>STEP 3:</strong>
                          <br /> Upload your health record.
                        </h4>
                        <h4>
                          <strong>STEP 4:</strong>
                          <br /> Wait for your report to be analyzed.
                        </h4>
                        <h4>
                          <strong>STEP 5:</strong>
                          <br /> Get the analyzed result.
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Diseases />

        <section className="vc_row wpb_row vc_row-fluid light_section separator_top sep_angled_positive_top separator_bottom sep_angled_positive_bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-2"></div>
              <div
                className="col-md-3"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <div className="profile-card">
                  <h1>86%&nbsp;</h1>
                  <h5>Overall Accuracy</h5>
                </div>
              </div>
              <div
                className="col-md-3"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <div className="profile-card">
                  <h1>1078&nbsp;</h1>
                  <h5>Data Model Length</h5>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="new_comment">
          <div className="container">
            {" "}
            <div className="new_comment"></div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default home;
