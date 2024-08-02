import "./style.css";
import Group1000014993 from "../../../image/Group 1000014993.png";
import Group512869 from "../../../image/Group 512869.png";
const Bootcamp = () => {
  return (
    <div className="container">
      <div className="bootcamp-container">
        <img src={Group1000014993} />
        <div className="content">
          <h1>
            Bizi seçənlərin 1 nömrəli səbəbi
            <span>- Bootcamp sistemi</span>
          </h1>
          <p>
            Bizim fərqimiz Bootcamp məntiqi ilə işləməyimizdir. Bootcamplarımız
            uzun vaxt deyil qısa zamanda tələbələrə ən vacib və ən aktual
            tərəflərini öyrənərək qısa zamanda hazır işçi dərəcəsinə çatırlar.
            Tələbələr tədris zamanı real layihələr üzərində işlədikləri üçün
            topladıqları biliklər də lazımlı və aktual olur.
          </p>
          <b>
            <span>Təhsil modelimiz</span>
            <img src={Group512869} />
          </b>
        </div>
      </div>
    </div>
  );
};

export default Bootcamp;
