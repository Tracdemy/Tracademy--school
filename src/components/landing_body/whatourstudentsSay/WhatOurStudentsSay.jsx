import Arrow from "../../../assets/svg/blue_arrow.svg";
import StudentAppreciation from "../../../assets/images/student_appreciation.png";
import Star from "../../../components/star/Star";
import ArrowRight from "../../../assets/svg/blue_greater.svg";
import "./whatourstudentsay.css";

function WhatOurStudentsSay() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex gap-[60px] content ">
        <div className="testimonial items-center">
          <h4 className="text-[#F48C06] flex items-center gap-4">
            <span className="block border-b h-0.5 w-[40px] border-[#F48C06]"></span>
            TESTIMONIAL
          </h4>
          <h3 className="text-[#5956E9] text-[24px] font-bold">
            What Our Students Say
          </h3>
          <p className="text-[#8A90A2]">
            Barca Learn has got more than 500+ positive ratings from our users
            around Nigeria.{" "}
          </p>
          <p className="text-[#8A90A2]">
            Some of the students and teachers were greatly helped by the Barca
            Learn.
          </p>
          <p className="text-[#8A90A2]">
            Are you too? Please give your assessment
          </p>
          <div className="relative w-[300px] my-5">
            <button className="text-[#5956E9] px-14 py-2 rounded-3xl border-[#5956E9] border">
              Write your assessment
              <span className="rounded-full px-3 py-[17px] absolute top-0 right-[9px] border border-[#5956E9]">
                <img src={Arrow} alt="arrow" />
              </span>
            </button>
          </div>
        </div>
        <div className=" relative">
          <img src={StudentAppreciation} alt="study_girl" />
          <button
            className="px-4 py-4 rounded-full bg-white  border"
            style={{ top: "146px", right: "-14px", position: "absolute" }}
          >
            <img src={ArrowRight} alt="arrow-right" />
          </button>
          <div
            className="w-[400px] border px-5 py-3 rounded-md bg-white sadness"
            // style={{ position: "absolute", bottom: "-60px", right: "-177px" }}
          >
            <span className="border-l block h-[36px] w-9 border-[#FEBE2D] absolute top-0 left-0"></span>
            <div className="testimonial-box text-[16px]">
              <p className="text-[#5F5F7E]">
                "Thank you so much for your help. It's exactly what I've been
                looking for. You won't regret it. It really made learning really
                fun and something i looked forward to. Barca learn is exactly
                what every student needs"
              </p>
              <div className="flex items-center justify-between">
                <p>Marvelous</p>
                <div className="flex">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WhatOurStudentsSay;
