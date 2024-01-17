import { useContext } from "react";
import { TracademyContext } from "../../context/TracademyContext";
import "./teachersubject.css";

function TeacherSubject(props) {
  const { teachers, handleTeacher } = useContext(TracademyContext);
  const {showDialog} = props
  return (
    <div className="shadow border rounded-md px-2 py-3" style={{width: showDialog===false?"600px":""}}>
      <table>
        <tr>
          <td></td>
          <td className="font-bold">Name</td>
          <td className="font-bold">Subject</td>
        </tr>
        <tbody>
          {teachers.map((teacher, i) => (
            <tr
              key={i}
              onClick={() => handleTeacher(teacher)}
              className="cursor-pointer teacher_height "
            >
              <td>
                <img
                  src={teacher.avatar}
                  alt="teacher_image"
                  className="rounded-[40px]"
                />
              </td>
              <td>{teacher.name}</td>
              <td>{teacher.subject}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default TeacherSubject;
