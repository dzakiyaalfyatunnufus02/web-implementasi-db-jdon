import React from "react";
import "../css/footer.css";
import logo from "../aset/OIG.40gntGga11NT2DMc-removebg-preview.png";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-8 px-5">
        <div className="flex items-center space-x-3 mb-4 md:mb-0 footer-padding">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <div className="text-2x font-semibold">
            Library Dzakiya Alfyatun Nufus
          </div>
        </div>

        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
          <li className="mx-2">
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
          </li>

          <li className="mx-2">
            <a href="#" className="hover:text-gray-300">
              Privacy Policy
            </a>
          </li>
          <li className="mx-2">
            <a href="#" className="hover:text-gray-300">
              Licensing
            </a>
          </li>
          <li className="mx-2">
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
