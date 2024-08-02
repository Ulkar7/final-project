import "./style.css";
import Blue from "../../../image/blue.png";

const TrainingItems = () => {
  return (
    <div className="container training-items">
      {[1, 2, 3, 4].map((item, index) => (
        <div key={index} className="training-item">
          <div className="background"></div>
          <div className="content">
            <h5>Lorem Ipsum</h5>
            <h6>Qrup</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              eleifend fermentum neque non efficitur. Praesent auctor molestie
              posuere. Fusce eros ligula, eleifend eget ligula a, congue
              vestibulum nunc Praesent auctor eros ligula, eleifend eget ligula
              a, auctor
            </p>
            <b>
              <span>Detallar</span>
              <img src={Blue} />
            </b>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrainingItems;
