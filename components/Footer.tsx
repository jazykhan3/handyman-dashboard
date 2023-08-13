import React from "react";
import Link from "next/link";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { FooterData } from "@/constants/landingPage";

const FooterNavigation = () => (
  <React.Fragment>
    <nav className="m-2 space-y-7">
      <h2 className="text-2xl font-bold">About US</h2>
      <div className="text-gray-500">
        <ul className="list-none space-y-2">
          {FooterData.AboutUS.map(({ id, title, link }) => (
            <FooterLinks key={id} title={title} link={link} />
          ))}
        </ul>
      </div>
    </nav>
    <nav className="m-2 space-y-7">
      <h2 className="text-2xl font-bold">Quick links</h2>
      <div className="text-gray-500">
        <ul className="list-none space-y-2">
          {FooterData.QuickLinks.map(({ id, title, link }) => (
            <FooterLinks key={id} title={title} link={link} />
          ))}
        </ul>
      </div>
    </nav>
    <div/>
  </React.Fragment>
);
const FooterLinks = ({ title, link }: { title: string; link: string }) => {
  return (
    <li>
      <Link href={link} title={title} aria-label={title}>
        {title}
      </Link>
    </li>
  );
};
export default function Footer() {
  return (
    <footer className="w-full bg-mainBackground">
      <div className="flex justify-between gap-10 mb-20 Container px-5 py-3 pt-10 flex-wrap ">
        <section className="sm:basis-1/2 grow-0 space-y-7 basis-auto">
          <h1 className="text-2xl font-bold">Handyman-Service</h1>
          <p className="text-gray-500 lg:w-2/3 w-full">
            Looking for a specific home improvement service? Our platform allows
            you to choose from a variety of services and get matched with a
            skilled handyman who can help you get the job done. Simply select
            the service you need and describe the task in detail.
          </p>
        </section>
        <div className="flex-grow">
          <div className="flex justify-between flex-wrap">
            <FooterNavigation/>
          </div>
        </div>
      </div>
      <div className="border-t-2">
        <div className="container mx-auto flex items-center  justify-between py-5 flex-wrap px-4 gap-4">
          <div className="flex gap-10 items-center">
            <Link href={"#"} title="FaceBook">
              <BsFacebook className="text-2xl" />
            </Link>
            <Link href={"#"} title="Twitter">
              <BsTwitter className="text-2xl" />
            </Link>
            <Link href={"#"} title="Linkdin">
              <BsLinkedin className="text-2xl" />
            </Link>
          </div>
          <div className="text-sm">
            <span>All Rights Reserved- Handyman services2023</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
