import React from "react";

function diseases() {
  return (
    <section className="vc_row wpb_row vc_row-fluid secondary_section">
      <div className="container">
        <h1 className="text-center">Diseases</h1>
        <hr />
        <hr />
        <div className="row">
          <div
            className="row justify-content-center mb-5 "
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="col-md-4 mb-5">
              <div className="travel-card mb-2">
                <div className="travel-card-image card4"></div>
                <div className="travel-card-text">
                  <h3>Heart Disease</h3>
                  <p>
                    Heart Disease generally refers to conditions that involve
                    narrowed or blocked blood vessels that can lead to a heart
                    attack, chest pain (angina) or stroke.
                  </p>
                  <a href="/#">
                    <button className="btn btn-danger">Coming Soon</button>
                  </a>
                </div>
                <div className="travel-card-stats"></div>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="travel-card">
                <div className="travel-card-image card5"></div>
                <div className="travel-card-text">
                  <h3>Covid 19</h3>
                  <p>
                    Pneumonia is an inflammatory condition of the lung primarily
                    affecting the small air sacs known as alveoli.
                    <br />
                  </p>
                  <br />
                  <a href="http://127.0.0.1:5000/login">
                    {" "}
                    <button className="btn btn-danger">Login To Get Started</button>
                  </a>
                </div>
                <div className="travel-card-stats"></div>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="travel-card">
                <div className="travel-card-image card6"></div>
                <div className="travel-card-text">
                  <h3>Skin Cancer</h3>
                  <p>
                    Skin cancer is an abnormal growth of skin cells. It
                    generally develops in areas that are exposed to the sun, but
                    it can also form in places that don’t normally get sun
                    exposure.
                  </p>
                  <a href="/#">
                    {" "}
                    <button className="btn btn-danger">Coming Soon</button>
                  </a>
                </div>
                <div className="travel-card-stats"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <br />
        </div>
        <div className="row">
          <div
            className="row justify-content-center mb-5 "
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="col-md-2 mb-5"></div>
            <div className="col-md-4 mb-5">
              <div className="travel-card">
                <div className="travel-card-image card3"></div>
                <div className="travel-card-text">
                  <h3>Malaria</h3>
                  <p>
                    A disease caused by a plasmodium parasite, transmitted by
                    the bite of infected mosquitoes.
                  </p>
                  <br />
                  <br />
                  <br />
                  <br />
                  <a href="/#">
                    <button className="btn btn-danger">Coming Soon</button>
                  </a>
                </div>
                <div className="travel-card-stats"></div>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="travel-card">
                <div className="travel-card-image card2"></div>
                <div className="travel-card-text">
                  <h3>Brain Tumor</h3>
                  <p>
                    A brain tumor is a collection, or mass, of abnormal cells in
                    your brain. Your skull, which encloses your brain, is very
                    rigid. Any growth inside such a restricted space can cause
                    problems. Brain tumors can be cancerous (malignant) or
                    noncancerous (benign).
                  </p>
                  <a href="/#">
                    <button className="btn btn-danger">
                     Coming Soon
                    </button>
                  </a>
                </div>
                <div className="travel-card-stats"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </section>
  );
}

export default diseases;
