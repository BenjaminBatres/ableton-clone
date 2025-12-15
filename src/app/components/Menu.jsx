import React from "react";
import HiddenMenu from "./HiddenMenu";

export default function Menu({ isOpen, links }) {
  return (
    <div
      className={`absolute max-h-max bg-Dark-blue text-white inset-0 px-4 pb-12 pt-8 lg:py-8 transition-all duration-300 lg:hidden z-1001  ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="translate-y-15">
        <ul className="space-y-4">
          {links.map((link, id) => (
            <li key={id} className="text-xl font-futura-medium">
              <a href="#" className="cursor-not-allowed">
                {link.name}
              </a>
            </li>
          ))}
          <div className="font-futura-medium text-xl">
            <a href="#" className="cursor-not-allowed">
              Try live 12 for free
            </a>
          </div>
          <div className="font-futura-medium">
            <a href="#" className="cursor-not-allowed">
              Log in or register
            </a>
          </div>
        </ul>
        <HiddenMenu />
      </div>
    </div>
  );
}
