import "./style.css";
import One from "../../../image/one.png";
import Two from "../../../image/two.png";
import Three from "../../../image/three.png";

const UiUxNumbers = () => {
  const items = [
    {
      image: One,
      header: "Yerli ve qlobal şirkətlərdə iş elanları",
      content: (
        <>
          Yerli və xarici şirkətlərdə ən çox işçi axtaranlardan biridir. Toplam
          &nbsp;<b>25 min</b>&nbsp; üstündə olan vakansiyalara
        </>
      ),
    },

    {
      image: Two,
      header: "Yüksək və artan gəlirli iş sahəsi",
      content: (
        <>
          Ölkəmizdə minimum 700 azn, Qlobalda isə &nbsp;<b>10 min $</b>&nbsp;
          başlayan maaş. Bu sahə gələcəkdə maaş baxımından daha çox qazanc əldə
          edəcək sahədir.
        </>
      ),
    },

    {
      image: Three,
      header: "Hər yerdə oflayn, onlayn və freelancer işləmək",
      content: (
        <>
          İndi şirkətlər istifadəçi mərkəzli işləyir. Bununlada bizlər &nbsp;
          <b>
            bank, dövlət müəssisələri, agentliklər, startaplar, IT şirkətlərində
          </b>
          &nbsp; işləyə bilərik.
        </>
      ),
    },
  ];
  return (
    <div className="container uiux-numbers">
      {items.map((item, index) => (
        <div key={index}>
          <img src={item.image} />
          <h2>{item.header}</h2>
          <p>{item.content} </p>
        </div>
      ))}
    </div>
  );
};

export default UiUxNumbers;
