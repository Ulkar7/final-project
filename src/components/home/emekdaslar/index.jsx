/* eslint-disable react/prop-types */
import "./style.css";

const Emekdas = ({ items }) => {
  return (
    <div className="container">
      <div className="emekdaslar">
        <h1>
          <span>Bizim</span>
          <span>əməkdaşlar</span>
        </h1>
        <div className="emekdaslar-container">
          {items.map((item, index) => (
            <img key={index} src={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Emekdas;
