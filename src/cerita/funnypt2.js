import { useEffect, useState } from "react";
import Footer from "../componentt/footer";
import Navbar from "../componentt/navbar";
import axios from "axios";

function Funnypt2() {
  const [isiCerita, setCerita] = useState([]);
  const getIsiCerita = async () => {
    try {
      const respon = await axios.get("http://localhost:1234/isiCerita");
      const allIsiCerita = respon.data;
      setCerita(allIsiCerita);
    }catch (error){
      console.error("error fetching data", error);
    }
  }

  useEffect(() => {
    getIsiCerita();
  }, []);
  return (
    <div>
      <Navbar />
      <div>
        <div className="selamat" style={{ marginTop: "30px" }}>
          <h1 className="font-medium">
            <span className="manrope font-black" style={{ fontSize: "25px" }}>
            "Petualangan Konyol Budi: Kandang yang Tak Terduga".
            </span>{" "}
          </h1>
          <div style={{ paddingTop: "30px" }}>
            <img
              style={{ borderRadius: "1000px",boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)" }}
              src="https://i.pinimg.com/736x/18/62/a3/1862a38645c06e8d1706939e7f57f873.jpg"
              alt=""
            />
          </div>
          <div className="cerita-horor-pt1">
            <p className="italic font-normal">
             {isiCerita && isiCerita.length > 0
             ? isiCerita.map((cerita, index) => (
              <span key={index}>{cerita.funny2}</span>
             ))
            : "loading..."}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Funnypt2;
