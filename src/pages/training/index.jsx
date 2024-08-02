import TrainingButtons from "../../components/training/training-buttons";
import TrainingItems from "../../components/training/training-items";
import TrainingPopular from "../../components/training/training-popular";
import TrainingSlider from "../../components/training/training-slider";

const Training = () => {
  return (
    <>
      <TrainingSlider />
      <TrainingPopular />
      <TrainingButtons />
      <TrainingItems />
    </>
  );
};

export default Training;
