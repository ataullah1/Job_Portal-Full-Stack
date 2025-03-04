import { Job } from "@/data";
import Image from "next/image";
import React from "react";
import { BiMoney } from "react-icons/bi";
import { FaMapLocation, FaRegBookmark } from "react-icons/fa6";

interface Props {
  job: Job;
}
export const JobCard = ({ job }: Props) => {
  return (
    <div className="group relative overflow-hidden bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100/50 hover:border-blue-100">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
          <Image
            src={job.image}
            alt={job.title}
            width={64}
            height={64}
            className="object-contain rounded-lg transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="flex-1 min-w-0">
          <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-3">
            {job.title}
          </h2>

          <div className="flex flex-wrap gap-4 mb-3">
            <div className="flex items-center space-x-2 text-gray-600">
              <FaMapLocation className="w-4 h-4 text-blue-500" />
              <span className="text-sm">{job?.location}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <BiMoney className="w-4 h-4 text-green-500" />
              <span className="text-sm">{job?.salary}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-green-700 bg-green-50/80 rounded-full ring-1 ring-green-100/80">
              {job?.jobtype}
            </span>
            <span className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-blue-700 bg-blue-50/80 rounded-full ring-1 ring-blue-100/80">
              Urgent
            </span>
            <span className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-purple-700 bg-purple-50/80 rounded-full ring-1 ring-purple-100/80">
              Private
            </span>
          </div>
        </div>

        <button className="flex-shrink-0 p-2.5 text-gray-400 hover:text-blue-600 transition-colors duration-200 rounded-full hover:bg-blue-50">
          <FaRegBookmark className="w-5 h-5" />
        </button>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    </div>
  );
};
