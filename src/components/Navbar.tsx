import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font top-0 w-full fixed z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src="/Images/logo.png" alt="Logo" />
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="" className="mr-5 hover:text-gray-900 font-bold">
            Home
          </Link>
          <Link href="" className="mr-5 hover:text-gray-900 font-bold">
            Products
          </Link>
          <Link href="" className="mr-5 hover:text-gray-900 font-bold">
            Cart
          </Link>
          <Link href="" className="mr-5 hover:text-gray-900 font-bold">
            Register
          </Link>
          <Link href="" className="mr-5 hover:text-gray-900 font-bold">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
