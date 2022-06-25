import React, { lazy, Component } from "react";
import { ReactComponent as IconEnvelopeFill } from "bootstrap-icons/icons/envelope-fill.svg";
import { ReactComponent as IconHouseFill } from "bootstrap-icons/icons/house-fill.svg";
import { ReactComponent as IconTelephoneFill } from "bootstrap-icons/icons/telephone-fill.svg";

const ContactUsForm = lazy(() => import("../../components/ContactUsForm"));

class ContactUsView extends Component {
  onSubmit = async (values) => {
    alert(JSON.stringify(values));
  };

  render() {
    return (
      <div className="container my-3">
        <div className="row g-3">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <IconEnvelopeFill className="i-va" /> Send Message
              </div>
              <div className="card-body">
                <ContactUsForm onSubmit={this.onSubmit} />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-3">
              <div className="card-header">
                <IconHouseFill className="i-va" /> Address
              </div>
              <div className="card-body">
                <h6 className="card-title border-bottom border-dark pb-2">Head Office</h6>
                <address>
                  <strong>Lorem Ipsum, Inc.</strong>
                  <br />
                  Chandigarh
                  <br />
                  Punjab, India 160022
                  <br />
                  <IconTelephoneFill className="i-va" />{" "}
                  <abbr title="Phone">P:</abbr> (123) 456-7890
                </address>
                <h6 className="card-title border-bottom border-dark pb-2">Development Office</h6>
                <address>
                  <strong>Lorem Ipsum, Inc.</strong>
                  <br />
                  Chandigarh
                  <br />
                  Punjab, India 160022
                  <br />
                  <IconTelephoneFill className="i-va" />{" "}
                  <abbr title="Phone">P:</abbr> (123) 456-7890
                </address>
              </div>
            </div>
            <div className="card">
              <div className="google-maps">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54870.46452402445!2d76.72850953795131!3d30.73515052462736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1656135348568!5m2!1sen!2sin"
                  width={400}
                  height={300}
                  frameBorder={0}
                  style={{ border: 0 }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                  title="Location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUsView;
