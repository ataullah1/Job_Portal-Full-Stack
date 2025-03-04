import React from "react";
import JobData from "@/data";
import Link from "next/link";
import { JobCard } from "@/paths";

const AllJobs = () => {
  return (
    <div className="mt-20 w-[90%] max-w-7xl mx-auto mb-12">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            All Available Positions
          </h1>
          <p className="mt-2 text-gray-600">
            Showing {JobData.length} opportunities
          </p>
        </div>
        <div className="flex gap-4">
          <select className="px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-700 hover:border-blue-500 transition-colors duration-200">
            <option value="">All Categories</option>
            <option value="fulltime">Full Time</option>
            <option value="parttime">Part Time</option>
            <option value="remote">Remote</option>
          </select>
          <select className="px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-700 hover:border-blue-500 transition-colors duration-200">
            <option value="">Sort By</option>
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>
      <div className="grid gap-6">
        {JobData?.map((job) => (
          <Link
            key={job.id}
            href={`/job/jobDetails/${job.id}`}
            className="block transition-transform hover:scale-[1.01] duration-200"
          >
            <JobCard job={job} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
