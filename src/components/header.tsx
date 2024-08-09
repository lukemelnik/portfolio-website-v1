"use client";

import { ModeToggle } from "./ui/mode-toggle";
import { AnimatePresence, motion } from "framer-motion";
import HamburgerIcon from "./icons/hamburger-icon";
import XIcon from "./icons/x-icon";
import { useState } from "react";
import NavLink from "./nav-link";
import HomeLink from "./home-link";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="relative z-[50]">
      <nav
        className={`group fixed left-0 right-0 top-0 border-b-[1px] p-5 shadow-sm backdrop-blur-md dark:border-zinc-800 ${navOpen ? "bg-background" : "bg-background/90"}`}
      >
        <div className="flex items-center justify-between md:px-10">
          <HomeLink name="Luke Melnik" link="/#intro" />
          <ul className="hidden items-center gap-6 text-lg md:flex">
            <NavLink name="Projects" link="/#projects" />
            <NavLink name="Contact" link="/#contact" />
            <NavLink name="Blog" link="/blog" />
            <ModeToggle />
          </ul>
          <div className="flex gap-5 md:hidden">
            <ModeToggle />
            <div className="md:hidden" onClick={() => setNavOpen(!navOpen)}>
              {navOpen ? (
                <XIcon width="40" height="40" />
              ) : (
                <HamburgerIcon height="40" width="40" />
              )}
            </div>
          </div>
        </div>
        <AnimatePresence>
          {navOpen && (
            <motion.div
              className="min-h-svh"
              initial={{ x: -100 }} // start position
              animate={{ x: 0 }} // end position
              transition={{ duration: 0.3 }} // animation options
              exit={{ x: -100 }}
            >
              <ul
                className="mt-10 space-y-3 text-3xl"
                onClick={() => setNavOpen(!navOpen)}
              >
                <NavLink name="Home" link="/" />
                <NavLink name="Projects" link="/#projects" />
                <NavLink name="Contact" link="/#contact" />
                <NavLink name="Blog" link="/blog" />
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
