import { useContext } from "react";
import { TracademyContext } from "../../context/TracademyContext";
import Student from "../../assets/teachers avatar/biola.png";

function PersonalInformation() {
  const { personalInfo } = useContext(TracademyContext);
  if (!personalInfo) {
    return <p>Please select a person</p>;
  }
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
              <tr className="h-[40px]">
                <td>Class</td>
                <td>:</td>
                <td>{personalInfo.class}</td>
              </tr>
              <tr>
                <td>Department</td>
                <td>:</td>
                <td>{personalInfo.department}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>:</td>
                <td>{personalInfo.gender}</td>
              </tr>
              <tr>
                <td>Mobile</td>
                <td>:</td>
                <td>{personalInfo.mobile}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>:</td>
                <td>{personalInfo.email}</td>
              </tr>
              <tr>
                <td>Date of Birth</td>
                <td>:</td>
                <td>{personalInfo.dateofbirth}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>:</td>
                <td>{personalInfo.address}</td>
              </tr>
              <tr>
                <td>Hostel</td>
                <td>:</td>
                <td>{personalInfo.hostel}</td>
              </tr>
              <tr>
                <td>Club</td>
                <td>:</td>
                <td>{personalInfo.club}</td>
              </tr>
              <tr>
                <td>Next of Kin</td>
                <td>:</td>
                <td>{personalInfo.nextofkin}</td>
              </tr>
              <tr>
                <td>Contact</td>
                <td>:</td>
                <td>{personalInfo.contact}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="my-4">
          <h2 className="text-[#3527D6]">About Student</h2>
          <p className="text-[12px]">
            Hello, My name is {personalInfo.name}, a {personalInfo.class}{" "}
            student at RHS. I love history, arts and reading{" "}
          </p>
        </div>
        <div>
          <h2 className="text-[#3527D6]">Achievement</h2>
          <ul className="text-[12px]">
            <li>
              <span className="border-l border-black bg-black rounded-full w-2 h-2 inline-block mr-2"></span>
              Represented Jet club in inter-school competition
            </li>

            <li>
              <span className="border-l border-black bg-black rounded-full inline-block w-2 h-2 mr-2"></span>
              Neatest {personalInfo.gender === "Male" ? "boy" : "girl"} in{" "}
              {personalInfo.class}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default PersonalInformation;
