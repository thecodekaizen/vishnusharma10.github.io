// components/Footer.js
const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 mt-8">
      <div className="container mx-auto text-center text-gray-400">
        © {new Date().getFullYear()} Vishnu Sharma. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
