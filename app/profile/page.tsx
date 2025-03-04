"use client";

import { getSession, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Profile = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="mt-20 w-[90%] max-w-7xl mx-auto mb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Information Card */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                <Image
                  src={session?.user?.image || "/images/avatar-placeholder.png"}
                  alt="Profile"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                {session?.user?.name || "User Name"}
              </h2>
              <p className="text-gray-600 mt-1">{session?.user?.email}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="md:col-span-2 space-y-6">
          {/* Job Preferences */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Job Preferences
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600 font-medium">Desired Role</p>
                <p className="text-gray-900">Software Engineer</p>
              </div>
              <div>
                <p className="text-gray-600 font-medium">Experience Level</p>
                <p className="text-gray-900">Mid-Senior Level</p>
              </div>
              <div>
                <p className="text-gray-600 font-medium">Preferred Location</p>
                <p className="text-gray-900">Remote</p>
              </div>
              <div>
                <p className="text-gray-600 font-medium">Expected Salary</p>
                <p className="text-gray-900">$80,000 - $120,000</p>
              </div>
            </div>
          </div>

          {/* Recent Applications */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Recent Applications
            </h3>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="p-4 border border-gray-100 rounded-lg hover:border-blue-500 transition-colors duration-200 cursor-pointer"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">
                        Senior Frontend Developer
                      </h4>
                      <p className="text-gray-600 mt-1">Tech Company Inc.</p>
                    </div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      Applied
                    </span>
                  </div>
                  <p className="text-gray-600 mt-2 text-sm">
                    Applied on: March 15, 2024
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
