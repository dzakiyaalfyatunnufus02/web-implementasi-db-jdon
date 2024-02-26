import "../css/home.css"

function GalleryHoror() {
  return (
    <div id="gallery" class="relative w-full z-10" data-carousel="slide">
      <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://cdns.klimg.com/resized/800x400/p/headline/6-rekomendasi-bacaan-wattpad-yang-popul-96c583.jpg"
            class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt=""
          />
        </div>
        <div
          class="hidden duration-700 ease-in-out"
          data-carousel-item="active"
        >
          <img
            src="https://www.semilir.co/wp-content/uploads/2022/10/KapanLagi.comm_.jpg"
            class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt=""
          />
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://lensa44.com/wp-content/uploads/2023/03/13.jpg"
            class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt=""
          />
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://mmc.tirto.id/image/otf/500x0/2023/09/15/the-sexy-doctor-is-mine-vidio_ratio-16x9.jpg"
            class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt=""
          />
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://cdn.idntimes.com/content-images/community/2023/02/2023-02-23-14-40-20-240-da8d38c789b465218f295612fb813f37-c66aeea003a050c3538ea7ff4f38a87e_600x400.jpg"
            class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt=""
          />
        </div>
      </div>
      <button
        type="button"
        class="absolute top-0 start-0 z-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
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
        class="absolute top-0 end-0 z-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
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
  );
}
export default GalleryHoror;
