import "./style.css";

const Form = () => {
  return (
    <div
      className="container"
      style={{
        backgroundColor: "#F9F9FC",
        marginTop: "64px",
        paddingTop: "40px",
        paddingBottom: "40px",
      }}
    >
      <div className="form-container">
        <div className="content">
          <h1>
            <span>Bizdən</span>
            <span>soruş</span>
          </h1>
          <p>
            Haqqında sualınız olan tədris sahəsi ilə bağlı sorğunuzu bizə
            göndərin, bizimlə əlaqə saxlayaq.
          </p>
          <p>
            Bizimlə görüş təyin et, dərslərimiz, müəllimlərimiz və tədris
            prosesimizlə şəxsən tanış ol.
          </p>
        </div>
        <div className="form">
          <input placeholder="Ad Soyad" type="text" name="" id="" />
          <input placeholder="+994 __ ___ __ __" type="text" name="" id="" />
          <input placeholder="E-mail" type="text" name="" id="" />
          <div className="buttons">
            <div>
              <button>Proqramlaşdırma</button>
              <button>Data Analitikası</button>
              <button>Mobil</button>
            </div>
            <div>
              <button>Qrafik Dizayn</button>
              <button>UX/UI Dizayn</button>
            </div>
          </div>
          <div className="sorgu">
            <button>Sorğu göndər</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
