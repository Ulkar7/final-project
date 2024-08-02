import GraduationCap from "../../../image/GraduationCap.png";
import user3 from "../../../image/user3.png";
import VideoCamera from "../../../image/VideoCamera.png";
import UsersThree from "../../../image/UsersThree.png";
import "./style.css";
const Groups = () => {
  return (
    <div className="container">
      <div className="groups">
        <div className="group">
          <div className="icon">
            <img src={GraduationCap} />
          </div>
          <div className="group-text">
            <b className="number">300</b>
            <p className="instructor">Instructor</p>
          </div>
        </div>

        <div className="group">
          <div className="icon">
            <img src={UsersThree} />
          </div>
          <div className="group-text">
            <b className="number">20,000+</b>
            <p className="instructor">Student</p>
          </div>
        </div>

        <div className="group">
          <div className="icon">
            <img src={user3} />
          </div>
          <div className="group-text">
            <b className="number">10,000+</b>
            <p className="instructor">Video</p>
          </div>
        </div>

        <div className="group">
          <div className="icon">
            <img src={VideoCamera} />
          </div>
          <div className="group-text">
            <b className="number">1,00,000+</b>
            <p className="instructor">User’s</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Groups;
