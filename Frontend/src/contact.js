import React from "react";
import "./style/contact.css";

const contact = () => {
  return (
    <div>
      <section class="section section-contact">
      <div class="container">
        <h2 class="common-heading">Contact Us</h2>
        <p>We provide the best prediction service to the users.</p>
        <p>Contact Us for any information or queries </p>
      </div>

      <div class="section-contact-main contact-container">
        <form action="https://formspree.io/f/xknyvwjo" method="POST">
            <div>
              <label for="username"></label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                id="username"
                required
                autocomplete="off"
              />
            </div>
            <div>
              <label for="email"></label>
              <input
                type="email"
                name="email"
                placeholder="demo@mail.com"
                id="email"
                autocomplete="off"
                required
              />
            </div>
          

          <div>
            <label for="subject"></label>
            <input
              type="text"
              name="subject"
              placeholder="subject"
              id="subject"
              autocomplete="off"
              required
            />
          </div>
          <div>
            <label for="textarea"></label>
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="10"
              autocomplete="off"
              placeholder="Write your message"
              required
            ></textarea>
          </div>

          <div>
            <input
              type="submit"
              name="submit"
              id="submit"
              class="contact-btn"
              value="send message"
            />
          </div>
        </form>
      </div>
    </section>

    </div>
  );
};

export default contact;