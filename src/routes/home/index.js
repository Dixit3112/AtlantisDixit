import React from "react";
import Header from "../../common/header";
// import HomePage from '../../components/HomePage'
// import DubaiPage from '../../components/DubaiPage'
// import MontenegroSec from '../../components/MontenegroSec'
import PhilosophyPage from "../../components/PhilosophyPage";
import Footer from "../../common/footer";

export default function Home() {
  return (
    <div>
      <Header />
      {/* <HomePage /> */}
      {/* <DubaiPage /> */}
      {/* <MontenegroSec /> */}
      <PhilosophyPage />
      <Footer />
    </div>
  );
}
