"use client";
import { FC } from "react";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */

const Header: FC = () => {
  return (
    <header>
      <div className="w-full z-10">
        <div className="container !max-w-full">
          <div className="flex justify-between h-20 items-center">
            <div>
              <a href="/">
                <span className="text-lg font-bold uppercase text-neutral-900">
                  Gianfranco
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="fixed top-0 left-0 w-full z-10">
        <div className="container !max-w-full">
          <div className="flex justify-end h-20 items-center">
            <div className="flex items-center gap-4">
              <div
                className="size-11 cursor-pointer rounded-full inline-flex items-center justify-center text-white"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.rect
                    x="3"
                    y="7"
                    width="18"
                    height="2"
                    fill="currentColor"
                    ref={topLineScope}
                    style={{
                      transformOrigin: "12px 8px",
                    }}
                  />
                  <motion.rect
                    x="3"
                    y="15"
                    width="18"
                    height="2"
                    fill="currentColor"
                    ref={bottomLineScope}
                    style={{
                      transformOrigin: "12px 16px",
                    }}
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </header>
  );
};

export default Header;
