import "./teacherdetails.css";
import SharedImage1 from "../../assets/images/sharedimage1.png";
import SharedImage2 from "../../assets/images/sharedimage2.png";
import SharedImage3 from "../../assets/images/sharedimage3.png";
import SharedImage4 from "../../assets/images/sharedimage4.png";
import FileShared from "../../assets/svg/file_svg.svg";
import FolderShared from "../../assets/svg/folder_svg.svg";
import { useContext } from "react";
import { TracademyContext } from "../../context/TracademyContext";

function TeachersDetails() {
  const { teachersInfo } = useContext(TracademyContext);
  //   console.log(teachersInfo);
  return (
    <div className="py-3 px-3 rounded shadow about_teacher">
      <div className="flex flex-col justify-center items-center my-5">
        <img
          src={`${teachersInfo.avatar}`}
          alt="teacher_image"
          className="rounded-[40px] teacher_image "
        />
        <div>
          <h3 className="text-[#3527D6] font-bold ">{teachersInfo.name}</h3>
          <p className="text-[12px] text-center">Teacher</p>
        </div>
      </div>
      <div>
        <p className="text-[16px]">
          {teachersInfo.name} is the class Teacher for {teachersInfo.class} and
          Social Studies teacher for Jss 1 -Jss2. She also works closely with
          the guidance counsellor to make sure students are emotionally and
          mentally fit for school.
        </p>
      </div>
      <div>
        <div className="flex justify-between text-[12px] my-5 font-bold">
          <p>Shared Media</p>
          <p className="offset">See all</p>
        </div>
        <div className="mb-4">
          <div className="flex gap-2 my-2">
            <img src={SharedImage1} alt="sharedimage" className="image_width" />
            <img src={SharedImage2} alt="sharedimage" className="image_width" />
          </div>
          <div className="flex gap-2">
            <img src={SharedImage3} alt="sharedimage" className="image_width" />
            <img src={SharedImage4} alt="sharedimage" className="image_width" />
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between text-[12px] my-3 font-bold">
          <p>Shared files</p>
          <p className="offset">See all</p>
        </div>
        <div className="bg-[#3527D6] text-[white] flex gap-4 text-[12px] my-5 rounded-md py-3 px-1">
          <div className=" box_shadow">
            <img src={FileShared} alt="" />
          </div>

          <div>
            <p>PTA Meeting Invitation letter</p>
            <p>1.5 kb</p>
          </div>
        </div>
        <div className="bg-[#3527D6] text-[white] flex gap-4 text-[12px] my-5 rounded-md py-3 px-1">
          <div className="box_shadow">
            <img src={FolderShared} alt="" />
          </div>
          <div>
            <p>2021/2022 session school fees</p>
            <p>1.5 kb</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TeachersDetails;
