import "./style.css";
import Instructor from "../../../image/instructor.png";

const UiUxInstructor = () => {
  return (
    <div className="container instructors">
      <h1>
        <span>İnstruktorları </span>
        <span>tanı</span>
      </h1>
      <div className="instructor">
        <img src={Instructor} />
        <button>UX/UI İnstruktor</button>
        <h4>Təlimçinin adı</h4>
      </div>
    </div>
  );
};

export default UiUxInstructor;
