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
      visible: 'hidden',
      color: '',
    };
  }

  /**
   * Send the mail once the user fills out the form and presses the submit button
   *
   * @param {*} event what is triggered when the Submit button is pressed
   */
  sendMail = (event) => {
    // Prevent refresh when submitted
    event.preventDefault();

    // Regular expression to check if email in right format
    const emailRE = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // Get text in fields
    const fields = {
      name: this.name.current,
      email: this.email.current,
      subject: this.subject.current,
      message: this.message.current,
    };

    // Iterate through object and if there's a missing field,
    // let user know
    // eslint-disable-next-line no-restricted-syntax
    for (const value of Object.values(fields)) {
      if (!value.value) {
        this.addSubmitMessage('fields');
        return;
      }
    }

    // If the email is not in a valid format,
    // ask user to input valid email
    if (!emailRE.test(fields.email.value)) {
      this.addSubmitMessage('email');
      return;
    }

    // Otherwise call eto backend to send mail with appropriate fields
    fetch('http://localhost:3000/send', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: fields.name.value,
        email: fields.email.value,
        subject: fields.subject.value,
        message: fields.message.value,
      }),
    });

    // Reset fields
    event.target.reset();

    // If there's no success message already, add one
    this.addSubmitMessage('success');
  };

  /**
   * Sets the message displayed in the contact page when the user presses
   * the Submit button
   *
   * @param {String} type string representing what type of message to display
   */
  addSubmitMessage = (type) => {
    this.setState({ visible: 'visible' }); // Set element to visible

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
      case 'success':
        this.setState({ submitText: 'Message sent!', color: 'green' });
        break;
      default:
        this.setState({
          submitText: 'how did you even get this message',
          color: 'purple',
        });
    }
  };

  /**
   * Renders the actual contact form
   */
  render() {
    const { submitText, visible, color } = this.state;
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
                      className="form-control"
                      ref={this.name}
                      type="text"
                      id="name"
                      name="name"
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
                style={{ visibility: visible }}
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
