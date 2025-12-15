import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

export default function FooterLinks({ links }) {
  return (
    <>
      {links.map((link, id) => (
        <div key={id} className="flex items-center gap-1">
          <div className="xl:text-xl font-futura-light flex cursor-not-allowed">
            {link.name}
          </div>
          <MdArrowForwardIos className="mt-1 text-xs" />
        </div>
      ))}
    </>
  );
}
