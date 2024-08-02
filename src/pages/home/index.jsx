import dizayn from "../../image/dizayn.png";
import program from "../../image/program.png";
import circum_mobile from "../../image/circum_mobile-1.png";
import data from "../../image/data.png";
import Frame10 from "../../image/Frame 10.png";
import Frame11 from "../../image/Frame 11.png";
import Frame12 from "../../image/Frame 12.png";
import Frame13 from "../../image/Frame 13.png";
import Maskgroup from "../../image/Mask group.png";
import Maskgroup1 from "../../image/Mask group (1).png";
import Maskgroup2 from "../../image/Mask group (2).png";
import Maskgroup3 from "../../image/Mask group (3).png";
import auto from "../../image/auto.png";
import digiral from "../../image/digiral.png";
import git from "../../image/git.png";
import microsoft from "../../image/microsoft.png";
import redhat from "../../image/redhat.png";
import comp from "../../image/comp.png";
import BodyPart from "../../components/home/body-part";
import Groups from "../../components/home/groups";
import Kurslar from "../../components/home/kurslar";
import Popular from "../../components/home/popular";
import Bootcamp from "../../components/home/bootcampSystem";
import Students from "../../components/home/mezunlar";
import Blog from "../../components/home/blog";
import Emekdas from "../../components/home/emekdaslar";

const Home = () => {
  const popularItems = [
    {
      image: dizayn,
      header: "Dizayn",
      footer: "2 Kurs",
    },
    {
      image: program,
      header: "Proqramlaşdırma",
      footer: "3 Kurs",
    },
    {
      image: circum_mobile,
      header: "Mobil",
      footer: "2 Kurs",
    },
    {
      image: data,
      header: "Data Analitikası",
      footer: "2 Kurs",
    },
  ];

  const studentItems = [Frame10, Frame11, Frame12, Frame13];

  const blogItems = [
    { button: "Proqramlaşdırma", image: Maskgroup },
    { button: "Mobil", image: Maskgroup1 },
    { button: "UX Dizayn", image: Maskgroup2 },
    { button: "UI Dizayn", image: Maskgroup3 },
  ];

  const emekdaslarItem = [auto, digiral, git, microsoft, comp, redhat];
  return (
    <>
      <BodyPart />
      <Groups />
      <Kurslar />
      <Popular items={popularItems} />
      <Bootcamp />
      <Students items={studentItems} />
      <Blog items={blogItems} />
      <Emekdas items={emekdaslarItem} />
    </>
  );
};

export default Home;
