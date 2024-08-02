/* eslint-disable react/prop-types */
import "./style.css";
import Group512869 from "../../../image/Group 512869.png";
import Group1000014994 from "../../../image/Group 1000014994.png";

const Blog = ({ items }) => {
  return (
    <div className="container">
      <div className="blog">
        <h1>
          <span>Blog </span>
          <span>məqalələrimiz</span>
        </h1>
        <b>
          <span>Məqalələrimiz</span>
          <img src={Group512869} />
        </b>

        <div className="blog-container">
          {items.map((item, index) => (
            <div className="blog-item" key={index}>
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
    </div>
  );
};

export default Blog;
