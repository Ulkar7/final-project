import "./style.css";

const BlogButtons = () => {
  return (
    <>
      <h1 className="container blog-button-header">
        <span>Bizim </span> <span>blog</span>
      </h1>
      <div
        className="container training-buttons"
        style={{ display: "flex", width: "90%", flexWrap: "wrap" }}
      >
        <button>Hamısı</button>
        <button>Dizayn</button>
        <button>Proqramlaşdırma</button>
        <button>Mobil</button>
        <button>Data</button>
      </div>
    </>
  );
};

export default BlogButtons;
