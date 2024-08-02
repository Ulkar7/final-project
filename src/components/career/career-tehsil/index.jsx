import "./style.css";
import Image1 from "../../../image/image1.png";
import Online from "../../../image/online.png";
import Ofline from "../../../image/ofline.png";
import Ferdi from "../../../image/ferdi.png";
const CareerTehsil = () => {
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
  const data2 = [
    {
      image: Online,
      header: " Təqdimat bacarığı",
      content:
        "Tələbələrə düzgün təqdimat etmə və təqdimat zamanı düzgün danışıq qaydaları öyrədilir. Bu tələbələrdə təqdim etmə bacarığına artırır.",
    },

    {
      image: Ofline,
      header: " İş axtarma dəstəyi",
      content:
        "Tələbələrimizə özlərinə uyğun vakansiyaları tapmaqda və müraciət etmə qaydalarını izah edirik ki, iş tapmaqda çətinlik yaranmasın.",
    },

    {
      image: Ferdi,
      header: " Müsahibəyə hazırlıq",
      content:
        "Tələbələrimizə fərdi şəkildə yanaşaraq onları müsahibə zamanı yaranacaq bütün məsələlərə düzgün cavab verməyini təmin edirik.",
    },
  ];
  return (
    <div className="container education">
      <h1 style={{ marginBottom: "12px" }}>
        <span>Karyera</span> <span style={{ color: "#005092" }}> Mərkəzi</span>
      </h1>
      <p style={{ fontFamily: "sans-serif" }}>
        Karyera Mərkəzi məzunların potensialına uyğun işlə təmin olunması üçün
        yaradılan bir bölmədir. Arzuladıqları peşə üzrə işləmək istəyən
        tələbələr karyera yolunda irəliləyərkən qarşılaşdıqları çətinliklərlə və
        eyni zamanda iş axtarışı məsələləri ilə bağlı ehtiyac duyulduqda Karyera
        Mərkəzindən dəstək ala bilərlər.
      </p>

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
        {data2.map((item, index) => (
          <div key={index}>
            <img src={item.image} />
            <h4>{item.header}</h4>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerTehsil;
