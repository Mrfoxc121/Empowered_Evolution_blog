"use client";

import React from "react";
import { useForm } from "react-hook-form";
import {
  DribbleIcon,
  Pintrest,
  MediumIcon,
  TwitterXIcon,
} from "../Icon";
import Link from "next/link";
import siteMetadata from "@/src/utils/siteMetaData";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <footer className="mt-16 rounded-xl bg-dark dark:bg-accentDark/90 m-5 sm:m-10 flex flex-col items-center text-light dark:text-dark">
      <h3 className="mt-16 font-medium dark:font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4">
        Interesting Stories | Updates | Guides
      </h3>
      <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium  text-sm sm:text-base">
        Subscribe to learn about new technology and updates. Join over 5000+
        members community to stay up to date with latest news.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 w-fit sm:min-w-[384px] flex items-stretch bg-transparent p-1 sm:p-2 mx-4 rounded"
      >
        <input

          placeholder="Enter your email here"
          {...register("Email", { required: true, maxLength: 80 })}
          className="w-full bg-transparent pl-0 text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1 placeholder:text-stone-500"
        />

        <input
          type="submit"
          className="bg-light text-dark dark:text-light dark:bg-dark cursor-pointer font-medium rounded px-3 sm:px-5 py-1"
        />
      </form>

      <div className="sm:flex items-center mt-4">
        <a className=" inline-block w-6 h-6 mr-4" href={siteMetadata.linkedin} target="_blank">
        <MediumIcon className="w-6 h-6 hover:scale-125 transition-all ease duration-200 fill-light dark:fill-dark"/>
        </a>
        <a className="inline-block w-6 h-6 mr-4" href={siteMetadata.github} target="_blank">
            <Pintrest className="cursor-pointer w-6 h-6 hover:scale-125 transition-all ease duration-200 fill-light dark:fill-dark"/>
        </a>
        <a className="inline-block w-6 h-6 mr-4" href={siteMetadata.dribbble} target="_blank">
            <DribbleIcon className="cursor-pointer w-6 h-6 hover:scale-125 transition-all ease duration-200"/>
        </a>
        <a className="inline-block w-6 h-6 mr-4" href={siteMetadata.twitter} target="_blank">
            <TwitterXIcon className="cursor-pointer w-6 h-6 hover:scale-125 transition-all ease duration-200 fill-light dark:fill-dark"/>
        </a>
     </div>

      <div className="w-full mt-16 md:mt-24 relative font-medium border-t border-solid border-light dark:border-dark py-6 px-8 flex md:flex-row flex-col items-center justify-between">
        <span className="text-center">
          &copy;2024 Empowered Evolution. All rights reserved
        </span>
        <Link href="/sitemap.xml" className="text-center underline md:my-0 my-4 ">
          sitemap.xml
        </Link>
        <div className="text-center">
          Made with &hearts; by{" "}
          <a href="http://www.jamesjensonwebsolutions.space" target="_blank" className="underline">
            www.jamesjensonwebsolutions.space
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
