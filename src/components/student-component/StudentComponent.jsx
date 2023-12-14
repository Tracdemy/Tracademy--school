import { useContext } from "react";
import { TracademyContext } from "../../context/TracademyContext";
import Minus from "../../assets/svg/minus.svg";
import Plus from "../../assets/svg/plus.svg";
// import Avatar from "../../assets/avatars/nancy-dube.png";

function StudentComponent() {
  const { students, handleSubmit } = useContext(TracademyContext);
  //   console.log(students[0].avatar);
  return (
    <div className="border px-4 rounded-xl py-4 h-[760px]">
      <table>
        <thead>
          <tr className="font-bold">
            <td>SS1C</td>
            <td>Name</td>
            <td>ID</td>
            <td>Year</td>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr
              key={index}
              onClick={() => handleSubmit(student)}
              className="cursor-pointer"
            >
              <td>
                <img src={student.avatar} alt="avatars" />
              </td>
              <td>{student.name}</td>
              <td>{532984 + student.id}</td>
              <td>{student.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between my-4">
        <div className="flex items-center gap-2 mx-2 cursor-pointer">
          <button className="rounded-full bg-[#3527D6] text-[#D8EEBD] py-2 px-2">
            <img src={Plus} alt="plus" />
          </button>
          <h4 className="font-bold">Add Student</h4>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <button className="rounded-full bg-[#3527D6] text-[#D8EEBD] py-[14px] px-2">
            <img src={Minus} alt="minus" />
          </button>
          <h4 className="font-bold">Remove Student</h4>
        </div>
      </div>
    </div>
  );
}
export default StudentComponent;
