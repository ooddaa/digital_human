import React from "react";
import Image from "next/image";
import { Authenticated } from "../../types";

interface NavbarProps extends Authenticated {
  signIn: () => void;
  signOut: () => void;
}

const styles = {
  signInBtn: "inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-700  hover:bg-white mt-4 md:mt-0",
  link: "block mt-4 sm:inline-block sm:mt-0 text-teal-300 hover:text-white mr-4"
}

function Navbar({ isAuthenticated, signIn, signOut }: NavbarProps) {

  const userLinks = [
    <a key={"dashboard-link"} href="#" className={styles.link}>
      Dashboard
    </a>,
  ];
  return (
    <div className="navbar">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
        <div className="flex gap-4 items-center flex-shrink-0 text-white mr-6">
          <Image
            width="32px"
            height="36px"
            src="/assets/img/logo.png"
            alt="logo"
          />
          <a href="/">
            <span className="font-bold text-xl">Digital Human</span>
          </a>
        </div>

        <div className="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
          <div className="text-sm sm:flex-grow">
            <a href="#" className={styles.link}>
              ID data provider
            </a>
            <a href="#" className={styles.link}>
              ID data consumer
            </a>
            <a href="#" className={styles.link}>
              About
            </a>
            <a href="#" className={styles.link}>
              Team
            </a>
            {/* show Dashboard link if user has authenticated */}
            {isAuthenticated && userLinks}
          </div>
          <div>
            {isAuthenticated ? (
              <button
                className={styles.signInBtn}
                onClick={() => signOut()}
              >
                Sign out
              </button>
            ) : (
              <button
                className={styles.signInBtn}
                onClick={() => signIn()}
              >
                Sign in
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
