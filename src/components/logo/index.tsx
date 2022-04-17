import React from "react";
import Image from "next/image";

export const Logo: React.FC = () => {
  return (
    <Image src="/icons/nextjs-icon.svg" alt="cloudly" width="96" height="58" />
  );
};
