//import { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import { useFeatures } from "../../contexts/featuresContext";

import Feature from "./Feature";
import Heading from "../Heading/Heading";
export function Features() {
  const { featuresState } = useFeatures();

  console.log(featuresState);

  const displayFeatures = featuresState.features;

  const title = "EXCITING FEATURES";
  const quotes =
    "Wherever the art of Medicine is loved, there is also a love of Humanity.";
  const author = "HIPPOCRATES";

  return (
    <section id='awesome-features-area' className='features'>
      <Container maxWidth='lg'>
        <Heading title={title} quotes={quotes} author={author} />
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}>
          {displayFeatures?.map((feature, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Feature feature={feature} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
