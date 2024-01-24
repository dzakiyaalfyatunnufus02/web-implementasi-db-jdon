import CaraouselHoror from "../componentt/caraouselHoror";
import Navbar from "../componentt/navbar";

function PageHoror() {
  return (
    <div>
      <Navbar />

      <div>
        <div>      <CaraouselHoror/>
</div>
        <div className="card" style={{ padding: "50px" }}>
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
              className="img-card"
              src="https://img.wattpad.com/cover/225280182-512-k790958.jpg"
              alt=""
            />
            <a href="/horor-pt-1">
              <h5
                style={{ paddingTop: "10px" }}
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                Rahasia Hutan Mistery
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Di dalam hutan belantara yang lebat terdapat sebuah desa kecil
              yang dikenal sebagai Desa Mistery....
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
              src="https://img.wattpad.com/19b7094c51539e0ae13e9f50dbd4dfd4730df60f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f494f3172484245366d6c624c45773d3d2d3835383634363031362e313630316438393132343438623761303639363931363630313333382e6a7067"
              alt=""
            />
            <a href="/horor-pt-2">
              <h5
                style={{ paddingTop: "10px" }}
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                Kisah Cahaya di Balik Bayang Vila Hantu
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Di tepi sebuah hutan lebat, terdapat sebuah vila tua yang dikenal
              sebagai Vila Hantu. Konon, vila ini telah ditinggalkan selama
              beberapa dekade karena cerita-cerita menyeramkan yang
              mengelilinginya.....
            </p>
            <a
              href="/horor-pt-2"
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
              src="https://i.pinimg.com/736x/79/ba/cb/79bacbc21ceda07c053939db2de28a5c.jpg"
              alt=""
            />
            <a href="/horor-pt-3">
              <h5
                style={{ paddingTop: "10px" }}
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                Rumah Pembantaian
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Di sebuah kota kecil, terdapat sebuah rumah tua yang ditinggali
              oleh seorang pria tua bernama John. John dikenal sebagai orang
              yang pendiam dan jarang berbicara dengan tetangganya.....
            </p>
            <a
              href="/horor-pt-3"
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
    </div>
  );
}
export default PageHoror;
