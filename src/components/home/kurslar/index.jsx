/* eslint-disable react/prop-types */
import "./style.css";
import Group512869 from "../../../image/Group 512869.png";
import komputer from "../../../image/komputer.png";
import Polygon4 from "../../../image/Polygon 4.png";
import Ellipse1202 from "../../../image/Ellipse 1202.png";
import { useNavigate } from "react-router";

const Kurslar = ({
  header1 = "Ən",
  header2 = "məhşur kurslarımız",
  icon = true,
}) => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="courses">
        <div className="sumtext" style={{ marginBottom: icon ? "" : "40px" }}>
          <span className="famcourse">{header1}</span>
          <span className="blue-text">{header2}</span>
        </div>
        {icon && (
          <div className="search-courses">
            <span>Kursları araşdırın</span>
            <img src={Group512869} />
          </div>
        )}

        <div className="all-courses">
          <div className="course">
            <div className="image">
              <img src={komputer} />
            </div>
            <div className="content">
              <div className="start-date">
                <div className="polygon">
                  <img src={Polygon4} />
                </div>
                <span className="date">Başlama tarixi</span>
              </div>
              <div className="content-header">UX/UI Dizayn Bootcamp</div>
              <footer>
                <div className="footer-content">
                  <div className="image-icon">
                    <img className="ellipsephoto" src={Ellipse1202} />
                  </div>
                  <div className="text">
                    <p className="instrucName">İnstruktor</p>
                    <p>adı</p>
                  </div>
                </div>
                <button onClick={() => navigate("/uiux")}>
                  Proqramlaşdırma
                </button>
              </footer>
            </div>
          </div>
          <div className="course">
            <div className="image">
              <img src={komputer} />
            </div>
            <div className="content">
              <div className="start-date">
                <div className="polygon">
                  <img src={Polygon4} />
                </div>
                <span className="date">Başlama tarixi</span>
              </div>
              <div className="content-header">Front-End Bootcamp</div>
              <footer>
                <div className="footer-content">
                  <div className="image-icon">
                    <img className="ellipsephoto" src={Ellipse1202} />
                  </div>
                  <div className="text">
                    <p className="instrucName">İnstruktor</p>
                    <p>adı</p>
                  </div>
                </div>
                <button>Proqramlaşdırma</button>
              </footer>
            </div>
          </div>
          <div className="course">
            <div className="image">
              <img src={komputer} />
            </div>
            <div className="content">
              <div className="start-date">
                <div className="polygon">
                  <img src={Polygon4} />
                </div>
                <span className="date">Başlama tarixi</span>
              </div>
              <div className="content-header">Front-End Bootcamp</div>
              <footer>
                <div className="footer-content">
                  <div className="image-icon">
                    <img className="ellipsephoto" src={Ellipse1202} />
                  </div>
                  <div className="text">
                    <p className="instrucName">İnstruktor</p>
                    <p>adı</p>
                  </div>
                </div>
                <button>Proqramlaşdırma</button>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kurslar;
