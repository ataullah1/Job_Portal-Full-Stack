"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";

interface NavClientProps {
  session: Session | null;
}

export const NavClient = ({ session }: NavClientProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="h-16 shadow-sm border-b border-gray-100">
        <div className="w-[90%] lg:w-[80%] h-full mx-auto flex items-center justify-between">
          {/* logo */}
          <div>
            <Link
              href="/"
              className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
            >
              <h1 className="text-2xl md:text-3xl font-bold text-blue-600">
                Gen<span className="text-orange-600">Job</span>
              </h1>
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/job/alljobs"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Find Jobs
            </Link>
            <Link
              href="/companies"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Companies
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            {!session && (
              <div className="flex items-center space-x-2">
                <Link href={"/login"}>
                  <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                    Login
                  </button>
                </Link>
                <Link href={"/signup"}>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow-md">
                    Sign up
                  </button>
                </Link>
              </div>
            )}

            {session && (
              <div className="flex items-center space-x-3">
                <Link href="/job/post">
                  <button className="px-4 py-2 text-sm font-medium text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors duration-200 shadow-sm hover:shadow-md flex items-center space-x-1">
                    <span>Post a job</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                </Link>

                {/* Profile Dropdown */}
                <div className="relative">
                  {session?.user?.image && (
                    <div className="flex items-center space-x-2 cursor-pointer group">
                      <Image
                        src={session.user.image}
                        alt="Profile"
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full"
                      />
                      {/* <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors">
                        {session.user.name}
                      </span> */}

                      {/* Dropdown Menu */}
                      <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg py-1 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
                        <Link
                          href="/profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Profile
                        </Link>
                        <Link
                          href="/settings"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Settings
                        </Link>
                        <Link
                          href="/my-jobs"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          My Jobs
                        </Link>
                        <hr className="my-1 border-gray-200" />
                        <button
                          onClick={() =>
                            signOut({
                              callbackUrl: `${process.env.NEXT_PUBLIC_URL}/signup`,
                            })
                          }
                          className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 py-4">
          <div className="w-[90%] mx-auto space-y-4">
            <Link
              href="/job/alljobs"
              className="block text-gray-600 hover:text-blue-600 transition-colors"
            >
              Find Jobs
            </Link>
            <Link
              href="/companies"
              className="block text-gray-600 hover:text-blue-600 transition-colors"
            >
              Companies
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
