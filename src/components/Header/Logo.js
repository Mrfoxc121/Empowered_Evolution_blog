import Image from "next/image";
import Link from "next/link";
import React from "react";
import profileImg from "@/public/ironmind.svg";

const Logo = () => {
  return (
    <Link className="flex items-center text-dark gap-2 md:gap-4 dark:text-light" href="/">
      <div className="w-12 md:w-16 rounded-full overflow-hidden border border-solid border-dark dark:border-light">
        <Image
          src={profileImg}
          alt="codeBucks"
          className="w-full h-auto rounded-full"
          sizes="33vw"
          priority
        />
      </div>
      <span className="font-bold dark:font-semibold md: text-lg text-xl">Empowered Evolution</span>
    </Link>
  );
};

export default Logo;
