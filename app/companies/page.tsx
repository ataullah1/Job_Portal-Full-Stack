import React from "react";
import JobData from "@/data";
import Image from "next/image";
import Link from "next/link";

const CompaniesPage = () => {
  // Get unique companies from job data
  const companies = Array.from(new Set(JobData.map((job) => job.company))).map(
    (company) => {
      const companyJobs = JobData.filter((job) => job.company === company);
      return {
        name: company,
        image: companyJobs[0].image,
        jobCount: companyJobs.length,
        location: companyJobs[0].location,
        jobs: companyJobs,
      };
    }
  );

  return (
    <div className="mt-20 w-[90%] max-w-7xl mx-auto mb-12">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Featured Companies
          </h1>
          <p className="mt-2 text-gray-600">
            Discover {companies.length} companies hiring now
          </p>
        </div>
        <div className="flex gap-4">
          <select className="px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-700 hover:border-blue-500 transition-colors duration-200">
            <option value="">All Locations</option>
            {Array.from(
              new Set(companies.map((company) => company.location))
            ).map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
          <select className="px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-700 hover:border-blue-500 transition-colors duration-200">
            <option value="">Sort By</option>
            <option value="jobCount">Most Jobs</option>
            <option value="name">Company Name</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company) => (
          <div
            key={company.name}
            className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100/50 hover:border-blue-100"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex-shrink-0 p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                <Image
                  src={company.image}
                  alt={company.name}
                  width={64}
                  height={64}
                  className="object-contain rounded-lg transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  {company.name}
                </h2>
                <p className="text-sm text-gray-600">{company.location}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Open Positions</span>
                <span className="font-semibold text-blue-600">
                  {company.jobCount}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {company.jobs.slice(0, 3).map((job) => (
                  <span
                    key={job.id}
                    className="inline-flex items-center px-3 py-1 text-xs font-medium text-blue-700 bg-blue-50/80 rounded-full ring-1 ring-blue-100/80"
                  >
                    {job.title}
                  </span>
                ))}
              </div>
              <Link
                href={`/companies/${company.name}`}
                className="mt-4 inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                View Company Profile
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompaniesPage;
