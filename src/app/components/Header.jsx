import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <header className="text-gray-600 body-font bg-slate-400 top-0 sticky z-20">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">Portfolio Website</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link href="/blog" className="mr-5 hover:text-gray-900">
            Blog
          </Link>
          <Link href="/project" className="mr-5 hover:text-gray-900">
            Projects
          </Link>
          <Link href="/contact" className="mr-5 hover:text-gray-900">
            Contact Me
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
