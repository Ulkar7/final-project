import "./style.css";
import myImage from "../../image/logo10.png";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
const Header = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);
  return (
    <header className="header">
      <div
        className="container"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>
          <img
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
            src={myImage}
            alt="auto"
          />
        </div>
        <div className={`position-absolute ${menu ? "visible" : ""} ${menu}`}>
          <div>
            <div className="burger-menu" onClick={() => setMenu(!menu)}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <ul>
              <li
                onClick={() => {
                  navigate("/about");
                  setMenu(false);
                }}
              >
                Haqqımızda
              </li>
              <li
                onClick={() => {
                  navigate("/training");
                  setMenu(false);
                }}
              >
                Tədris
              </li>
              <li
                onClick={() => {
                  navigate("/career");
                  setMenu(false);
                }}
              >
                Karyera
              </li>
              <li
                onClick={() => {
                  navigate("/blog");
                  setMenu(false);
                }}
              >
                Blog
              </li>
            </ul>
          </div>
          <div>
            <button>Bizimlə Əlaqə</button>
          </div>
        </div>

        <div
          className="burger-menu"
          style={{ display: menu ? "none" : "flex" }}
          onClick={() => setMenu(!menu)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
