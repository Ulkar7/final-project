import "./style.css";
import Group37568 from "../../../image/Group 37568.png";

const BodyPart = () => {
  return (
    <div className="body-part container">
      <div className="left-part">
        <div className="future">
          <p>
            <b>
              Gələcəyin peşələrini <br />
              öyrənməyə indi başla
            </b>
          </p>
        </div>

        <div className="small-paragraph">
          <p>
            Ekspert müəllimlər tərəfindən tədris olunan müxtəlif fənləri
            <br />
            əhatə edən geniş kursları kəşf edin.
          </p>
        </div>

        <div className="buttons">
          <button className="button-blue">Tədris sahələri</button>
          <button className="button-white">Onlayn təqdimat</button>
        </div>
      </div>

      <div className="girl-image">
        <img src={Group37568} />
      </div>
    </div>
  );
};

export default BodyPart;
