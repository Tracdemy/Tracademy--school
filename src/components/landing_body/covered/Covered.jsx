import BoxComponent from "../../../components/box_component/BoxComponent";
import "./covered.css";

function Covered() {
  return (
    <div className="container mx-auto px-4 ">
      <div className="my-20">
        <div className="lg:w-[800px] my-5">
          <h2 className="font-bold  text-[35px] covered ">
            We're got you Covered no matter your level
          </h2>
          <p>
            Our lessons are categorised by grades to ensure every learner learns
            what is appropriate to their level
          </p>
        </div>
        <div className="flex justify-between my-5 flex-col md:flex-row gap-4">
          <BoxComponent
            title="Primary"
            image="./img/levels.png"
            paragraph="Get immersive and gamified lessons covering your different subjects ranging from Mathematics, English & Sciences for a perfect academic head-start."
          />
          <BoxComponent
            title="Secondary"
            image="./img/levels.png"
            paragraph="Build on your problem solving capabilities with easy to understand lessons in Mathematics, Science, Arts, Commerce etc. making difficult to grasp concepts easy to grasp."
          />
          <BoxComponent
            title="Tertiary"
            image="./img/levels.png"
            paragraph="Master difficult concepts with well explained videos that improve your understanding in general tertiary courses and other courses of your choosing. there’s no respite in learning."
          />
        </div>
      </div>
    </div>
  );
}
export default Covered;
