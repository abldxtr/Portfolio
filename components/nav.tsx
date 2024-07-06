"use client";

import { useState } from "react";
import { First, Second, Third, Fifth, Forth, Seventh, Sixth } from "./icone/1";
import classNames from "classnames";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const menue = [
    {
      name: "Home",
      icone: <First />,
      link: "/",
    },
    {
      name: "Work",
      icone: <Second />,
      link: "/work",
    },
    {
      name: "Store",
      icone: <Third />,
      link: "/store",
    },
    {
      name: "Ventures",
      icone: <Forth />,
      link: "/ventures",
    },
    {
      name: "About",
      icone: <Fifth />,
      link: "/about",
    },
    {
      name: "Contact",
      icone: <Sixth />,
      link: "/contact",
    },
  ];
  return (
    <div className="fixed z-30 w-full lg:h-screen lg:w-[240px] lg:border-r lg:border-token-f09a9676">
      <div className="flex h-[64px]  w-full flex-row flex-nowrap items-center justify-between border-b border-token-f09a9676 bg-token-e603e94d lg:h-full lg:flex-col lg:items-start lg:justify-start">
        {/* <!-- 1 --> */}
        <div className="w-full border-token-f09a9676 lg:border-r-0 lg:border-b ">
          <div className="pl-[24px] lg:p-[32px]">
            <a href="#" className="group">
              <h3 className="text-[20px] font-normal leading-[1.2em] text-white transition group-hover:text-token-e0fac5c4">
                abolfazl sa.lej
              </h3>
              <p className="text-normal hidden text-[16px] font-light leading-[1.6em] tracking-[0] text-token-3752026f lg:block">
                web development
              </p>
            </a>
          </div>
        </div>

        {/* <!-- 2 --> */}
        <div className="hidden w-full flex-col divide-y-[1px] divide-token-f09a9676 lg:flex   lg:border-b lg:border-b-token-f09a9676 ">
          {menue.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.link}
                className="group flex w-full  items-center gap-[12px] bg-transparent px-[32px] py-[20px] transition hover:bg-token-76df4f11"
              >
                <div className="text- aspect-square w-[20px] fill-token-3752026f stroke-white opacity-50 transition group-hover:opacity-100">
                  {item.icone}
                </div>
                <h6 className="font-Outfit text-[16px] font-medium leading-[1.6em] text-token-3752026f transition group-hover:text-white">
                  {item.name}
                </h6>
              </Link>
            );
          })}
        </div>
        {/* <!-- mobile nav --> */}
        <div
          className="group relative flex aspect-square w-[64px] cursor-pointer items-center justify-center border-l border-token-f09a9676 lg:hidden"
          onClick={() => setOpen(!open)}
        >
          <div className="pointer-events-none z-20 stroke-token-3752026f opacity-90 transition group-hover:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              className="h-8 w-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* mobile nav */}
      <div
        className={classNames(
          "fixed top-[64px] w-full origin-top overflow-hidden bg-token-e603e94d lg:hidden transition-all duration-300 -z-10",
          open ? "  translate-y-0  " : "-translate-y-full",
        )}
      >
        <div
          className={classNames(
            " w-full flex-col divide-y-[1px] divide-token-f09a9676 transition-all border border-transparent border-b border-b-token-f09a9676 ",
          )}
        >
          {menue.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.link}
                className="group flex w-full items-center gap-[12px] bg-transparent px-[32px] py-[20px] transition hover:bg-token-76df4f11"
              >
                <div className="text- aspect-square w-[20px] fill-token-3752026f stroke-white opacity-50 transition group-hover:opacity-100">
                  {item.icone}
                </div>
                <h6 className="font-Outfit text-[16px] font-medium leading-[1.6em] text-token-3752026f transition group-hover:text-white">
                  {item.name}
                </h6>
              </Link>
            );
          })}
        </div>
      </div>
      {/* end mobile nav */}
    </div>
  );
}
