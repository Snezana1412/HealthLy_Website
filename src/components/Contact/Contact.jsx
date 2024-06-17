import { Container, Grid } from "@mui/material";
import ContactForm from "./ContactForm";
import "./Contact.scss";

function Contact() {
  return (
    <section id='contact-area' className='overlay-white'>
      <Container maxWidth='lg'>
        <div className='row'>
          <div id='map'></div>
        </div>
      </Container>

      <div className='contact-box'>
        <Container maxWidth='lg'>
          <div className='contact-box-inner'>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={7} md={7}>
                <div className='get-in-touch p-100'>
                  <h2>Get in Touch</h2>
                  <ContactForm />
                </div>
              </Grid>

              <Grid item xs={12} sm={5} md={5}>
                <div className='address-box p-100'>
                  <h2>Address</h2>
                  <p></p>
                  <ul className='address-info'>
                    <li className='email-address'>
                      <div className='info-icon dsp-tc'>
                        <i className='icofont icofont-paper-plane'></i>
                      </div>
                      <div className='info-details dsp-tc'>
                        <p>
                          Support:
                          <br />
                          support@healthlyapp.com
                        </p>
                        <p>
                          Partnerships:
                          <br />
                          partners@healthlyapp.com
                        </p>
                        <p>
                          Investments:
                          <br />
                          invest@healthlyapp.com
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Contact;
