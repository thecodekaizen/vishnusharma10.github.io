// components/Navbar.js
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <Link href="/">
          <a className="text-white text-xl font-bold">Vishnu Sharma</a>
        </Link>
        <div className="ml-auto">
          <Link href="/projects">
            <a className="text-gray-300 hover:text-white ml-4">Projects</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-300 hover:text-white ml-4">About</a>
          </Link>
          <Link href="/contact">
            <a className="text-gray-300 hover:text-white ml-4">Contact</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
