import Navbar from "../componentt/navbar";
import Footer from "../componentt/footer";
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
      <div style={{ paddingTop: "100px" }}>
        <div>
          <div
            id="indicators-carousel"
            class="relative w-75"
            data-carousel="static"
            style={{}}
          >
            <div class="relative h-56 z-10 overflow-hidden rounded-lg md:h-96">
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
            <div class="absolute z-10 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
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
              class="absolute top-0 start-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
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
              class="absolute top-0 end-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
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
        <div className="selamat">
          <p className="font-medium">
            <span className="manrope font-black" >
              Selamat datang di L'DAN Website
            </span>{" "}
            , tempat di mana Anda dapat menemukan berbagai informasi menarik dan
            inspiratif. Kami hadir untuk memberikan pengalaman online yang
            bermanfaat dan menghibur. Jelajahi setiap halaman dan nikmati konten
            yang kami sediakan. Terima kasih telah berkunjung!
          </p>
        </div>
        <div className="card"  style={{ padding: "30px" }} >
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
              className="img-card"
              src="https://img.wattpad.com/cover/225280182-512-k790958.jpg"
              alt=""
            />
            <a href="#">
              <h5
                style={{ paddingTop: "10px" }}
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                Rahasia Hutan Mistery
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Di dalam hutan belantara yang lebat terdapat sebuah desa kecil yang dikenal sebagai Desa Mistery....
            </p>
            <a
              href="horor-pt-1"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
              className="img-card"
              src="https://img.wattpad.com/cover/241969517-512-k276138.jpg"
              alt=""
            />
            <a href="#">
              <h5
                style={{ paddingTop: "10px" }}
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                The Pizza Palace Incident
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Harper Williams is just trying to get through high school, drawing
              as minimal attention as possible to herself. But it's kind of hard
              to avoid all the drama when you're a clumsy marvel crackhead who
              dumps pizza sauce and gooey sticky cheese all over the schools
              most popular douchebag, Ajax Carter.
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
              className="img-card"
              src="https://img.wattpad.com/cover/282245573-512-k521522.jpg"
              alt=""
            />
            <a href="#">
              <h5
                style={{ paddingTop: "10px" }}
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                MAFIA BOSS
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Noah's dad is the American Mafia leader and now Noah had to take
              over cause his dad is ill. Dixies dad is the Italy Mafia leader,
              and Noah and Dixie are supposed to get married but the end of a
              year (this story starts in Jan btw) cause of a deal their dad's
              had 19 years back
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="card" style={{ padding: "30px" }} >
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
              className="img-card"
              src="https://img.wattpad.com/cover/38931617-512-k662930.jpg"
              alt=""
            />
            <a href="#">
              <h5
                style={{ paddingTop: "10px" }}
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                Stand Alone
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              When young, 21 year old ex-marine McKenzie Taylor follows in her
              dead parents' footsteps it can mean nothing but bad news. It's
              make or break time for McKenzie as she takes over Operation
              Curahee; the operation she thought had been shut down years ago.
              With lies being told, secrets kept and sinister truths revealed;
              will she make it out alive?
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
              className="img-card"
              src="https://img.wattpad.com/cover/180210309-512-k458267.jpg"
              alt=""
            />
            <a href="#">
              <h5
                style={{ paddingTop: "10px" }}
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                Runner
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Lilly is on the run with the baby she carries inside her. Not able
              to bring herself to trust another man she prides herself on her
              independence. But a quiet biker is determined to show her that
              trusting and relying on a man is not always a weakness.
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
              className="img-card"
              src="https://img.wattpad.com/cover/358440913-512-k637411.jpg"
              alt=""
            />
            <a href="#">
              <h5
                style={{ paddingTop: "10px" }}
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                𝑭𝒐𝒓 𝒂 𝒎𝒐𝒎𝒆𝒏𝒕 - 𝑾𝒐𝒏𝒌𝒂...
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              "𝑾𝒉𝒂𝒕 𝒂𝒓𝒆 𝒚𝒐𝒖 𝒅𝒐𝒊𝒏𝒈?" "𝑴𝒂𝒌𝒊𝒏𝒈 𝒄𝒉𝒐𝒄𝒐𝒍𝒂𝒕𝒆, 𝒐𝒇 𝒄𝒐𝒖𝒓𝒔𝒆. 𝑯𝒐𝒘 𝒅𝒐 𝒚𝒐𝒖
              𝒍𝒊𝒌𝒆 𝒊𝒕? 𝑫𝒂𝒓𝒌? 𝑾𝒉𝒊𝒕𝒆? 𝑵𝒖𝒕𝒕𝒚? 𝑨𝒃𝒔𝒐𝒍𝒖𝒕𝒆𝒍𝒚 𝒊𝒏𝒔𝒂𝒏𝒆?"
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
       
      </div>
      <Footer/>
    </div>
  );
}
export default Home;
