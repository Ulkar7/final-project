import MainSlide from "../../components/about/main-slide";
import Rectangle2 from "../../image/rectangle2.png";
import Rectangle3 from "../../image/rectangle3.png";
import Rectangle4 from "../../image/rectangle4.png";
import Rectangle5 from "../../image/rectangle5.png";

const About = () => {
  const whoWeAreInstructor = [
    {
      image: Rectangle2,
      header: "Təcrübəli instruktorlar",
      content:
        "Tədris edəcək instruktorlarımız həm yerli həm də xarici bazarda iş prosesində iştirak edir. Bu sahənin yeniliklərini bilir və tətbiq edir. Onlar sizi sırf bazar üçün tələb olunan bilik və bacarıqlarla təmin edir.",
      flex: 0,
    },
    {
      image: Rectangle3,
      header: "Tədris metodumuz",
      content:
        "Bütün tədris sahələrində istifadə olunan metodlar yerli və ya xarici bazar üçün tətbiq oluna bilər. Bu tədris metodunda əsas hədəf tələbələri təkcə yerli şirkətlərə deyil həm də xarici bazar üçün uyğun təhsili verməkdir. Tədris metodumuzda öyrədilən hər bir detal sizin gələcək üçün uğurlu bir işçi olmağınız üçündür.",
      flex: 1,
    },
    {
      image: Rectangle4,
      header: "Karyera mərkəzi",
      content:
        "Tədrisi bitirdikdən sonra sizinlə daim əlaqəda olan karyera mərkəzimizlə sizləri iş sferasına hazırlamaq və uyğun vakansiyaları sizlərə yönəltməkdir. Bu mərkəz sizlərə iş mühitinə hazırlamaqla qalmayıb işdə yaranan problemlərdə necə reaksiya verməli olduğunu sizlərə öyrədir. Karyera mərkəzində sizləri uğurlu namizəd üçün hər tərəfli hazır edir.",
      flex: 0,
    },
    {
      image: Rectangle5,
      header: "Mentor sistemi",
      content:
        "Tədris zamanı keçirilən mövzuları daha yaxşı anlamağınız və tətbiq etməyiniz üçün mentorlarımız sizlərə dəstək olacaq. Öz təcrübələrini sizlərə aşılayaraq sizin real iş mühitində qarşılaşacağınız hadisələrdə və proseslərdə necə davranmalı olduğunuzu bildirirlər. Real iş mühitində ilkin etməli olduğunuz tapşırıqlarda necə işlər ortaya qoymalı olduğunuzu sizlərə göstərəcəkdir. Bununla bizdə davamlı inkişaf olur.",
      flex: 1,
    },
  ];
  return (
    <div>
      <MainSlide items={whoWeAreInstructor} />
    </div>
  );
};

export default About;
