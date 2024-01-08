import BluePen from "../../assets/svg/blue_pen.svg";
import BluePlus from "../../assets/svg/blue_plus.svg";
import AddResultTable from "../addresult_table/AddResultTable";
import { TracademyContext } from "../../context/TracademyContext";
import { useContext, useRef } from "react";
import "./addstudent.css";

function AddStudent() {
  const inputRef = useRef(null);
  const {
    name,
    setName,
    email,
    setEmail,
    address,
    setAddress,
    dateofbirth,
    setDateofbirth,
    gender,
    setGender,
    id,
    setId,
    mobile,
    setMobile,
    contact,
    setContact,
    hostel,
    setHostel,
    studentClass,
    setStudentClass,
    year,
    setYear,
    department,
    setDepartment,
    club,
    setClub,
    relationship,
    setRelationship,
    nextofkin,
    setNextOfkin,
    subjectOffered,
    setSubjectOffered,
    handleAddStudent,
    avatar,
    // setAvatar,
    handleSelectedImage,
    setShowAdd,
  } = useContext(TracademyContext);

  // console.log(handleAddStudent)

  return (
    <div className="flex justify-center mb-4 bg-white h-screen overflow-y-auto increase_height">
      <div className=" rounded-lg w-[950px] px-4 py-1">
        <div>
          <div className="flex justify-between items-center">
            <h1 className="text-[#3527D6] font-bold">Add Student</h1>
            <button onClick={() => setShowAdd(false)}>❌</button>
          </div>
          <form
            onSubmit={handleAddStudent}
            className="flex justify-between item"
          >
            <div>
              <p>Add student personal information and scores</p>
              <div>
                <p>Profile Photo</p>
                <div className="flex justify-center py-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleSelectedImage}
                    style={{ display: "none" }}
                    ref={inputRef}
                  />
                  <button
                    type="button"
                    className={`relative  ${
                      avatar ? null : "border-[#3527D6] border-2 px-5 py-5"
                    }  rounded-full `}
                    onClick={() => inputRef.current.click()}
                  >
                    {avatar ? (
                      <img
                        src={avatar}
                        alt="selected_image"
                        className="rounded-full w-[100px]"
                      />
                    ) : (
                      <>
                        <img src={BluePlus} alt="blue_plus" />
                        <span className="absolute bottom-[-9px] border-2 border-[#3527D6] rounded-full px-1 py-1 bg-white">
                          <img src={BluePen} alt="blue_pen" />
                        </span>{" "}
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label className="text-[12px] font-bold">
                  Student Full Name
                </label>
                <input
                  type="text"
                  className="w-full border rounded-md px-2 outline-none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="text-[12px] font-bold">School Email</label>
                <input
                  type="text"
                  className="w-full border rounded-md px-2 outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="text-[12px] font-bold">Full Address</label>
                <input
                  type="text"
                  className="w-full border rounded-md px-2 outline-none"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="flex gap-2 change_flex justify-between">
                <div>
                  <label className="text-[12px] font-bold">Date of birth</label>
                  <br />
                  <input
                    type="date"
                    className="w-[150px] border rounded-md px-2 outline-none change_width"
                    value={dateofbirth}
                    onChange={(e) => setDateofbirth(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-[12px] font-bold">Mobile</label>
                  <br />
                  <input
                    type="text"
                    className="w-[250px] border rounded-md px-2 outline-none change_width"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <h3>Select gender</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <input
                      type="radio"
                      name="gender"
                      id="female"
                      className="mx-2"
                      value={gender === "Female"}
                      onChange={() => setGender("Female")}
                    />
                    <label>Female</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="gender"
                      id="male"
                      className="mx-2"
                      value={gender === "Male"}
                      onChange={() => setGender("Male")}
                    />
                    <label>Male</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="gender"
                      id="others"
                      className="mx-2"
                      value={gender === "Others"}
                      onChange={() => setGender("Others")}
                    />
                    <label>Others</label>
                  </div>
                </div>
                <div className="flex justify-between gap-3 change_flex">
                  <div>
                    <label>Student ID</label>
                    <br />
                    <input
                      type="text"
                      className="border w-[100px] rounded-md outline-none px-2 change_width"
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                    />
                  </div>
                  <div>
                    <label>Year of Resumption</label>
                    <br />
                    <select
                      className="rounded-md px-2 border outline-none w-[150px] change_width"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                    >
                      <option value={"Resumption"}>Resumption</option>
                      <option value={2018}>2018</option>
                      <option value={2019}>2019</option>
                      <option value={2020}>2020</option>
                      <option value={2021}>2021</option>
                      <option value={2022}>2022</option>
                      <option value={2023}>2023</option>
                    </select>
                  </div>
                  <div>
                    <label>Hostel</label>
                    <br />
                    <select
                      className="px-2 rounded-md w-[100px] border outline-none change_width"
                      value={hostel}
                      onChange={(e) => setHostel(e.target.value)}
                    >
                      <option value={"hostel"}>Hostel</option>
                      <option value="diamond">Diamond</option>
                      <option value={"gold"}>Gold</option>
                      <option value={"emeraid"}>Emeraid</option>
                      <option value={"jasper"}>Jasper</option>
                      <option value={"topaz"}>Topaz</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-2 change_flex justify-between">
                  <div>
                    <label>Class</label>
                    <br />
                    <select
                      className="px-2 rounded-md w-[100px] border outline-none change_width"
                      value={studentClass}
                      onChange={(e) => setStudentClass(e.target.value)}
                    >
                      <option value={"class"}>Class</option>
                      <option value={"jss1"}>Jss1</option>
                      <option value={"jss2"}>Jss2</option>
                      <option value={"jss3"}>Jss3</option>
                      <option value={"ss1"}>SS1</option>
                      <option value={"ss2"}>SS2</option>
                      <option value={"ss3"}>SS3</option>
                    </select>
                  </div>
                  <div>
                    <label>Arm</label>
                    <br />
                    <select
                      className="px-2 rounded-md w-[180px] border outline-none change_width"
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                    >
                      <option value={"arm"}>Arm</option>
                      <option value={"Science"}>Science</option>
                      <option value={"Art"}>Art</option>
                      <option value={"Commercial"}>Commercial</option>
                    </select>
                  </div>
                  <div>
                    <label>Club</label>
                    <br />
                    <select
                      className="px-2 rounded-md w-[110px] border outline-none change_width"
                      value={club}
                      onChange={(e) => setClub(e.target.value)}
                    >
                      <option value={"club"}>Club</option>
                      <option value={"science"}>Science</option>
                      <option value={"jet"}>Jet</option>
                      <option value={"creative arts"}>Creative Arts</option>
                      <option value={"music"}>Music</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label>Next of Kin</label>
                  <input
                    type="text"
                    className="w-full  rounded-md px-2 outline-none border"
                    value={nextofkin}
                    onChange={(e) => setNextOfkin(e.target.value)}
                  />
                </div>
                <div className="flex justify-between gap-2 change_flex">
                  <div>
                    <label>Relationship</label>
                    <br />
                    <input
                      type="text"
                      className="w-[200px] rounded-md px-2 outline-none border change_width"
                      value={relationship}
                      onChange={(e) => setRelationship(e.target.value)}
                    />
                  </div>
                  <div>
                    <label>Contact</label>
                    <br />
                    <input
                      type="text"
                      className="w-[200px] rounded-md px-2 outline-none border change_width"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <label>Subjects offered</label>
                <select
                  name=""
                  id=""
                  className="w-full border outline-none px-3 py-2 rounded-md"
                  value={subjectOffered}
                  onChange={(e) => setSubjectOffered(e.target.value)}
                >
                  <option value={"subject"}>Subjects offered</option>
                  <option value="maths">Maths</option>
                  <option value="english">English</option>
                  <option value="civic education">Civic Education</option>
                  <option value="economics">Economics</option>
                  <option value="geography">Geography</option>
                  <option value="goverment">Goverment</option>
                  <option value="french">French</option>
                  <option value="history">History</option>
                  <option value="crs">Christian Religious Studies</option>
                </select>
              </div>
              <AddResultTable />
              <div className="flex flex-end my-4">
                <button className="px-2 py-2 rounded-lg border" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default AddStudent;
