import Navbar from "../componentt/navbar";
import img1 from "../aset/1.jpg";
import img2 from "../aset/2.jpg";
import img3 from "../aset/3.jpg";
import img4 from "../aset/4.jpg";
import img5 from "../aset/5.jpg";
import undraw1 from "../aset/undraw_newspaper_re_syf5 (1).svg";
import "../css/home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: "100px",}}>
        <div>
          <div
            id="indicators-carousel"
            class="relative w-75"
            data-carousel="static"
            style={{}}
          >
            <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
              <div
                class="hidden duration-700 ease-in-out"
                data-carousel-item="active"
              >
                <img
                  src="https://printondemand.co.id/wp-content/uploads/2014/10/07.jpg"
                  class="absolute block w-75 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img
                  src="https://asset.kompas.com/crops/CwJZr2u0BCNrYIGpPq4MnXdhCDA=/0x0:0x0/750x500/data/photo/buku/6353d24ec1d54.jpg"
                  class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img
                  src="https://literasinusantara.com/wp-content/uploads/2020/09/Membuat-Cover-Buku-e1601272599120.jpg"
                  class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img
                  src="https://i0.wp.com/blog.sribu.com/wp-content/uploads/2018/10/Cover-Novel.jpg?fit=850%2C550&ssl=1"
                  class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img
                  src="https://i2.wp.com/only-print.com/wp-content/uploads/2020/07/pexels-photo-3847621.jpeg?fit=1880%2C1253&ssl=1"
                  class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
            </div>
            <div class="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="true"
                aria-label="Slide 1"
                data-carousel-slide-to="0"
              ></button>
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 2"
                data-carousel-slide-to="1"
              ></button>
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 3"
                data-carousel-slide-to="2"
              ></button>
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 4"
                data-carousel-slide-to="3"
              ></button>
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 5"
                data-carousel-slide-to="4"
              ></button>
            </div>
            <button
              type="button"
              class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span class="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span class="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
       <div></div>
      </div>
    </div>
  );
}
export default Home;
