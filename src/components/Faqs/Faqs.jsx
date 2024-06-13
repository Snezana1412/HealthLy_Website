import { Container, Grid } from "@mui/material";
import Heading from "../Heading/Heading";
import "./Faq.scss";
import Faq from "./Faq";
import { faqs } from "../../../public/faqs";
import { useEffect, useState } from "react";

function Faqs() {
  const [faqsState, setFaqsState] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setFaqsState(faqs);
    }, 1000);
  }, []);
  console.log(faqsState);
  return (
    <section id='faq-area' className='ptb-120'>
      <Container maxWidth='lg'>
        <Heading
          title='FREQUENTLY ASKED QUESTIONS'
          quotes='Every negative belief weakens the partnership between mind and body.'
          author='DEEPAK CHOPRA'
        />
        <Grid container spacing={5}>
          <Grid item xs={1} sm={6} md={6} style={{ position: "relative" }}>
            <div className='faq-right-img-mockup'>
              <img
                src='src/assets/images/app-screen.png'
                alt=''
                className='img-responsive'
              />
            </div>
          </Grid>
          <Grid item xs={1} sm={6} md={6}>
            <div className='faq-content-wrapper'>
              {faqsState?.map((faq, index) => (
                <Faq key={index} faq={faq} />
              ))}
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default Faqs;
