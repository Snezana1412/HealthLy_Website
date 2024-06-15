import { Container, Grid } from "@mui/material";
import SubscribeForm from "./SubscribeForm";
import "./Subscribe.scss";

function Subscribe() {
  return (
    <section id='subscribe-area'>
      <Container maxWidth='xl'>
        <Grid container spacing={5}>
          <Grid item xs={1} sm={12} md={12}>
            <div className='subscribe-wrapper ptb-40'>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={1} md={1}></Grid>
                <Grid item xs={12} sm={10} md={10}>
                  <Grid container spacing={5}>
                    <Grid item xs={12} sm={5} md={5}>
                      <div className='subscribe-text'>
                        <h2>Subscribe Now</h2>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={7} md={7}>
                      <div className='subscribe-box'>
                        <SubscribeForm />
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default Subscribe;
