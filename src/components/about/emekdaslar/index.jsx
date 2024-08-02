import "./style.css";

const Emekdas = () => {
  return (
    <div className="workers container">
      <h1>
        <span>Bizim </span> <span style={{ color: "#005092" }}>Əməkdaşlar</span>
      </h1>

      {[1, 2, 3, 4, 5, 6].map((index) => (
        <div key={index} className="lorem">
          <div className="background"></div>
          <div className="lorem-content">
            <h5>Lorem İpsum</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              eleifend fermentum neque non efficitur. Praesent auctor molestie
              posuere. Fusce eros ligula, eleifend eget ligula a, congue
              vestibulum nunc
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Emekdas;
