import React from "react";

export default function SectionInfo({ title, para }) {
  return (
    <div className="max-w-[800px] mx-auto">
      <h3 className="font-futura-medium text-xl lg:text-3xl mb-5">{title}</h3>
      <p className="font-futura-light lg:text-xl">{para}</p>
    </div>
  );
}
