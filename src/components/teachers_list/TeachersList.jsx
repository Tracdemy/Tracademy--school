import { useContext } from "react";
import { TracademyContext } from "../../context/TracademyContext";
import "./teachers.css";

function TeachersList() {
  const { teachers } = useContext(TracademyContext);
  return (
    <div className=" shadow rounded-md border px-5 py-3 ">
      <div className="custom-scrollbar overflow-scroll overflow-x-hidden w-[400px] h-[390px] change_width">
        <h2 className="font-bold">Teachers List</h2>
        <div className="text-[12px]">
          <table>
            <thead>
              <tr>
                <td></td>
                <td className="font-bold">Name</td>
                <td className="font-bold">Class</td>
                <td className="font-bold">email</td>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher, i) => (
                <tr key={i}>
                  <td>
                    {/* <img src="/teachers avatar/ajilore.png" alt="teacher" /> */}
                    <img
                      src={teacher.avatar}
                      alt="avatar_image"
                      className="rounded-[40px]"
                    />
                  </td>
                  <td>{teacher.name}</td>
                  <td>{teacher.class}</td>
                  <td>{teacher.email}</td>
                  <td className="mx-3">
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default TeachersList;
