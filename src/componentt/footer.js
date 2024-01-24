import "../css/footer.css"
import logo from "../aset/OIG.40gntGga11NT2DMc-removebg-preview.png";

function Footer() {
  return (
    <footer class="bg-gray-400 rounded-lg shadow dark:bg-gray-800">
      <div id="footer-padding" class="w-full mx-auto max-w-screen-xl md:flex md:items-center md:justify-between">
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} class="h-8" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            L'DAN
          </span>
        </a>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-black dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
