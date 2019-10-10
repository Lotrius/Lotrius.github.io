import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section className="mb-4 ml4 mr4">
      {/* <!--Section heading--> */}
      <h2 className="h1-responsive font-weight-bold text-center my-4">
        Contact
      </h2>
      {/* <!--Section description--> */}
      <p className="text-center w-responsive mx-auto mb-5">
        If you would like to contact me for whatever reason, please do not
        hesitate to do so. I will try to get back to you ASAP. 
        NOTE: Currently doesn't work am working on it.
      </p>

      <div className="row">
        {/* <!--Grid column--> */}
        <div className="col-md-9 mb-md-0 mb-5">
          <form
            id="contact-form"
            name="contact-form"
            action="mail.php"
            method="POST"
          >
            {/* <!--Grid row--> */}
            <div className="row">
              {/* <!--Grid column--> */}
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                  />
                  <label htmlFor="name" className="">
                    Your name
                  </label>
                </div>
              </div>
              {/* <!--Grid column-->
    
                        <!--Grid column--> */}
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="form-control"
                  />
                  <label htmlFor="email" className="">
                    Your email
                  </label>
                </div>
              </div>
              {/* <!--Grid column--> */}
            </div>
            {/* <!--Grid row-->
    
                    <!--Grid row--> */}
            <div className="row">
              <div className="col-md-12">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                  />
                  <label htmlFor="subject" className="">
                    Subject
                  </label>
                </div>
              </div>
            </div>
            {/* <!--Grid row--> */}

            {/* <!--Grid row--> */}
            <div className="row">
              {/* <!--Grid column--> */}
              <div className="col-md-12">
                <div className="md-form">
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    rows="2"
                    className="form-control md-textarea"
                  />
                  <h6>Your message</h6>
                </div>
              </div>
            </div>
            {/* <!--Grid row--> */}
          </form>

          <div className="text-center text-md-left">
            <a
              className="btn btn-primary"
              onClick="document.getElementById('contact-form').submit();"
            >
              Send
            </a>
          </div>
          <div className="status" />
        </div>
        {/* <!--Grid column-->
    
            <!--Grid column--> */}
        <div className="col-md-3 text-center">
          <ul className="list-unstyled mb-0">
            <li>
              <FontAwesomeIcon className="mt-4 fa-2x" icon={faPhone} />
              <p>+ 01 (917) 502-0579</p>
            </li>

            <li>
              <FontAwesomeIcon className="mt-4 fa-2x" icon={faEnvelope} />
              <p>skim7420@gmail.com</p>
            </li>
          </ul>
        </div>
        {/* <!--Grid column--> */}
      </div>
    </section>
  );
};

export default Contact;
