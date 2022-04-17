import React from "react";

import { Logo } from "@components";

export const Header: React.FC = () => {
  return (
    <div className="text-center bg-blue-500">
      <a href="#">
        <Logo />
      </a>
    </div>
  );
};
