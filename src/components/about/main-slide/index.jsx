/* eslint-disable react/prop-types */
import "./style.css";
import Soft from "../../../image/sooft-removebg-preview 1 (1).png";
import { useState } from "react";
import WhoWeAre from "../who-we-are";
import Tehsil from "../tehsil";
import Emekdas from "../emekdaslar";
import Mezun from "../mezunlar";

const MainSlide = ({ items }) => {
  const [menuNumber, setMenuNumber] = useState(1);

  return (
    <>
      <div className="main-slide">
        <img src={Soft} />
      </div>
      <div className="main-slide-buttons container">
        <button onClick={() => setMenuNumber(1)}>Biz Kimik</button>
        <button onClick={() => setMenuNumber(2)}>Təhsil modeli</button>
        <button onClick={() => setMenuNumber(3)}>Əməkdaşlar</button>
        <button onClick={() => setMenuNumber(4)}>Məzunlar</button>
      </div>
      {menuNumber == 1 && <WhoWeAre items={items} />}
      {menuNumber == 2 && <Tehsil />}
      {menuNumber == 3 && <Emekdas />}
      {menuNumber == 4 && <Mezun />}
    </>
  );
};

export default MainSlide;
