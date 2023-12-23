import BoxComponent from "../../../components/box_component/BoxComponent";

function Necessary() {
  return (
    <div className="md:container md:mx-auto mx-5">
      <div className="md:w-[500px] my-20">
        <h3 className="font-bold text-[30px]">
          All the necessary resources to thrive academically.
        </h3>
        <p>
          In-depth, yet easy-to-understand explanations & lessons, Homework
          Help, Live Classes, Mock Exams, Practice Tests & Quizzes, Learning
          Reports.
        </p>
      </div>
      <div className="flex justify-between flex-col md:flex-row gap-4">
        <BoxComponent
          title="Video Library"
          image="./img/youtube_video.png"
          paragraph="Get more with our well curated video library. Packed with interactive classes and updated curriculum, teaching you what matters"
        />
        <BoxComponent
          title="Self Paced Learning"
          image="./img/self_paced.png"
          paragraph="Get more with our well curated video library. Packed with interactive classes and updated curriculum, teaching you what matters"
        />
        <BoxComponent
          title="Learning Community"
          image="./img/learning_community.png"
          paragraph="Get more with our well curated video library. Packed with interactive classes and updated curriculum, teaching you what matters"
        />
      </div>
    </div>
  );
}
export default Necessary;
