import "./style.css";
import Group1000014994 from "../../../image/Group 1000014994.png";
import Maskgroup from "../../../image/Mask group.png";
import Maskgroup1 from "../../../image/Mask group (1).png";
import Maskgroup2 from "../../../image/Mask group (2).png";
import Maskgroup3 from "../../../image/Mask group (3).png";
import { useNavigate } from "react-router";
const BlogBlogs = () => {
  const navigate = useNavigate();
  const items = [
    { button: "Proqramlaşdırma", image: Maskgroup },
    { button: "Mobil", image: Maskgroup1 },
    { button: "UX Dizayn", image: Maskgroup2 },
    { button: "UI Dizayn", image: Maskgroup3 },
  ];
  return (
    <div className="container blog-blogs">
      <div className="blog-container">
        {items.map((item, index) => (
          <div
            className="blog-item"
            onClick={() => navigate(`/blogs/${index}`)}
            key={index}
          >
            <img src={item.image} />
            <button>{item.button}</button>
            <p className="content-main">
              Mobil proqramlaşdırmada gələcək tendensiyalar
            </p>
            <p className="content-footer">
              <span>Sentyabr 3, 2023</span>
              <img src={Group1000014994} />
            </p>
          </div>
        ))}
      </div>
      <div className="blog-container">
        {items.map((item, index) => (
          <div
            className="blog-item"
            onClick={() => navigate(`/blogs/${index}`)}
            key={index}
          >
            <img src={item.image} />
            <button>{item.button}</button>
            <p className="content-main">
              Mobil proqramlaşdırmada gələcək tendensiyalar
            </p>
            <p className="content-footer">
              <span>Sentyabr 3, 2023</span>
              <img src={Group1000014994} />
            </p>
          </div>
        ))}
      </div>
      <div className="blog-container">
        {items.map((item, index) => (
          <div
            className="blog-item"
            onClick={() => navigate(`/blogs/${index}`)}
            key={index}
          >
            <img src={item.image} />
            <button>{item.button}</button>
            <p className="content-main">
              Mobil proqramlaşdırmada gələcək tendensiyalar
            </p>
            <p className="content-footer">
              <span>Sentyabr 3, 2023</span>
              <img src={Group1000014994} />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogBlogs;
