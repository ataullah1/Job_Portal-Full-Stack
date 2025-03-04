import React from "react";
import { IconType } from "react-icons";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

interface Props {
  bgColor: string;
  Icon: IconType;
}
const Footer = () => {
  const aboutItems = ["Job", "Privacy", "Police", "Application", "Candidates"];
  const quickLinkItems = ["All Job", "Job Details", "How To Apply", "Resume"];
  return (
    <div className="pt-20 pb-12 bg-gradient-to-br from-gray-900 to-black">
      <div className="w-[90%] max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 pb-8 border-b border-white/10">
        {/* 1st part of footer */}
        <div>
          <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-4 font-bold">
            GenJob
          </h1>
          <p className="text-sm text-white/80 leading-relaxed">
            Your trusted partner in connecting talented professionals with
            outstanding career opportunities. Discover your next career move
            with us.
          </p>
          {/* social icons */}
          <div className="mt-6 flex items-center space-x-3">
            <SocialIcon bgColor={"blue"} Icon={FaFacebook} />
            <SocialIcon bgColor={"sky"} Icon={FaTwitter} />
            <SocialIcon bgColor={"red"} Icon={FaYoutube} />
            <SocialIcon bgColor={"pink"} Icon={FaInstagram} />
          </div>
        </div>
        {/* 2nd part of footer  */}
        <FooterSection title={"About Us"} data={aboutItems} />
        {/* 3rd part of footer  */}
        <FooterSection title={"Quick Links"} data={quickLinkItems} />
        {/* 4th part of footer */}
        <FooterSection
          title={"Get in Touch"}
          data={[
            "+880 1719 199967",
            "hello.ataullah@gmail.com",
            "Barishal-Bangladesh",
          ]}
        />
      </div>
      <div className="mt-8 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} GenJob. All rights reserved.
      </div>
    </div>
  );
};
// COMPONENT FOR SECIAL ICON
const SocialIcon = ({ bgColor, Icon }: Props) => (
  <div
    className={`w-10 h-10 bg-${bgColor}-600/90 hover:bg-${bgColor}-500 rounded-full flex items-center justify-center flex-col transform hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-${bgColor}-500/20`}
  >
    <Icon className="text-white" />
  </div>
);
interface SectionProps {
  data: String[];
  title: String;
}
// COMPONENT FOR FOOTER SECTION
const FooterSection = ({ data, title }: SectionProps) => (
  <div>
    <h1 className="text-2xl w-fit text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 font-semibold mb-6">
      {title}
    </h1>
    {data?.map((item, index) => (
      <p
        key={index}
        className="text-base w-fit text-white/60 hover:text-blue-400 cursor-pointer transition-colors duration-200 py-1.5"
      >
        {item}
      </p>
    ))}
  </div>
);
export default Footer;
