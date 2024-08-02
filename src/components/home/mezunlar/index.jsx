/* eslint-disable react/prop-types */
import "./style.css";
import White from "../../../image/white.png";

const Students = ({ items }) => {
  return (
    <div
      className="container"
      style={{ backgroundColor: "#64B9FF", borderRadius: "0 0 100px 0" }}
    >
      <div className="students">
        <h1>
          <span>Məzunlarımız </span>
          <span>rəyi</span>
        </h1>
        <p>
          <span>Məzunlarımız</span>
          <img src={White} />
        </p>
        <div className="student-container">
          {items.map((item, index) => (
            <img key={index} src={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Students;
