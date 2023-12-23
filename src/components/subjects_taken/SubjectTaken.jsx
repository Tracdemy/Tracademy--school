import ArrowLeft from "../../assets/svg/arrowleft.svg";
import ArrowRight from "../../assets/svg/bluearrow_right.svg";
import SubjectComponent from "./SubjectComponent";

function SubjectTaken() {
  return (
    <div>
      <div className="flex justify-between mt-3">
        <h3 className="text-[#3527D6] font-bold my-3">
          Subjects you're taking{" "}
        </h3>
        <div className="flex gap-2">
          <img src={ArrowLeft} alt="arrow-left" className="disabled" />
          <img src={ArrowRight} alt="arrow-right" />
        </div>
      </div>
      <div className="flex gap-3 justify-between">
        <SubjectComponent
          realScore={57}
          score={100 - 57}
          subjectName="English"
          color1="#B3DCF8"
        />
        <SubjectComponent
          realScore={63}
          score={100 - 63}
          subjectName="Maths"
          color1="#D5CEF1"
        />
        <SubjectComponent
          realScore={80}
          score={100 - 80}
          subjectName="Social Studies"
          color1="#D8EEBD"
        />
      </div>
    </div>
  );
}
export default SubjectTaken;
