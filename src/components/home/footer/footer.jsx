import "./style.css";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="footer">
          <div className="footer-container">
            <div className="unvan">
              <b>Ünvan</b>
              <p>Ünvanımız</p>
              <div className="elaqe">
                <b>Əlaqə</b>
                <p>Telefon nömrəsi</p>
              </div>
            </div>
            <div className="haqqimizda">
              <b>Haqqımızda</b>
              <p>Biz kimik </p>
              <p>Əməkdaşlarımız</p>
              <p>Məzunlarımız</p>
              <p>Təhsil Modeli</p>
              <p>İnstruktorlar</p>
            </div>
            <div className="kurslar">
              <b>Kurslar</b>
              <p>Front-End </p>
              <p>Data Analitikası</p>
              <p>Mobil</p>
              <p>Flutter</p>
              <p>UX/UI</p>
              <p>Dizayn</p>
              <p>Back End</p>
              <p>C#</p>
              <p>Mobil Kotlin</p>
              <p>Back End Java</p>
              <p>Qrafik Dizayn</p>
            </div>
            <div className="sosial-media">
              <b>Sosial Media</b>
              <p>Instagram</p>
              <p>Linkedin</p>
              <p>Facebook</p>
              <p>Behance</p>
            </div>
          </div>
        </div>
      </div>

      <div className="blue-footer">
        {/* <img src={Bluetext} /> */}© 2023 Bütün hüquqları Software Village
        tərəfindən qorunur
      </div>
    </>
  );
};

export default Footer;
