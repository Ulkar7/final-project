import Accordion from "../uiux/accordion";
import "./style.css";

const UiUxSubjects = () => {
  const items = [
    {
      header: "Mövzu 1",
      contents: [
        "Alt mövzular",
        "Alt mövzular",
        "Alt mövzular",
        "Alt mövzular",
        "Alt mövzular",
      ],
    },
    {
      header: "Mövzu 2",
      contents: [
        "Alt mövzular",
        "Alt mövzular",
        "Alt mövzular",
        "Alt mövzular",
        "Alt mövzular",
      ],
    },
    {
      header: "Mövzu 3",
      contents: [
        "Alt mövzular",
        "Alt mövzular",
        "Alt mövzular",
        "Alt mövzular",
        "Alt mövzular",
      ],
    },
    {
      header: "Mövzu 4",
      contents: [
        "Alt mövzular",
        "Alt mövzular",
        "Alt mövzular",
        "Alt mövzular",
        "Alt mövzular",
      ],
    },
    {
      header: "Mövzu 5",
      contents: [
        "Alt mövzular",
        "Alt mövzular",
        "Alt mövzular",
        "Alt mövzular",
        "Alt mövzular",
      ],
    },
    {
      header: "Mövzu 6",
      contents: [
        "Alt mövzular",
        "Alt mövzular",
        "Alt mövzular",
        "Alt mövzular",
        "Alt mövzular",
      ],
    },
    {
      header: "Mövzu 7",
      contents: [
        "Alt mövzular",
        "Alt mövzular",
        "Alt mövzular",
        "Alt mövzular",
        "Alt mövzular",
      ],
    },
  ];

  return (
    <div className="container uiux-subejct">
      <h1>
        <span>Tədris </span>
        <span>mövzularıları</span>
      </h1>
      <ul>
        {items.map((item, index) => (
          <Accordion key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default UiUxSubjects;
