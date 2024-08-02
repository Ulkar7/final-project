import "./style.css";
import dizayn from "../../../image/dizayn.png";
import program from "../../../image/program.png";
import circum_mobile from "../../../image/circum_mobile-1.png";
import data from "../../../image/data.png";
const TrainingPopular = () => {
  const popularItems = [
    {
      image: dizayn,
      header: "Dizayn",
    },
    {
      image: program,
      header: "Proqramlaşdırma",
    },
    {
      image: circum_mobile,
      header: "Mobil",
    },
    {
      image: data,
      header: "Data Analitikası",
    },
  ];
  return (
    <div
      style={{
        paddingTop: "40px",
        paddingBottom: "40px",
        marginTop: "80px",
      }}
      className="container"
    >
      <div className="training-popular-container">
        <h1>
          <span>Popular</span>
          <span>kateqoriyalar</span>
        </h1>

        <div className="training-popular-items">
          {popularItems.map((item, index) => (
            <div key={index} className="training-popular-item">
              <img src={item.image} />
              <span>{item.header}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingPopular;
