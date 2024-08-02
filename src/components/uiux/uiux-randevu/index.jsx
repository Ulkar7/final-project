import { useState } from "react";
import "./style.css";
import UiUxPopUp from "../uiux-popup";
import SuccessPopUp from "../success-popup";

const UiUxRandevu = () => {
  const [popup, setPopup] = useState(false);
  const [popup2, setPopup2] = useState(false);

  return (
    <>
      <div className="container randevu">
        <p>
          Proqramda iştirak etmək istəyirsən? Əla! Ətraflı məlumat əldə etməklə
          bağlı randevu almaq üçün
        </p>
        <button onClick={() => setPopup(true)}>Randevu al</button>
      </div>
      <UiUxPopUp
        popup={popup}
        setPopup={setPopup}
        setPopup2={setPopup2}
      />
      <SuccessPopUp
        popup2={popup2}
        setPopup2={setPopup2}
      />
    </>
  );
};

export default UiUxRandevu;
