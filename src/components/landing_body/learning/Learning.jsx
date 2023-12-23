import Landing from "../../../assets/images/landing-image.png";
import ZigZag from "../../../assets/images/blue_zigzag.png";
import Button from "../../../components/button/Button";
import Line from "../../../assets/images/Line.png";
import LightDot from "../../../assets/images/light_dot.png";

function Learning() {
  return (
    <div className="flex justify-between items-center love">
      <div className="relative ml-[70px] w-[600px] mx-3 md:mx-0 good">
        <h1 className="font-bold say">
          Learning made fun and easy with{" "}
          <span className="text-[#5956E9]"> Barca</span>
          <span className="flex flex-col gap-2 text-[#5956E9]">
            Learn
            <img src={ZigZag} alt="zig-zag" className="max-w-[180px]" />
          </span>
        </h1>
        <p>
          Put the fun back in learning with the Barca learning platform where we
          focus on interactive and gamified approach to learning
        </p>
        <div className="flex gap-3 my-3">
          <Button
            color="white"
            background="[#5956E9]"
            textcolor="[#5956E9]"
            bgColor="[white]"
          >
            Get Started
          </Button>
          <Button
            textcolor="white"
            bgColor="[#5956E9]"
            color="[#5956E9]"
            background="white"
          >
            Explore Subjects
          </Button>
        </div>
        <div className="flex justify-between items-center w-[300px]">
          <div className="flex flex-col">
            <h2 className="font-bold text-[20px] xl:text-[30px]">293+</h2>
            <p>Courses</p>
          </div>
          <span>
            <img src={Line} alt="line" />
          </span>
          <div className="flex flex-col">
            {" "}
            <h2 className="font-bold text-[20px] xl:text-[30px]">20+</h2>
            <p>Instructors</p>
          </div>
          <span>
            <img src={Line} alt="line" />
          </span>
          <div className="flex flex-col">
            <h2 className="font-bold text-[20px] xl:text-[30px]">1K+</h2>
            <p>Using the app</p>
          </div>
        </div>
        <img
          src={LightDot}
          alt="light-dot"
          className="absolute top-[54px] xl:top-[227px] left-[-67px]"
        />
      </div>
      <div>
        <img src={Landing} alt="landing" />
      </div>
    </div>
  );
}
export default Learning;
