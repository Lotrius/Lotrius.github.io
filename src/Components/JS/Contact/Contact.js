/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faFacebook,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import SocialMedia from '../SocialMedia/SocialMedia';

import '../../CSS/Contact.css';

class Contact extends Component {
  constructor() {
    super();
    this.name = React.createRef();
    this.email = React.createRef();
    this.subject = React.createRef();
    this.message = React.createRef();
    this.socialMediaList = [
      {
        id: 'fb',
        link: 'https://www.facebook.com/solomon.kim.319',
        alt: 'Facebook',
        pic: faFacebook,
      },
      {
        id: 'github',
        link: 'https://github.com/Lotrius',
        alt: 'Github',
        pic: faGithub,
      },
      {
        id: 'linkedin',
        link: 'https://www.linkedin.com/in/solomon-kim/',
        alt: 'LinkedIn',
        pic: faLinkedin,
      },
    ];
    this.state = {
      submitText: '',
      visibile: 'hidden',
      color: '',
    };
  }

  /* ////////////////////////////////////////////////////////////////////////// */

  sendMail = (event) => {
    event.preventDefault(); // Prevent refresh when submitted

    // Regular expression to check if email in right format
    const emailRE = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // Get text in fields
    const name = this.name.current.value;
    const email = this.email.current.value;
    const subject = this.subject.current.value;
    const message = this.message.current.value;

    // If one of the fields is blank,
    if (!(name && email && subject && message)) {
      // If there's no error message already, add one
      this.addMessage('fields');
      return;
    }

    // If the email is not in a valid format,
    if (!emailRE.test(email)) {
      // Ask user to input valid email
      this.addMessage('email');
      return;
    }

    // Otherwise call to backend to send mail with appropriate fields
    fetch('https://thawing-mesa-37094.herokuapp.com/send', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        subject,
        text: message,
      }),
    });

    event.target.reset(); // Reset fields

    // If there's no success message already, add one
    this.addMessage('success');
  };

  /* ////////////////////////////////////////////////////////////////////////// */

  addMessage = (type) => {
    this.setState({ visibile: 'visible' }); // Set element to visible

    // Set text
    switch (type) {
      case 'fields':
        this.setState({
          submitText: 'Please fill out all fields',
          color: 'red',
        });
        break;
      case 'email':
        this.setState({
          submitText: 'Please enter a valid email address',
          color: 'red',
        });
        break;
      default:
        this.setState({ submitText: 'Message sent!', color: 'green' });
    }
  };

  /* ////////////////////////////////////////////////////////////////////////// */

  render() {
    const { submitText, visibile, color } = this.state;
    return (
      <section className="mb4 ml4 mr4">
        {/* <!--Section heading--> */}
        <h2 className="shake h1-responsive font-weight-bold text-center my-4">
          Contact
        </h2>

        {/* <!--Section description--> */}
        <p className="text-center w-responsive mx-auto mb-5">
          If you would like to contact me for whatever reason, please do not
          hesitate to do so. I will try to get back to you ASAP.
        </p>

        <div className="row mb2">
          {/* <!--Grid column form--> */}
          <div className="col-lg-12 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              onSubmit={this.sendMail}
              onKeyPress={(e) => {
                if (
                  e.key === 'Enter' &&
                  document.activeElement.id !== 'message'
                )
                  e.preventDefault();
              }}
            >
              {/* Name */}
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      ref={this.name}
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                    />
                    <p>Name</p>
                  </div>
                </div>

                {/* Email */}
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      ref={this.email}
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                    />
                    <p>Email</p>
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input
                      ref={this.subject}
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                    />
                    <p>Subject</p>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea
                      ref={this.message}
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      className="form-control md-textarea"
                    />
                    <p>Message</p>
                  </div>
                </div>
              </div>

              {/* Submit button */}
              <div className="text-center text-md-left">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Submit"
                />
              </div>

              {/* Submit message */}
              <p
                id="submit-message"
                className={color}
                style={{ visibility: visibile }}
              >
                &zwnj;
                {submitText}
              </p>
            </form>
          </div>
        </div>

        {/* Contact Methods */}
        <div>
          <h2 className="contact">Other Contact Methods</h2>
          <div className="row">
            <div className="contact flex justify-start">
              {/* Phone number */}
              <div className="dib tc mr3">
                <FontAwesomeIcon className="mt-4 fa-3x" icon={faPhone} />
                <p>(917) 502-0579</p>
              </div>

              {/* Email */}
              <div className="dib tc mr3">
                <FontAwesomeIcon className="mt-4 fa-3x" icon={faEnvelope} />
                <p>skim7420@gmail.com</p>
              </div>

              {/* Social Media List */}
            </div>
            <div className="contact flex justify-start">
              <SocialMedia
                socialMediaList={this.socialMediaList}
                path="contact"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
