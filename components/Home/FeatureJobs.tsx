import React from "react";
import { Heading, JobCard } from "../../paths";
import JobData from "@/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const FeatureJobs = () => {
  return (
    <div className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Heading
          mainHeading={"Featured Jobs"}
          subHeading={
            "Discover opportunities that match your expertise and aspirations"
          }
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {JobData?.map((job) => (
            <Link key={job?.id} href={`job/jobDetails/${job?.id}`}>
              <JobCard job={job} />
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href={"/job/alljobs"}>
            <Button className="group relative px-8 py-6 font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
              View All Jobs
              <span className="absolute inset-0 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureJobs;
