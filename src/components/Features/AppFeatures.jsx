import { Container, Grid } from "@mui/material";
import { appFeatures } from "../../../public/appFeatures";
import { useEffect, useState } from "react";
import AppFeature from "./AppFeature";

function AppFeatures() {
  const [appFeaturesState, setAppFeaturesState] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setAppFeaturesState(appFeatures);
    }, 1000);
  }, []);
  console.log(appFeaturesState);

  return (
    <section id='app-features-area' className=''>
      <Container maxWidth='lg'>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}>
          {appFeaturesState?.map((feature, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <AppFeature feature={feature} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

export default AppFeatures;
