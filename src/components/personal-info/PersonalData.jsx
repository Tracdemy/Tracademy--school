import { useContext } from "react";
import { TracademyContext } from "../../context/TracademyContext";
function PersonalData() {
  const { personalInfo } = useContext(TracademyContext);
  return (
    <div>
      <div className="border px-4 py-4 w-[300px] rounded-xl ">
        <h2 className="text-[#3527D6] font-bold text-center text-[25px]">
          Personal Information
        </h2>
        <div className="flex flex-col items-center my-3">
          <img
            src={personalInfo.avatar}
            alt="avatar"
            // className="w-[58px] h-[58px]"
          />
          <h3 className="font-bold text-[#3527D6]">{personalInfo.name}</h3>
          <p className="text-[12px]">Stud ID: {532984 + personalInfo.id}</p>
        </div>
        <div>
          <h3 className="text-[#3527D6]">Student Details</h3>
          <table className="text-[14px] border-spacing-2">
            <tbody>
              <tr className="h-[50px]">
                <td>Class</td>
                <td>:</td>
                <td>{personalInfo.class}</td>
              </tr>
              <tr className="h-[50px]">
                <td>Department</td>
                <td>:</td>
                <td>{personalInfo.department}</td>
              </tr>
              <tr className="h-[50px]">
                <td>Gender</td>
                <td>:</td>
                <td>{personalInfo.gender}</td>
              </tr>
              <tr className="h-[50px]">
                <td>Mobile</td>
                <td>:</td>
                <td>{personalInfo.mobile}</td>
              </tr>
              <tr className="h-[50px]">
                <td>Email</td>
                <td>:</td>
                <td>{personalInfo.email}</td>
              </tr>
              <tr className="h-[50px]">
                <td>Date of Birth</td>
                <td>:</td>
                <td>{personalInfo.dateofbirth}</td>
              </tr>
              <tr className="h-[50px]">
                <td>Address</td>
                <td>:</td>
                <td>{personalInfo.address}</td>
              </tr>
              <tr className="h-[50px]">
                <td>Hostel</td>
                <td>:</td>
                <td>{personalInfo.hostel}</td>
              </tr>
              <tr className="h-[50px]">
                <td>Club</td>
                <td>:</td>
                <td>{personalInfo.club}</td>
              </tr>
              <tr className="h-[50px]">
                <td>Next of Kin</td>
                <td>:</td>
                <td>{personalInfo.nextofkin}</td>
              </tr>
              <tr className="h-[50px]">
                <td>Contact</td>
                <td>:</td>
                <td>{personalInfo.contact}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="my-4">
          <h2 className="text-[#3527D6]">About Student</h2>
          <p className="text-[14px]">
            Hello, My name is {personalInfo.name}, a {personalInfo.class}{" "}
            student at RHS. I love history, arts and reading{" "}
          </p>
        </div>
        <div>
          <h2 className="text-[#3527D6]">Achievement</h2>
          <ul className="text-[12px]">
            <li>
              <p className="border-l border-black bg-black rounded-full w-2 h-2 inline-block mr-2"></p>
              Represented Jet club in inter-school competition
            </li>

            <li>
              <p className="border-l border-black bg-black rounded-full inline-block w-2 h-2 mr-2"></p>
              Neatest {personalInfo.gender === "Male" ? "boy" : "girl"} in{" "}
              {personalInfo.class}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default PersonalData;
