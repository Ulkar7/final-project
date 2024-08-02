/* eslint-disable react/prop-types */
import "./style.css";

const SuccessPopUp = ({ popup2, setPopup2 }) => {
  return (
    <>
      {popup2 ? (
        <div className="success-popup">
          <header>
            <button
              onClick={() => {
                setPopup2(false);
              }}
            >
              X
            </button>
          </header>
          <div className="popup-content" style={{ textAlign: "center" }}>
            <h1>Sorğunuz müvəffəqiyyətlə göndərildi</h1>
            <p>
              Əməkdaşlarımız qısa müddətdə sizinlə əlaqə saxlayacaq. Təşəkkür
              edirik.
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SuccessPopUp;
