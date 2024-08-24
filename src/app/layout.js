import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Vishnu Sharma | Portfolio",
  description: "Software Engineer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 flex flex-col">
        <header className="bg-white shadow-md py-4">
          <nav className="container mx-auto flex justify-center">
            <ul className="flex space-x-8">
              <li>
                <Link href="#projects" className="text-lg font-medium">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#blogs" className="text-lg font-medium">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-lg font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link href="#hobbies" className="text-lg font-medium">
                  Hobbies
                </Link>
              </li>
              <li>
                <Link href="#social-media" className="text-lg font-medium">
                  Social Media
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-lg font-medium">
                  Products
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex-grow w-full max-w-4xl mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-white py-4 text-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Vishnu Sharma. All rights
            reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
