"use client";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import FooterLinks from "./FooterLinks";
import CustomSelect from "./CustomSelect";
import Image from "next/image";
import Logo from "../assets/pexels-foteros-352505.jpg";

export default function Footer() {
  const languageOptions = ["English", "Spainsh", "French", "German"];
  const locationOptions = ["United States", "Mexico", "France", "Germany"];
  const bottomLinks = [
    {
      name: "Contact Us",
    },
    {
      name: "Press Resources",
    },
    {
      name: "Legal Info",
    },
    {
      name: "Corporate Information",
    },
    {
      name: "Privacy Policy",
    },
    {
      name: "Cookie Settings",
    },
    {
      name: "Imprint",
    },
  ];
  return (
    <div className="pt-[8.3vw] px-8 border-t-2 border-[#eee]">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="font-futura-medium text-6xl mb-10">Ableton</h2>
        <div className="flex flex-col-reverse lg:flex-row flex-wrap space-y-6 lg:space-y-18">
          <div className="lg:w-[33%]">
            <FooterLinks
              links={[
                { name: "Register Live, Push or Move" },
                { name: "About Ableton" },
                { name: "Jobs" },
              ]}
            />
            <div className="flex gap-3 mt-5">
              <FaFacebook className="text-blue-600 text-4xl" />
              <FaXTwitter className="text-4xl" />
              <FaYoutube className="text-red-500 text-4xl" />
              <FaInstagram className="text-4xl text-purple" />
              <FaTiktok className="text-4xl" />
              <FaDiscord className="text-4xl text-Lightblue" />
            </div>
          </div>
          <div className="lg:w-[33%]">
            <h3 className="font-futura-medium xl:text-xl">Education</h3>
            <FooterLinks
              links={[
                { name: "Offers for students and teachers" },
                { name: "Ableton for the Classroom" },
                { name: "Ableton for Colleges and Universities" },
              ]}
            />
          </div>
          <div className="lg:w-[33%]">
            <h3 className="font-futura-medium xl:text-xl">
              Sign up to our newsletter
            </h3>
            <p className="font-futura-light xl:text-xl mb-4">
              Enter your email address to stay up to date with the latest
              offers, tutorials, downloads, surveys and more.
            </p>
            <div className="flex">
              <input
                type="text"
                className="px-4.5 py-2 bg-[#eee] w-[80%] lg:w-[75%] desktop:w-full font-futura-light xl:text-xl placeholder:font-sans"
                placeholder="Email Address"
              />
              <button className="bg-Dark-blue w-40 lg:w-[42%] xl:w-[30%] text-white font-futura-medium text-[17px] px-8">
                Sign up
              </button>
            </div>
          </div>
          <div className="lg:w-[33%]">
            <h3 className="font-futura-medium xl:text-xl">Community</h3>
            <FooterLinks
              links={[
                { name: "Find Ableton User Groups" },
                { name: "Find Certified Training" },
                { name: "Become a Certified Trainer" },
              ]}
            />
          </div>
          <div className="lg:w-[33%] mb-3 lg:mb-0">
            <h3 className="font-futura-medium xl:text-xl">
              Language and Location
            </h3>
            <div className="flex gap-0.5 sm:w-100">
              <CustomSelect
                options={languageOptions}
                selectName={"English"}
                width={120}
              />
              <CustomSelect
                options={locationOptions}
                selectName={"United States"}
                width={"100%"}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:items-center pb-[4.1vw] mt-2 lg:mt-0">
          <div className="flex flex-col lg:flex-row gap-3">
            {bottomLinks.map((link, id) => (
              <div
                key={id}
                className="font-futura-medium text-sm cursor-not-allowed"
              >
                {link.name}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <div className="font-futura-medium text-sm">Made in Berlin</div>
            <Image src={Logo} alt="logo" className="rounded-full" width={40} />
          </div>
        </div>
      </div>
    </div>
  );
}
