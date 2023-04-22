import "./App.css";
import NavBarCmp from "./NavBar/navBar";
import CarouselCmp from "./Carousel/carousel";
import BenifitsCmp from "./Benifits/benifits";
import ServicesCmp from "./Services/services";
import OurFleetCmp from "./OurFleet/ourFleet";
import WhyUSCmp from "./WhyUs/whyUs";
import BookTaxiCmp from "./BookTaxi/bookTaxi";
import FooterCmp from "./Footer/footer";

function App() {
  return (
    <div className="App">
      <NavBarCmp />
      <CarouselCmp />
      <BenifitsCmp />
      <ServicesCmp />
      <OurFleetCmp />
      <WhyUSCmp />
      <BookTaxiCmp />
      <FooterCmp />
    </div>
  );
}

export default App;
