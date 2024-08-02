import "./style.css";
import Fb from "../../../image/fb.png";
import In from "../../../image/in.png";
import Wp from "../../../image/wp.png";
import Ig from "../../../image/ig.png";

const IndividualBlogButtons = () => {
  return (
    <div className="container individual-blog-buttons">
      <button>
        <img src={Fb} />
        <span>Paylaş</span>
      </button>
      <button>
        <img src={In} />
        <span>Paylaş</span>
      </button>
      <button>
        <img src={Wp} />
        <span>Paylaş</span>
      </button>
      <button>
        <img src={Ig} />
        <span>Paylaş</span>
      </button>
    </div>
  );
};

export default IndividualBlogButtons;
