import AppFeatures from "../../components/Features/AppFeatures";
import { Features } from "../../components/Features/Features";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import SliderWrapper from "../../components/Slider/SliderWrapper";

function Home() {
  return (
    <div>
      <Header />
      <SliderWrapper />
      <Features />
      <Hero title='bg-pills' />
      <AppFeatures />
    </div>
  );
}

export default Home;
