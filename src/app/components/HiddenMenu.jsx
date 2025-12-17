import React from "react";

export default function HiddenMenu() {
  const links = [
    { name: "Blog" },
    { name: "Ableton for the Classroom" },
    { name: "Ableton for colleges anhdh Universities" },
    { name: "Certified Training" },
    { name: "About Ableton" },
    { name: "Jobs" },
    { name: "Apprenticeships" },
  ];

  const links2 = [
    {
      title: "Loop",
      name: "Watch Talks, performance and Features from Ableton's Summit for Music Makers",
    },
    {
      title: "Learning Music",
      name: "Learn the fundamentals of music making right in your browser.",
    },
    {
      title: "Learning Synths",
      name: "Get started with synthesis using a web-based synth and accompanying lessons.",
    },
    {
      title: "Making Music",
      name: "Some tips from 74 Creative Strategies for Electronic Producers.",
    },
  ];
  return (
    <div className="max-w-[1600px] mx-auto w-full lg:bg-white lg:border-b-2 lg:px-8 border-b-[#eeeeee]">
      <div className="pt-6 lg:py-6">
        <div className="font-futura-medium text-2xl xl:text-3xl mb-4">
          More on Ableton.com:
        </div>
        <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          {links.map((link, id) => (
            <li
              key={id}
              className="font-futura-light xl:text-xl nth-[5]:text-Orange"
            >
              <a href="#" className="cursor-not-allowed">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="font-futura-medium text-2xl xl:text-3xl mt-8 mb-4">
          More on Ableton:
        </div>
        <ul className="flex lg:gap-8 overflow-x-auto">
          {links2.map((link, id) => (
            <li key={id} className="flex pr-4 pb-3 flex-col min-w-[200px] lg:flex-1/2">
              <div className="xl:text-xl font-futura-medium">{link.title}</div>
              <div
                key={id}
                className="font-futura-light xl:text-xl nth-[5]:text-Orange cursor-not-allowed"
              >
                {link.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
