import "./style.css";
import White from "../../../image/white.svg";
import Maskgroup from "../../../image/Mask group.png";

const IndividualBlogPopular = () => {
  return (
    <div
      className="container blog-popular "
      style={{ paddingBottom: "40px", paddingTop: "40px" }}
    >
      <h1>
        <span>Populyar</span>
        <span>bloglar</span>
      </h1>
      <div className="blog-container">
        {[1, 2, 3, 4].map((item, index) => (
          <div className="blog-item" key={index}>
            <img src={Maskgroup} />
            <button>Proqramlaşdırma</button>
            <p className="content-main">
              Mobil proqramlaşdırmada gələcək tendensiyalar
            </p>
            <p className="content-footer">
              <span style={{ color: "white" }}>Sentyabr 3, 2023</span>
              <img src={White} />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndividualBlogPopular;
