import JobData, { Job } from "@/data";
import { authOptions } from "@/Auth";
import { ApplyButton, JobCard } from "@/paths";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";

const JobDeatils = async ({ params }: { params: { id: string } }) => {
  const getJobDetail = JobData?.find((job) => job.id.toString() === params.id);
  console.log(getJobDetail);
  const session = await getServerSession(authOptions);
  const relatedJobs = JobData?.slice(0, 4);

  return (
    <div className="mt-20 mb-12">
      <div className="block sm:flex items-center justify-between w-[90%] max-w-7xl mx-auto">
        <div className="flex-[0.7]">
          {getJobDetail && <JobCard job={getJobDetail} />}
        </div>
        {session && <ApplyButton />}
        {!session && (
          <Link href={"/signup"}>
            <button
              type="button"
              className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 rounded-lg text-white shadow-md hover:shadow-lg transition-all duration-300"
            >
              Signup to Apply
            </button>
          </Link>
        )}
      </div>
      <div className="mt-16 w-[90%] max-w-7xl mx-auto space-y-12">
        <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Job Description
          </h1>
          <p className="text-gray-600 leading-relaxed">
            {getJobDetail?.description ||
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis deleniti blanditiis aliquid voluptatem, saepe autem omnis, aperiam consequatur quos voluptas quisquam, corporis facere. Tempore maxime, laboriosam corporis dolorum animi nihil!"}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Key Responsibilities
          </h1>
          <p className="text-gray-600 leading-relaxed">
            {getJobDetail?.responsibilities ||
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis deleniti blanditiis aliquid voluptatem, saepe autem omnis, aperiam consequatur quos voluptas quisquam, corporis facere. Tempore maxime, laboriosam corporis dolorum animi nihil!"}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Required Skills
          </h1>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["React JS", "HTML5", "CSS3", "Javascript", "Tailwindcss"].map(
              (skill) => (
                <li
                  key={skill}
                  className="flex items-center space-x-2 text-gray-600"
                >
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{skill}</span>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Related Jobs
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedJobs?.map((job) => (
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
      </div>
    </div>
  );
};

export default JobDeatils;
