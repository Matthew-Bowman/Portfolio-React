import { type FC } from "react";
import { Link } from "react-router-dom";
import { footerCategories } from "../../data/footerLinks";

const Footer: FC = () => {
  return (
    <footer className="py-20 mt-16 bg-gray-900 text-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-start">
          <div className="mb-16 md:mb-0 w-full md:w-auto text-center md:text-left">
            <h2 className="font-bold text-2xl mb-2">Matthew Bowman</h2>
            <p className="mb-0">
              © {new Date().getFullYear()} Matthew Bowman. All rights reserved.
            </p>
          </div>

          {footerCategories.map(({ title, links }) => (
            <div key={title} className="w-1/2 md:w-auto mb-16 md:mb-0">
              <h3 className="font-semibold text-lg mb-4">{title}</h3>
              <ul className="list-none p-0 m-0">
                {links.map(({ label, path, external }) => (
                  <li key={path} className="mb-2">
                    {external ? (
                      <a
                        href={path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-100 no-underline hover:underline"
                      >
                        {label}
                      </a>
                    ) : (
                      <Link
                        to={path}
                        className="text-gray-100 no-underline hover:underline"
                      >
                        {label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
