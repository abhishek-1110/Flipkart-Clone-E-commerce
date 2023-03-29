import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start bg-light text-muted" style={{fontSize: 14}}>
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Flipkart
                </h6>
                <p>
                 An E-commerce website.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">About</h6>
                <p>
                  <a href="#!" className="text-reset">
                    About Us
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Contact Us
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Careers
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Corporate Information
                  </a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Help</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Payments
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Shipping
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Cancellation &amp; Returns
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    FAQ
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Policy</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Return Policy
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Terms of Use
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Security
                  </a>
                </p>
                <p>
                  <a href="/pages/privacypolicy" className="text-reset">
                    Privacy Policy
                  </a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p style={{textAlign: "jutsify"}}>
                  <i className="fas fa-home me-3"></i> Flipkart Internet Private Limited,
Buildings Alyssa, Begonia &
Clove Embassy Tech Village,
Outer Ring Road, Devarabeesanahalli Village,
Bengaluru, 560103,
Karnataka, India
<br/>
CIN : U51109KA2012PTC066107
<br/>
Telephone: 044-45614700


                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>
        <div
          className="text-center p-4"
        style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}
        >
          © 2023 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            E-commerce website
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
