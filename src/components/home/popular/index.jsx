/* eslint-disable react/prop-types */
import "./style.css";

const Popular = ({ items }) => {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #f9f9fc 0%, #64b9ff 100%)",
        paddingTop: "40px",
        paddingBottom: "40px",
        marginTop: "80px",
      }}
      className="container"
    >
      <div className="popular-container">
        <h1>
          <span>Popular</span>
          <span>kateqoriyalar</span>
        </h1>

        <div className="popular-items">
          {items.map((item, index) => (
            <div key={index} className="popular-item">
              <img src={item.image} />
              <span>{item.header}</span>
              <span>{item.footer}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
