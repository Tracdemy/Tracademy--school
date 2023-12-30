import RecommendedContainer from "./RecommendedContainer";
import ArrowRight from "../../assets/svg/bluearrow_right.svg";
import ArrowLeft from "../../assets/svg/arrowleft.svg";

function Recommended() {
  return (
    <div>
      <div className="flex justify-between mt-3">
        <h3 className="text-[#3527D6] font-bold">Recommended for you </h3>
        <div className="flex gap-2">
          <img src={ArrowLeft} alt="arrow-left" className="disabled" />
          <img src={ArrowRight} alt="arrow-right" />
        </div>
      </div>
      <div className="flex  overflow-x-auto justify-between gap-5 w-full">
        <RecommendedContainer
          image="./img/recommendation1.png"
          details="Update your health records"
        />
        <RecommendedContainer
          image="./img/recommendation2.png"
          details="Fill out ‘22/’23 session survey"
        />
        <RecommendedContainer
          image="./img/recommendation3.png"
          details="Volunteer for Autism day"
        />
      </div>
    </div>
  );
}
export default Recommended;
