import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ratings from "./components/Ratings";
import LegacyLogos from "./components/LegacyLogos";
import Excellence from "./components/Excellence";
import AwardHighlight from "./components/AwardHighlight";
import VideoCampaign from "./components/VideoCampaign";
import ObserveTransformation from "./components/ObserveTransformation";
import SampleCases from "./components/SampleCases";
import DiscoverSection from "./components/DiscoverSection";
import FindMyTreatment from "./components/FindMyTreatment";
import ConcernSelector from "./components/ConcernSelector";
import TreatmentLibrary from "./components/TreatmentLibrary";
import Testimonials from "./components/Testimonials";
import ConsultationForm from "./components/ConsultationForm";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Ratings />
      <LegacyLogos />
      <Excellence />
      <AwardHighlight />
      <VideoCampaign />
      <ObserveTransformation />
      <SampleCases />
      <DiscoverSection />
      <FindMyTreatment />
      <ConcernSelector />
      <TreatmentLibrary />
      <Testimonials />
      <ConsultationForm />
    </div>
  );
};

export default App;
