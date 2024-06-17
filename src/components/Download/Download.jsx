import { Container, Grid } from "@mui/material";
import StoreBadges from "../StoreBadges/StoreBadges";
import "./Download.scss";

function Download() {
  return (
    <section id='app-download-area' className='blue-grad-bg ptb-120'>
      <Container maxWidth='lg'>
        {/* <div className='row'>
          <div className='col-sm-7'> */}
        <Grid container spacing={5}>
          <Grid item xs={12} sm={7} md={7}>
            <div className='download-app'>
              <h1>Download HealthLy Today</h1>
              <p>
                {" "}
                Step into the new era of personal healthcare with the HealthLy
                app and guarantee future peace of mind regarding health-related
                data, both for yourself and your loved ones.
              </p>
              <div className='button-group store-buttons'>
                <StoreBadges />
              </div>
            </div>
          </Grid>
        </Grid>
        {/* </div>
        </div> */}
      </Container>
    </section>
  );
}

export default Download;
