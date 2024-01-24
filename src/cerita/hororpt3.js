import Footer from "../componentt/footer";
import Navbar from "../componentt/navbar";

function Horopt3() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="selamat" style={{ marginTop: "30px" }}>
          <h1 className="font-medium">
            <span className="manrope font-black" style={{ fontSize: "25px" }}>
            "Rumah Pembantaian: Kisah Kelam Pembunuhan Berantai di Kota Kecil"
            </span>{" "}
          </h1>
          <div style={{ paddingTop: "30px" }}>
            <img
              style={{ borderRadius: "1000px" }}
              src="https://i.pinimg.com/564x/3f/af/bf/3fafbf7b0b32e14051b2a0fe0d586301.jpg"
              alt=""
            />
          </div>
          <div className="cerita-horor-pt1">
            <p className="italic font-normal">
              Di sebuah kota kecil, terdapat sebuah rumah tua yang ditinggali
              oleh seorang pria tua bernama John. John dikenal sebagai orang
              yang pendiam dan jarang berbicara dengan tetangganya. Namun,
              beberapa waktu yang lalu, terdengar kabar bahwa John telah
              melakukan pembunuhan berantai di rumahnya.
              <br />
              <br />
               Beberapa orang yang
              mencoba memasuki rumah John tidak pernah kembali lagi. Kabarnya,
              John masih berada di dalam rumah dan menunggu korban berikutnya.
              Suatu malam, sekelompok remaja yang penasaran memutuskan untuk
              memasuki rumah John. Mereka berjalan-jalan di sekitar rumah dan
              mencari jalan masuk. Setelah beberapa saat, mereka menemukan pintu
              belakang yang terbuka. Mereka masuk ke dalam rumah dan mulai
              menjelajahi setiap ruangan. Tiba-tiba, mereka mendengar suara
              langkah kaki yang semakin dekat. Mereka bersembunyi di balik pintu
              dan melihat seorang pria tua yang membawa pisau besar. 
              <br />
              <br />
              Pria itu
              berjalan menuju ruangan sebelah dan membunuh seseorang yang tidak
              diketahui. Remaja-remaja itu ketakutan dan mencoba untuk keluar
              dari rumah, tetapi pintu sudah terkunci dari luar. Mereka mencoba
              mencari jalan keluar lain, tetapi semakin lama semakin sulit.
              Mereka terus dikejar oleh John dan akhirnya satu per satu dibunuh
              dengan kejam. Hanya ada satu orang yang berhasil selamat dari
              pembantaian itu. Dia melarikan diri dari rumah dan melaporkan
              kejadian itu kepada polisi. Polisi datang ke rumah John dan
              menemukan mayat-mayat remaja yang telah dibunuh. John sendiri
              tidak pernah ditemukan dan kabarnya masih berkeliaran di kota
              kecil itu. Hingga kini, rumah John masih menjadi tempat yang
              angker dan dihindari oleh penduduk setempat.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Horopt3;
