/* eslint-disable react/prop-types */
import "./style.css";
import Rectangle from "../../../image/Rectangle 8743.png";
import Pro from "../../../image/pro.png";
import Educa from "../../../image/educa.png";
const WhoWeAre = ({ items }) => {
  return (
    <>
      <div className="container who-we-are">
        <header>
          <img src={Rectangle} />
          <p>
            Software Village olaraq yarandığımız andan etibarən tədris etdiyimiz
            sahələrə yeniliklər gətiririk. Güclü təhsil modelimizlə tələbələrə
            ilk gündən iş həyatına hazırlayırıq. Bizim əsas düşüncəmiz tələblərə
            cavab verəcək mütəxəssislər yetişdirməkdir. Ailəmizdəki insanlar
            daim öz üzərində işləyən, yeniliklərə fokuslanan və tələbələrini
            mükəmməl vəziyyət üçün hazırlayan insanlardan təşkil olunub.
            Tələbələri tam düşünən və onları sadəcə öyrətməyə fokuslanaraq
            illərdir iləriləyirik. Bugünə qədər bizi seçənlər bizimlə olmaqdan
            məmnun və müsbət vəziyyətdədirlər.
          </p>
        </header>

        <div className="advertising">
          <div>
            <img src={Pro} />
            <h4>Produktiv ortam</h4>
            <p>
              Dərsdən əlavə mentorluq sistemindən tutmuş, brainstorm zonalarına
              qədər – bütün detallar vaxtını layiqincə yatırım etmənə
              fokuslanıb.
            </p>
          </div>
          <div>
            <img src={Educa} />
            <h4>Xüsusi tədris</h4>
            <p>
              Məqsəd səni yalnız lokal bazara hazırlamaq deyil. Tədris
              materialları ilə əldə edəcəyin biliklər və təcrübəli mütəxəssislər
              hətta qlobal imkanlar belə özü səni tapacaq.
            </p>
          </div>
        </div>
        <h1>
          <span>Bizim </span>
          <span style={{ color: "#005092" }}>Fərqimiz</span>
        </h1>
        {items.map((item, index) => (
          <div
            key={index}
            className={`instructor ${item.flex ? "reverse" : ""}`}
          >
            <img src={item.image} />

            <div>
              <h1>{item.header}</h1>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WhoWeAre;
