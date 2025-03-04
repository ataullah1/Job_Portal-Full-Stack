import React from "react";
import { Hero, JobCategory } from "../../paths";
import FeatureJobs from "./FeatureJobs";
import HowItWorks from "./HowItWorks";
import Statistics from "./Statistics";
import Testimonials from "./Testimonials";
import Newsletter from "./Newsletter";

const Home = () => {
  return (
    <div>
      <Hero />
      <Statistics />
      <JobCategory />
      <FeatureJobs />
      <HowItWorks />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
