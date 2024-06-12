import { Box, Container } from "@mui/material";
import Slider from "./Slider";
import "./Slider.scss";

function SliderWrapper() {
  return (
    <section id='slider-area' className='home-style-2 blue-grad-bg'>
      <Container maxWidth='lg' disableGutters className='slider-container'>
        <Box
          marginTop={4}
          className='slider-wrapper slick-initialized slick-slider'>
          <Slider />
        </Box>
      </Container>
    </section>
  );
}

export default SliderWrapper;
