import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
// import Swal from "sweetalert2";
import Footer from "../componentt/footer";
import Navbar from "../componentt/navbar";
import "../css/cerita.css"
import swal from "sweetalert";
import { useHistory } from "react-router-dom";

function Funnypt1() {
  // let navigate = useNavigate();
  const history = useHistory();
  const [isiCerita, setIsiCerita] = useState([]);
  const getIsiCerita = async () => {
    try {
      const response = await axios.get("http://localhost:1234/isiCerita"); // Ganti URL dengan URL sesuai server Anda
      const allIsiCerita = response.data;
      setIsiCerita(allIsiCerita);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const logout = () => {
    localStorage.clear();
    history.push("/page-funny"); // Use history.push for navigation
  };

  useEffect(() => {
    getIsiCerita();
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <div className="selamat" style={{ marginTop: "30px" }}>
        <button className="logout-btn" onClick={logout}>
            Logout
          </button>
          <h1 className="font-medium">
            <span className="manrope font-black" style={{ fontSize: "25px" }}>
              "Kukuruyuk: Ayam Ajaib yang Meraih Candaan Dunia"
            </span>{" "}
          </h1>
          <div style={{ paddingTop: "30px" }}>
            <img
              style={{
                borderRadius: "1000px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
              }}
              src="https://i.pinimg.com/564x/61/0a/f0/610af04119104c896c37ab0a44bbcf2a.jpg"
              alt=""
            />
          </div>
          <div className="cerita-horor-pt1">
            <p className="italic font-normal">
              {isiCerita && isiCerita.length > 0
                ? isiCerita.map((cerita, index) => (
                    <span key={index}>{cerita.funny1}</span>
                  ))
                : "Loading..."}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Funnypt1;
