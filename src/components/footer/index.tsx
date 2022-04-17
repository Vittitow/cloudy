import React from "react";
import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <div className="text-center py-5 bg-blue-500">
      <span className="text-white font-semibold block mb-3">Made with ❤️ by yours truly</span>
      <ul className="flex justify-center list-none p-0 m-0">
        <li className="mx-3">
          <a href="https://vittitow.io" target="_blank" className="block mb-3">
            <Image
              src="/icons/twitter-icon.svg"
              alt="portfolio"
              width="28"
              height="28"
            />
          </a>
        </li>
        <li className="mx-3">
          <a
            href="https://linkedin.com/in/corey-vittitow"
            target="_blank"
            className="block mb-3"
          >
            <Image
              src="/icons/linkedin-icon.svg"
              alt="linkedin"
              width="28"
              height="32"
            />
          </a>
        </li>
        <li className="mx-3">
          <a
            href="https://github.com/vittitow"
            target="_blank"
            className="block mb-3"
          >
            <Image
              src="/icons/github-icon.svg"
              alt="github"
              width="28"
              height="29"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};
