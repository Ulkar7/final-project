import "./style.css";
import Rectangle7 from "../../../image/rectangle7.png";
import Image1 from "../../../image/image1.png";
import Online from "../../../image/online.png";
import Ofline from "../../../image/ofline.png";
import Ferdi from "../../../image/ferdi.png";

const Tehsil = () => {
  const data = [
    {
      header: "Praktiki tədris mühiti",
      content: `Tədris etdiyimiz bütün sahələrdə tədris boyunca tələbələri praktika
        etməyə yönəldirik. Bizim tədris planımızda praktika çöx önəmli yer
        tutur. Biz bunula tələbə real iş mühitində çətinlik çəkməməsi üçün
        çalışırıq.`,
    },

    {
      header: "Bootcamp məntiqi",
      content: `Bootcamplarımız uzun vaxt deyil qısa zamanda tələbələrə ən vacib və
            ən aktual tərəflərini öyrənərək qısa zamanda hazır işçi dərəcəsinə
            çatırlar. Tələbələr tədris zamanı real layihələr üzərində
            işlədikləri üçün topladıqları biliklər də lazımlı və aktual olur.`,
    },

    {
      header: "Mentor sistemi",
      content: `Bizim mentorlar vasitəsilə istənilən mövzuda mentor dəstəyini
            göstəririk. Mentorlar bu sahədə müəyyən bilik və bacarıqlarını
            inkişaf etdirmək üçün lazımdır. Mentorlarla əlavə görüşlərin təşkili
            mümkündür.`,
    },

    {
      header: "Final Layihə",
      content: `Tədris müddəti boyunca öyrəndiklərini və praktika etdiklərini artıq
            dəstək olmadan tələbələr hazırlayır və təqdim etmə mərasimi vaxtı
            bunu nümayiş etdirmiş olur. Final layihə sənin real gücünü göstərən
            layihədir.`,
    },
  ];
  return (
    <div className="container education">
      <header>
        <img src={Rectangle7} />
        <p>
          Software Village təhsil modelində tələbələr nəzəri biliklər öyrənir və
          bunu təcrübə keçdiyi müddətdə təkrar istifadə etməsi həmin biliklərin
          daha yadda qalan və faydalı hala gətirir. Bununla da dərslər zamanı
          tələbə daha effektiv qavrama ilə qarşılaşır. Təcrübə keçdiyi müddətdə
          real iş mühitinə görə hazırlanan proseslərlə onlar karyeralarına tam
          hazır olurlar. Sonda tələbələr yekun layihə işi təqdim edərək məzun
          olurlar. Final layihə zamanı tələbələr real praktika etməklə uğurlu
          karyera üçün ilk addımları atırlar. Bizimlə karyerasında yeniliklər
          edən tələbələr qısa müddətdə qarşılığını görür.
        </p>
      </header>

      <h1>
        <span>Tədris</span> <span style={{ color: "#005092" }}>Modelimiz</span>
      </h1>

      <div className="image-ol">
        <ol>
          {data.map((item, index) => (
            <li key={index}>
              <h5>{item.header}</h5>
              <p>{item.content}</p>
            </li>
          ))}
        </ol>
        <img src={Image1} />
      </div>

      <h1>
        <span>Tədris </span>
        <span style={{ color: "#005092" }}>Formaları</span>
      </h1>

      <div className="education-forms">
        <div>
          <img src={Online} />
          <h4>Online</h4>
          <p>
            Tədris boyunca tələbə istədiyi məkandan dərslərə qoşula bilir və
            rahatlıqla suallarını verir. Burada ən böyük üstünlük dərslərin
            record olunmasıdır.
          </p>
        </div>
        <div>
          <img src={Ofline} />
          <h4>Oflyan</h4>
          <p>
            Oflayn rejimdə tələbələr dərsləri qrup işi və fərdi tapşırıqlar
            edərək daha yaxşı mənimsəyir. Bu metodla tələbə evə getdikdə
            recordlara baxa bilir.
          </p>
        </div>

        <div>
          <img src={Ferdi} />
          <h4>Fərdi</h4>
          <p>
            Bu tədris formasında məllimlə birə bir təmasda olduğu üçün məllim və
            tələbənin daha çox vaxtı və daha çox praktika etmə şansı olur
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tehsil;
