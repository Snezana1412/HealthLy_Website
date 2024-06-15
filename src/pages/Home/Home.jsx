import About from "../../components/About/About";
import Download from "../../components/Download/Download";
import Faqs from "../../components/Faqs/Faqs";
import AppFeatures from "../../components/Features/AppFeatures";
import { Features } from "../../components/Features/Features";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import SliderWrapper from "../../components/Slider/SliderWrapper";
import Subscribe from "../../components/Subscribe/Subscribe";

function Home() {
  return (
    <div>
      <Header />
      <SliderWrapper />
      <Features />
      <Hero title='bg-pills' />
      <AppFeatures />
      <About />
      <Hero title='awesome-screen' className='overlay ptb-120' />
      <Faqs />
      <Download />
      <Subscribe />
    </div>
  );
}

export default Home;
