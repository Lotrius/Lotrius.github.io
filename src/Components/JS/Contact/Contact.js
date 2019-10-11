/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

class Contact extends Component {
  constructor() {
    super();
    this.name = React.createRef();
    this.email = React.createRef();
    this.subject = React.createRef();
    this.message = React.createRef();
  }

  sendMail = event => {
    event.preventDefault(); // Prevent refresh when submitted

    // Get text in fields
    const name = this.name.current.value;
    const email = this.email.current.value;
    const subject = this.subject.current.value;
    const message = this.message.current.value;

    // If one of the fields is blank,
    if (!(name && email && subject && message)) {
      // If user sent a message before and there's a success message, remove it
      if (document.getElementById('success')) {
        const successMessage = document.getElementById('success');
        successMessage.parentNode.removeChild(successMessage);
      }

      // If there's no error message already, add one
      if (!document.getElementById('fillout-error')) {
        const node = document.createElement('p');
        node.setAttribute('id', 'fillout-error');
        const textnode = document.createTextNode('Please fill out all fields');
        node.appendChild(textnode);
        document.getElementById('contact-form').appendChild(node);
      }
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

    // Remove error if it's there
    if (document.getElementById('fillout-error')) {
      const error = document.getElementById('fillout-error');
      error.parentNode.removeChild(error);
    }

    // If there's no success message already, add one
    if (!document.getElementById('success')) {
      const node = document.createElement('p');
      node.setAttribute('id', 'success');
      const textnode = document.createTextNode('Message sent!');
      node.appendChild(textnode);
      document.getElementById('contact-form').appendChild(node);
    }
  };

  render() {
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
        </p>

        <div className="row">
          {/* <!--Grid column form--> */}
          <div className="col-md-9 mb-md-0 mb-5">
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

          {/* Side Icons */}
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
  }
}

export default Contact;
