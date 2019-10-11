/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faFacebook,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

class Contact extends Component {
  constructor() {
    super();
    this.name = React.createRef();
    this.email = React.createRef();
    this.subject = React.createRef();
    this.message = React.createRef();
  }

  /* ////////////////////////////////////////////////////////////////////////// */

  sendMail = event => {
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
      // If user sent a message before and there's a success message, remove it
      this.removeCurrentMessage();

      // If there's no error message already, add one
      this.addMessage('fields');

      return;
    }

    if (!emailRE.test(email)) {
      // Remove current if there is one
      this.removeCurrentMessage();

      // If there's no success message already, add one
      this.addMessage('email');

      return;
    }

    // Otherwise call to backend to send mail with appropriate fields
    fetch('http://localhost:3000/send', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        subject,
        text: message
      })
    });

    event.target.reset(); // Reset fields

    // Remove current if there is one
    this.removeCurrentMessage();

    // If there's no success message already, add one
    this.addMessage('success');
  };

  /* ////////////////////////////////////////////////////////////////////////// */

  addMessage = type => {
    // Create messages
    const node = document.createElement('p');
    node.setAttribute('id', 'submit-message');
    const textnode = document.createTextNode('');
    node.appendChild(textnode);

    // Set text
    textnode.nodeValue =
      // eslint-disable-next-line no-nested-ternary
      type === 'fields'
        ? 'Please fill out all fields'
        : type === 'email'
        ? 'Invalid email'
        : 'Message sent!';

    document.getElementById('contact-form').appendChild(node); // Append
  };

  /* ////////////////////////////////////////////////////////////////////////// */

  removeCurrentMessage = () => {
    if (document.getElementById('submit-message')) {
      const currentSubmitMessage = document.getElementById('submit-message');
      currentSubmitMessage.parentNode.removeChild(currentSubmitMessage);
    }
  };

  /* ////////////////////////////////////////////////////////////////////////// */

  render() {
    return (
      <section className="mb-4 ml4 mr4">
        {/* <!--Section heading--> */}
        <h2 className="shake h1-responsive font-weight-bold text-center my-4">
          Contact
        </h2>

        {/* <!--Section description--> */}
        <p className="text-center w-responsive mx-auto mb-5">
          If you would like to contact me for whatever reason, please do not
          hesitate to do so. I will try to get back to you ASAP.
        </p>

        <div className="row mb4">
          {/* <!--Grid column form--> */}
          <div className="col-lg-12 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              onSubmit={this.sendMail}
              onKeyPress={e => {
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
                    <p>Your name</p>
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
                    <p>Your email</p>
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
                    <p>Your message</p>
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
            </form>

            <div className="status" />
          </div>
        </div>

        <div className="row">
          {/* Side Icons */}
          <div>
            <h3>Other Contact Methods</h3>
            <ul className="list-unstyled mb-0 row tc">
              {/* Phone number */}
              <li>
                <FontAwesomeIcon className="mt-4 fa-2x" icon={faPhone} />
                <p>+ 01 (917) 502-0579</p>
              </li>

              {/* Email */}
              <li>
                <FontAwesomeIcon className="mt-4 fa-2x" icon={faEnvelope} />
                <p>skim7420@gmail.com</p>
              </li>

              {/* LinkedIn */}
              <li>
                <FontAwesomeIcon className="mt-4 fa-2x" icon={faLinkedin} />
                <p>LinkedIn</p>
              </li>

              {/* Facebook */}
              <li>
                <FontAwesomeIcon className="mt-4 fa-2x" icon={faFacebook} />
                <p>Facebook</p>
              </li>

              {/* Github */}
              <li>
                <FontAwesomeIcon className="mt-4 fa-2x" icon={faGithub} />
                <p>Github</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
