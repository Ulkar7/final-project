import "./style.css";
import Calendar from "../../../image/calendar.png";
import Time from "../../../image/time.png";
import UserPlus from "../../../image/userplus.png";
import Education from "../../../image/education.png";

const UiuxDates = () => {
  const items = [
    { icon: Calendar, content: "Son tarix" },
    { icon: Time, content: "Təhsil müddəti" },
    { icon: UserPlus, content: "Boş yerlərin sayı" },
    { icon: Education, content: "Təhsil formatı" },
  ];
  return (
    <>
      <div key={items} className=" container white-place ">
        {items.map((item, index) => (
          <button key={index}>
            <img src={item.icon} />
            <span>{item.content}</span>
          </button>
        ))}
      </div>
    </>
  );
};

export default UiuxDates;
