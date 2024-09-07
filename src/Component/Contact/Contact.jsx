import React, { useState } from 'react';
import './Contact.css'; // Ensure correct path to your CSS file
// import msg_icon from '../../assets/msg-icon.png';
// import mail_icon from '../../assets/mail-icon.png';
// import phone_icon from '../../assets/phone-icon.png';
// import location_icon from '../../assets/location-icon.png';
import contBg from "../../assets/contact.png"

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2f47108b-aa15-420c-8f2c-9453ad4977a6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact_background" ><img src={contBg} alt="" /></div>

      <div className="containerCon">
        <div className="rowCon">
          <div className="col-lg-5">
            <div className="contact_image">
              {/* Add any content or image here */}
            </div>
          </div>
          <div className="col-lg-7">
            <div className="contact_form_container">
              <div className="contact_title">Get in Touch</div>
              <form onSubmit={onSubmit} id="contact_form" className="contact_form">
                <input type="text" name="name" className="contact_form_name input_field" placeholder="Name" required data-error="Name is required." />
                <input type="email" name="email" className="contact_form_email input_field" placeholder="E-mail" required data-error="Email is required." />
                <input type="text" name="subject" className="contact_form_subject input_field" placeholder="Subject" required data-error="Subject is required." />
                <textarea name="message" className="text_field contact_form_message" rows="4" placeholder="Message" required data-error="Please, write us a message."></textarea>
                <button type="submit" id="form_submit_button" className="form_submit_button button">Send Message<span></span><span></span><span></span></button>
              </form>
              {result && <p className="form_result">{result}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
