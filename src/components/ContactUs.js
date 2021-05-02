import React from "react";

//private
 const ContactUs = (props) => {
  const resumeData = props.resumeData;

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="ten columns">
          <p className="lead">
            Feel free to contact me for any work or suggestions below
          </p>
        </div>
      </div>
      <div className="row">
        <aside className="eight columns footer-widgets">
          <div className="widget">
            <h3>Contact</h3>
            <a href="https://www.linkedin.com/in/juwel-hossain-339a4a13a/" target="_blank" >Linkedin</a>
          </div>
        </aside>
      </div>
    </section>
  );
};
export default ContactUs;
