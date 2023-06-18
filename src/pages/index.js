import Head from "next/head";
import * as React from "react";
import { useState, useEffect } from "react";
import { NextSeo } from "next-seo";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Image from "next/image";
import Link from "next/link";
import * as Icon from "react-feather";
import { useIsVisible } from "@/hooks/useIsVisible";
import copy from "copy-to-clipboard";

export default function Home() {
  const title = "Design Engineer";
  const imgLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`;
  };
  const [highlight, setHighlight] = useState("Home");
  const projects = React.useRef(null);
  const contact = React.useRef(null);
  const [mailText, setMailText] = useState(["Florian", "Click to copy"]);
  const [mailActive, setMailActive] = useState(false);
  const isVisible = useIsVisible(projects);
  const contactVisible = useIsVisible(contact);

  useEffect(() => {
    if (isVisible) {
      setHighlight("Work");
    } else {
      setHighlight("Home");
    }
    if (contactVisible) {
      setMailActive(true);
    } else {
      setMailActive(false);
    }
  }, [isVisible, contactVisible]);

  const copyMail = () => {
    copy("florian.kiem@hfg.design");
    setMailText(["Copied", "Copied"]);
    setTimeout(() => {
      setMailText(["Florian", "Click to copy"]);
    }, 2000);
  };

  return (
    <>
      <NextSeo
        title="Florian - Design Engineer"
        description="Product Designer and Developer building digital experiences."
        openGraph={{
          url: "floriandwt.com",
          title: "Florian - Design Engineer",
          description:
            "Product Designer and Developer building digital experiences.",
          images: [
            {
              url: "/images/florian_opengraph.jpg",
              width: 800,
              height: 600,
              alt: "Florian - Design Engineer",
              type: "image/jpeg",
            },
          ],
          siteName: "Florian - Design Engineer",
        }}
        twitter={{
          handle: "@floriandwt",
          site: "@floriandwt",
          cardType: "summary_large_image",
        }}
      />
      <Navigation title={title} highlight={highlight} />
      <main className="max-md:w-[90%] w-full max-w-6xl pl-[5%] pr-[5%] m-auto bg-white dark:bg-black dark:text-white">
        <div className="md:min-h-[70vh] md:py-24 h-auto flex place-items-center justify-between max-md:flex-col max-md:justify-start max-md:place-items-start max-md:py-32 gap-16">
          <div className="md:w-[400px] relative">
            <h1 className="text-5xl font-semibold mb-4 leading-tight">
              Hi, I am Florian
            </h1>
            <h2 className="text-3xl font-medium leading-[1.3] text-zinc-500 dark:text-zinc-400">
              A designer and developer building digital products.
            </h2>
            <div className="h-8 max-md:hidden"></div>
          </div>
          <div className="md:w-[400px] flex md:pl-5">
            <div className="bg-zinc-50 group shadow-sm hover:bg-sky-50 dark:hover:bg-[#082f49] md:hover:shadow-sky-100 dark:md:hover:shadow-sky-800 dark:bg-[#09090B] dark:border-zinc-800 rounded-xl border md:hover:border-sky-400 border-zinc-200 p-2.5 px-5 relative text-lg flex gap-2 items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 286 286"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="md:group-hover:hidden"
              >
                <rect width="286" height="286" fill="transparent" />
                <mask
                  id="mask0_1283_1051"
                  maskUnits="userSpaceOnUse"
                  x="3"
                  y="38"
                  width="280"
                  height="210"
                >
                  <path
                    d="M236.8 38H49.2C23.6844 38 3 58.6844 3 84.2V201.8C3 227.316 23.6844 248 49.2 248H236.8C262.316 248 283 227.316 283 201.8V84.2C283 58.6844 262.316 38 236.8 38Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_1283_1051)">
                  <path d="M3 38H283V248H3V38Z" fill="#012169" />
                  <path
                    d="M35.8201 38L142.56 117.18L248.88 38H283V65.1201L178 143.44L283 221.32V248H248L143 169.68L38.4401 248H3V221.74L107.56 143.88L3 65.9999V38H35.8201Z"
                    fill="white"
                  />
                  <path
                    d="M188.5 160.94L283 230.5V248L164.44 160.94H188.5ZM108 169.68L110.62 185L26.62 248H3L108 169.68ZM283 38V39.3199L174.06 121.56L174.94 102.32L261.12 38H283ZM3 38L107.56 115H81.32L3 56.3801V38Z"
                    fill="#C8102E"
                  />
                  <path
                    d="M108.44 38V248H178.44V38H108.44ZM3 108V178H283V108H3Z"
                    fill="white"
                  />
                  <path
                    d="M3 122.44V164.44H283V122.44H3ZM122.44 38V248H164.44V38H122.44Z"
                    fill="#C8102E"
                  />
                </g>
              </svg>
              <svg
                width="20"
                height="20"
                viewBox="0 0 286 286"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden md:group-hover:block"
              >
                <rect width="286" height="286" fill="transparent" />
                <mask
                  id="mask0_1283_1177"
                  maskUnits="userSpaceOnUse"
                  x="2"
                  y="38"
                  width="281"
                  height="211"
                >
                  <path
                    d="M234.98 38.0796H50.5546C24.1625 38.0796 2.76746 59.4746 2.76746 85.8664V200.285C2.76746 226.677 24.1625 248.071 50.5546 248.071H234.98C261.372 248.071 282.767 226.677 282.767 200.285V85.8664C282.767 59.4746 261.372 38.0796 234.98 38.0796Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_1283_1177)">
                  <path
                    d="M2.80786 178.089H282.808V248.094H2.80786V178.089Z"
                    fill="#FFCE00"
                  />
                  <path
                    d="M2.80786 38.0796H282.808V108.084H2.80786V38.0796Z"
                    fill="black"
                  />
                  <path
                    d="M2.80786 108.08H282.808V178.084H2.80786V108.08Z"
                    fill="#DD0000"
                  />
                </g>
              </svg>

              <p className="flex relative flex-wrap z-20 items-center md:group-hover:hidden pr-[1px]">
                Currently working
                <Link
                  href="https://inlang.com/"
                  className="inner-link flex items-center ml-1 gap-1"
                  target="_blank"
                >
                  {/* <Image
                    className="inline-flex rounded-sm"
                    src="/images/company_inlang.jpg"
                    width={18}
                    height={18}
                  /> */}
                  @inlang
                </Link>
              </p>
              <p className="relative flex-wrap z-20 items-center hidden md:group-hover:flex">
                Aktuell arbeite ich
                <Link
                  href="https://inlang.com/"
                  className="inner-link flex items-center ml-1 gap-1 relative group-hover:-left-[1px]"
                  target="_blank"
                >
                  {/* <Image
                    className="inline-flex rounded-sm"
                    src="/images/company_inlang.jpg"
                    width={18}
                    height={18}
                  /> */}
                  @inlang
                </Link>
              </p>
              <div className="bg-zinc-50 group-hover:bg-sky-50 dark:group-hover:bg-[#082f49] dark:bg-[#09090B] dark:max-md:border-b-transparent dark:border-zinc-800 absolute z-10 md:top-[50%] md:translate-y-[-50%] -left-[8.5px] h-4 w-4 border-l border-b border-zinc-200 md:group-hover:border-sky-400 rotate-45 max-md:-top-2 max-md:left-6 max-md:border-b-transparent max-md:border-t" />
            </div>
          </div>
          {/* <Link
            className="p-4 shadow-lg active:shadow-none active:scale-95 w-full max-w-[400px] flex place-items-center ring-1 ring-zinc-200 gap-6 bg-zinc-50 transition-all hover:bg-zinc-100 hover:border-zinc-200 border-solid rounded-xl dark:bg-[#09090b] dark:ring-zinc-800 dark:hover:bg-zinc-900 dark:hover:ring-[#212126]"
            href={"./#contact"}
          >
            <div className="h-[8px] w-[8px] flex-none flex justify-center place-items-center rounded-full bg-red-500 opacity-75 dark:bg-red-400">
              <div className="animate-ping h-[16px] w-[16px] absolute flex-none rounded-full bg-red-500 opacity-75"></div>
            </div>
            <p className="font-medium text-sm">
              Currently I am looking for internship opportunities in Europe or
              North America.
            </p>
          </Link> */}
        </div>
        <div>
          <h2 className="text-2xl font-medium text-black dark:text-white">
            As a designer and developer, I see my role in leading projects that
            help companies to achieve their ambitious goals of creating
            something functionally and technologically useful for humanity
          </h2>
        </div>
        <div className="pb-56 pt-24">
          <div className="relative w-full h-20 flex items-center">
            <div className="h-0.5 w-full bg-zinc-400 dark:bg-zinc-300" />
            <div className="w-[calc(60%-4px)] absolute left-[50%] translate-y-[-50%] top-[50%] translate-x-[-50%] bg-white dark:bg-black z-20 h-[40px] rounded-[6px]" />
            <div className="w-[60%] absolute left-[50%] translate-y-[-50%] top-[50%] translate-x-[-50%] bg-gradient-to-tr from-primary dark:from-blue-400 dark:to-fuchsia-400 to-fuchsia-500 z-10 h-11 rounded-[8px]" />
            <div className="w-[calc(60%+12px)] absolute left-[50%] translate-y-[-50%] top-[50%] translate-x-[-50%] bg-white dark:bg-black h-16 rounded-xl" />
            <div className="w-[calc(60%-16px)] absolute left-[50%] translate-y-[-50%] top-[50%] translate-x-[-50%] z-20 flex justify-between">
              <div className="w-[calc(55%-4px)] bg-primary dark:bg-blue-400 h-0.5" />
              <div className="w-[calc(45%-4px)] bg-fuchsia-500 dark:bg-fuchsia-400 h-0.5" />
            </div>
          </div>
          <div className="flex justify-between w-full relative -top-8 max-md:top-0 max-sm:text-base text-md gap-4">
            <p className="text-zinc-400 dark:text-zinc-300">Design</p>
            <p className="w-[55%] relative top-6 text-primary dark:text-blue-400 max-md:top-0 max-md:w-[50%]">
              My Scope
            </p>
            <p className="text-zinc-400 dark:text-zinc-300">Development</p>
          </div>
        </div>
        <div>
          <div className="flex justify-between pb-4">
            <h2 className="text-2xl font-semibold text-black dark:text-white">
              Some of my selected work
            </h2>
          </div>
          <div ref={projects} id="work">
            <div className={"flex flex-col gap-8"}>
              <Link
                href={"./projects/bridge"}
                className="grid grid-cols-5 gap-16 group justify-between items-center max-md:flex max-md:flex-col max-md:gap-4 rounded-md"
              >
                <div className="bg-zinc-100 dark:bg-[#09090b] rounded-md p-2 mb-6 mt-6 md:w-full col-span-3">
                  <Image
                    loader={imgLoader}
                    src="./images/bridge/bridge.webp"
                    alt="Image of the Bridge Landingpage in a Mockup"
                    className="w-full max-h-[272px] object-contain transition-all"
                    width={350}
                    height={250}
                  />
                </div>
                <div className="max-w-sm col-span-2">
                  <div className="flex items-center">
                    <h3 className="text-xl font-medium pb-1">Bridge</h3>
                    <Icon.ChevronRight
                      size={22}
                      className="opacity-0 bottom-0.5 group-hover:opacity-100 transition-all -translate-x-0 group-hover:translate-x-1 relative"
                    />
                  </div>
                  <div className="flex gap-4 text-xs text-zinc-500 dark:text-zinc-400 mb-4">
                    <div className="flex gap-2 place-items-center">
                      <Icon.Calendar width={14} />
                      <p className="font-mono">
                        Q1 2023 –{" "}
                        <span className="text-green-500 font-sans font-medium">
                          Now
                        </span>
                      </p>
                    </div>
                  </div>
                  <p className="pb-2 text-zinc-600 dark:text-zinc-400">
                    Product that helps creating job pages in a matter of minutes
                  </p>
                </div>
              </Link>

              <Link
                href={"./projects/curations"}
                className="grid grid-cols-5 gap-16 group justify-between items-center max-md:flex max-md:flex-col max-md:gap-4 rounded-md"
              >
                <div className="bg-zinc-100 dark:bg-[#09090b] rounded-md p-2 mb-6 mt-6 md:w-full col-span-3">
                  <Image
                    loader={imgLoader}
                    src="./images/curations/curations.webp"
                    alt="Image of Curations in a Mockup"
                    className="w-full max-h-[272px] object-contain transition-all"
                    width={350}
                    height={250}
                  />
                </div>
                <div className="max-w-sm col-span-2">
                  <div className="flex items-center">
                    <h3 className="text-xl font-medium pb-1">Curations</h3>
                    <Icon.ChevronRight
                      size={22}
                      className="opacity-0 bottom-0.5 group-hover:opacity-100 transition-all -translate-x-0 group-hover:translate-x-1 relative"
                    />
                  </div>
                  <div className="flex gap-4 text-xs text-zinc-500 dark:text-zinc-400 mb-4">
                    <div className="flex gap-2 place-items-center">
                      <Icon.Calendar width={14} />
                      <p className="font-mono">
                        Q4 2022 –{" "}
                        <span className="text-green-500 font-sans font-medium">
                          Now
                        </span>
                      </p>
                    </div>
                  </div>
                  <p className="pb-2 text-zinc-600 dark:text-zinc-400">
                    Website featuring useful curations for designers and
                    developers
                  </p>
                </div>
              </Link>

              <Link
                href={"./projects/boost"}
                className="grid grid-cols-5 gap-16 group justify-between items-center max-md:flex max-md:flex-col max-md:gap-4 rounded-md"
              >
                <div className="bg-zinc-100 dark:bg-[#09090b] rounded-md p-2 mb-6 mt-6 md:w-full col-span-3">
                  <Image
                    loader={imgLoader}
                    src="./images/boost/boost.webp"
                    alt="Photo of the Boost Device"
                    className="w-full max-h-[272px] object-contain transition-all"
                    width={350}
                    height={250}
                  />
                </div>
                <div className="max-w-sm col-span-2">
                  <div className="flex items-center">
                    <h3 className="text-xl font-medium pb-1">Boost</h3>
                    <Icon.ChevronRight
                      size={22}
                      className="opacity-0 bottom-0.5 group-hover:opacity-100 transition-all -translate-x-0 group-hover:translate-x-1 relative"
                    />
                  </div>
                  <div className="flex gap-4 text-xs text-zinc-500 dark:text-zinc-400 mb-4">
                    <div className="flex gap-2 place-items-center">
                      <Icon.Calendar width={14} />
                      <p className="font-mono">Q1 2023</p>
                    </div>
                  </div>
                  <p className="pb-2 text-zinc-600 dark:text-zinc-400">
                    Mobile application and hardware device to calculate
                    nutrition intake and provide personalized nutrition
                  </p>
                </div>
              </Link>

              <Link
                href={"/projects/ambient-chat"}
                className="grid grid-cols-5 gap-16 group justify-between items-center max-md:flex max-md:flex-col max-md:gap-4 rounded-md"
              >
                <div className="bg-zinc-100 dark:bg-[#09090b] rounded-md p-2 mb-6 mt-6 md:w-full col-span-3">
                  <Image
                    loader={imgLoader}
                    src="./images/ambient_chat/ambient_chat.webp"
                    alt="Image of the Ambient Chat Platform"
                    className="w-full max-h-[272px] object-contain transition-all"
                    width={350}
                    height={250}
                  />
                </div>
                <div className="max-w-sm col-span-2">
                  <div className="flex items-center">
                    <h3 className="text-xl font-medium pb-1">Ambient Chat</h3>
                    <Icon.ChevronRight
                      size={22}
                      className="opacity-0 bottom-0.5 group-hover:opacity-100 transition-all -translate-x-0 group-hover:translate-x-1 relative"
                    />
                  </div>
                  <div className="flex gap-4 text-xs text-zinc-500 dark:text-zinc-400 mb-4">
                    <div className="flex gap-2 place-items-center">
                      <Icon.Calendar width={14} />
                      <p className="font-mono">Q2 2022</p>
                    </div>
                  </div>
                  <p className="pb-2 text-zinc-600 dark:text-zinc-400">
                    Realtime chat application with artificial intelligence
                  </p>
                </div>
              </Link>

              <Link
                href={"/projects/homebility"}
                className="grid grid-cols-5 gap-16 group justify-between items-center max-md:flex max-md:flex-col max-md:gap-4 rounded-md"
              >
                <div className="bg-zinc-100 dark:bg-[#09090b] rounded-md p-2 mb-6 mt-6 md:w-full col-span-3">
                  <Image
                    loader={imgLoader}
                    src="./images/homebility/homebility.webp"
                    alt="Image of the Homebility Mobile App"
                    className="w-full max-h-[272px] object-contain transition-all"
                    width={350}
                    height={250}
                  />
                </div>
                <div className="max-w-sm col-span-2">
                  <div className="flex items-center">
                    <h3 className="text-xl font-medium pb-1">Homebility</h3>
                    <Icon.ChevronRight
                      size={22}
                      className="opacity-0 bottom-0.5 group-hover:opacity-100 transition-all -translate-x-0 group-hover:translate-x-1 relative"
                    />
                  </div>
                  <div className="flex gap-4 text-xs text-zinc-500 dark:text-zinc-400 mb-4">
                    <div className="flex gap-2 place-items-center">
                      <Icon.Calendar width={14} />
                      <p className="font-mono">Q2 2022</p>
                    </div>
                  </div>
                  <p className="pb-2 text-zinc-600 dark:text-zinc-400">
                    Accessible smarthome application with an easy to use
                    interface
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="h-64"></div>
        <div
          className={
            (mailActive
              ? "fixed right-0 bottom-8 z-40 pointer-events-none pr-[10%] opacity-100 max-md:hidden"
              : "opacity-0 pr-[10%] bottom-0") +
            " transition-all duration-300 max-md:hidden"
          }
        >
          <div className="max-w-6xl flex justify-end w-full">
            <div
              onClick={copyMail}
              className="pr-4 pl-4 pt-3 pb-3 group z-10 pointer-events-auto bg-white hover:bg-zinc-100 hover:scale-[0.99] shadow-lg dark:hover:bg-zinc-900 transition-all rounded-lg backdrop-blur-xl ring-1 ring-zinc-200 cursor-pointer flex gap-8 justify-between place-items-center dark:bg-[#09090b] dark:ring-zinc-800 dark:hover:ring-[#212126]"
            >
              <div className="flex flex-col">
                <p className="font-semibold group-hover:hidden">
                  {mailText[0]}
                </p>
                <p className="font-semibold hidden group-hover:block">
                  {mailText[1]}
                </p>
                <p>florian.kiem@hfg.design</p>
              </div>
              <Icon.Mail width={24} />
            </div>
          </div>
        </div>
        <div ref={contact} id="contact">
          <Contact />
        </div>
        <div className="h-64"></div>
      </main>
      <Footer />
    </>
  );
}
