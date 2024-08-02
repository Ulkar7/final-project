import "./style.css";
import Foto1 from "../../../image/Foto1.png";
import Foto2 from "../../../image/Foto2.png";
import Foto3 from "../../../image/Foto3.png";
import Foto4 from "../../../image/Foto4.png";

const Mezun = () => {
  return (
    <div className="container mezun">
      <h1>
        <span>Uğurlu </span>
        <span style={{ color: "#005092" }}>Məzunlar</span>
      </h1>

      <div className="photos">
        <img src={Foto1} />
        <img src={Foto2} />
        <img src={Foto3} />
        <img src={Foto4} />
      </div>
      <div className="photos">
        <img src={Foto1} />
        <img src={Foto2} />
        <img src={Foto3} />
        <img src={Foto4} />
      </div>
    </div>
  );
};

export default Mezun;
