import Footer from "../componentt/footer";
import Navbar from "../componentt/navbar";

function Funnypt3() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="selamat" style={{ marginTop: "30px" }}>
          <h1 className="font-medium">
            <span className="manrope font-black" style={{ fontSize: "25px" }}>
            "Petualangan Konyol Budi: Mesin Teleportasi yang Bikin Tawa"
            </span>{" "}
          </h1>
          <div style={{ paddingTop: "30px" }}>
            <img
              style={{ borderRadius: "1000px",boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", }}
              src="https://i.pinimg.com/564x/43/3b/c8/433bc89f21b0b422ed80799ca336b5b1.jpg"
              alt=""
            />
          </div>
          <div className="cerita-horor-pt1">
            <p className="italic font-normal">
               Di sebuah desa kecil yang jauh dari hiruk-pikuk kota,
              hiduplah seorang pria bernama Budi.
             
              Budi dikenal oleh seluruh warga desa sebagai sosok yang penuh
              kecerobohan. Tidak ada hari tanpa kejutan ketika Budi berada di
              sekitar. Pada suatu pagi, Budi memutuskan untuk membuat penemuan
              besar yang akan mengubah desa mereka. 
              <br />
              <br />
              Dengan semangat tinggi, dia
              pergi ke ladang dan mengumpulkan segala macam barang bekas yang
              bisa dia temukan. Kardus, ban bekas, dan pipa PVC menjadi bahan
              utama proyek anehnya kali ini. Budi pun memulai proyek besar ini
              tanpa memberi tahu siapapun apa yang sedang dia rencanakan.
              Setelah beberapa hari berlalu, hasil karyanya terkuak: Budi
              berhasil menciptakan sejenis "mesin teleportasi" yang terbuat dari
              ember dan sepeda tua yang sudah tidak terpakai.
              <br />
              <br />
              Desa kecil mereka seketika menjadi heboh dengan penemuan ini.
              Namun, ada satu masalah kecil: setiap kali mesin teleportasi
              diaktifkan, Budi selalu berakhir di tempat yang salah. Dia mungkin
              berpikir dia akan tiba di toko kelontong, tapi akhirnya malah
              mendarat di tumpukan jerami tetangganya. Warga desa pun tak
              henti-hentinya tertawa melihat Budi terjatuh dan terkejut setiap
              kali dia menggunakan mesin teleportasinya. Meski Budi sering kali
              menjadi bahan tertawaan, tak seorang pun bisa menyangkal bahwa
              desa mereka menjadi lebih cerah dan hidup berkat kecerobohan Budi.
              <br />
              <br />
              Kehadirannya selalu membawa senyuman dan tawa ke wajah setiap
              warga desa. Setiap hari adalah petualangan baru, dan meskipun
              sering kali membuat kekacauan, Budi telah membuktikan bahwa
              kebahagiaan bisa datang dari hal-hal yang sederhana dan lucu.
              Dengan kepribadiannya yang unik, Budi telah menjadi tokoh yang
              dicintai oleh seluruh desa.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Funnypt3;