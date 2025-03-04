import React from "react";
import { Hero, JobCategory } from "../../paths";
import FeatureJobs from "./FeatureJobs";
import HowItWorks from "./HowItWorks";

const Home = () => {
  return (
    <div>
      <Hero />
      <JobCategory />
      <FeatureJobs />
      <HowItWorks />
    </div>
  );
};

export default Home;
