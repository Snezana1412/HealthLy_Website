import { Container, Grid } from "@mui/material";
import Heading from "../Heading/Heading";
import "./About.scss";

function About() {
  return (
    <section id='app-about-area' className='gray-bg ptb-120'>
      <Container maxWidth='lg'>
        <Heading
          title='ABOUT THE HEALTHLY APP'
          quotes='At HealthLy, our mission is to save lives and improve the overall health of people worldwide. We have developed the HealthLy app with the purpose of empowering individuals to take full control of their health data and adopt healthy habits.'
        />
        <Grid container spacing={5}>
          <Grid item xs={1} sm={6} md={6}>
            <div className='about-app mt-100'>
              <h3>Discover the Benefits of HealthLy</h3>
              <p>
                Managing various aspects of health development and medical
                history can often be overwhelming. This challenge becomes even
                greater for those dealing with chronic conditions or assisting
                others in their health journey.
              </p>
              <p>
                Personalized health management relies heavily on the analysis of
                health data and well-organized health-related activities.
                That&apos;s where the HealthLy app comes in. It serves as both a
                comprehensive health management system and a trusted companion.
                By integrating essential tools for health improvement and
                monitoring, along with the ability to store personal health
                data, HealthLy provides a powerful platform for individuals,
                families, physicians, and pharmacists alike.
              </p>
              <div className='button-group store-buttons'>
                <div className='store-badges'>
                  <a href='https://play.google.com/store/apps/details?id=com.healthcarecentral.healthly'>
                    <img src='src/assets/images/googleplay.png' alt='' />
                  </a>
                </div>
                <div className='store-badges'>
                  <a href='https://apps.apple.com/us/app/healthly/id1536292632'>
                    <img src='src/assets/images/app-store.png' alt='' />
                  </a>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={1} sm={6} md={6}>
            <div className='about-app-mockup'>
              <img
                src='src/assets/images/side-mobile.png'
                alt=''
                className='img-responsive'
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default About;
