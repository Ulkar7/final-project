import Kurslar from "../../components/home/kurslar";
import UiUxSubjects from "../../components/uiux-subjects";
import UiuxDates from "../../components/uiux/uiux-dates";
import UiUxInstructor from "../../components/uiux/uiux-instructor";
import UiUxNumbers from "../../components/uiux/uiux-numbers";
import UiUxRandevu from "../../components/uiux/uiux-randevu";
import UiuxSlider from "../../components/uiux/uiux-slider";
import WhyUiUx from "../../components/uiux/why-uiux";

const Uiux = () => {
  return (
    <>
      <UiuxSlider />
      <UiuxDates />
      <WhyUiUx />
      <UiUxNumbers />
      <UiUxSubjects />
      <UiUxInstructor />
      <UiUxRandevu />
      <Kurslar icon={false} header1="Digər" header2="kurslarımız" />
    </>
  );
};

export default Uiux;
