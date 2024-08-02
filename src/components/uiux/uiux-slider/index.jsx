import "./style.css";
import Rectangle21 from "../../../image/rectangle21.png";

const UiuxSlider = () => {
  return (
    <div
      className="container uiux-bootcamp"
      style={{ paddingTop: "40px", paddingBottom: "40px" }}
    >
      <div>
        <h1>UX/UI Dizayn Bootcamp</h1>
        <p>
          21-ci əsrin ən perspektivli sahələrindən biri kimi göstərilən UX&UI
          dizayn sahəsinə olan ehtiyac günü gündən ölkəmizdə də artmaqdadır.
          Sahənin mütəxəssisləri təkcə peşəkar dizayner yox, həm də yaxşı
          araşdırmaçıdır. UX&UI mütəxəssisləri əsas istehlakçı davranışlarını
          analiz edərək, istifadəçi təcrübəsini yaxşılaşdıran həllər yaradır.
          Belə olduqda insanların həyatını asanlaşdırmaqla yanaşı, biznes
          təyinatlı rəqəmsal məhsulların inkişaf etdirilməsinə imkan verir.
        </p>
        <button>Kursa qoşul</button>
      </div>
      <img src={Rectangle21} />
    </div>
  );
};

export default UiuxSlider;
