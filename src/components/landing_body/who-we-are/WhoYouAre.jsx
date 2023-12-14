import Button from "../../../components/button/Button";
import StudyingGirl from "../../../assets/images/studying_girl.png";
import Students from "../../../assets/images/students.png";
import LovetoLearn from "../../../assets/images/lovetolearn.png";
import "./whoweare.css";

function WhoYouAre() {
  return (
    <div className="container mx-auto ">
      <div className="flex items-center justify-between flex-col md:flex-row my-20 gap-4">
        <div className="flex gap-6">
          <div className="flex flex-col gap-5">
            <img src={Students} alt="students" />
            <img src={LovetoLearn} alt="lovetolearn" />
          </div>
          <div>
            <img src={StudyingGirl} alt="study Girl" />
          </div>
        </div>
        <div className="barca">
          <h1 className="my-3 font-bold text-[40px]">Who We Are at Barca</h1>
          <p className="my-3">
            We at Barca believe that learning should be fun and interactive,
            that’s why we’ve teamed up with the best heads in the education
            industry to bring a much needed change in learning.
          </p>
          <Button
            background="[white]"
            color="[#5956E9]"
            bgColor="[#5956E9]"
            textcolor="[white]"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
export default WhoYouAre;
