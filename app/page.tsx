import Image from "next/image";
import Nav from "./components/nav";
import Features from "./components/features";
import Hero from "./components/hero";
import Plans from "./components/plans";
import Faqs from "./components/faq";
import Cta from "./components/cta";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
    <Nav />
    
    <Features/>
    <Faqs/>
    <Plans/>
    <Cta/>
    <Footer/>

    
    </>

  );
}
