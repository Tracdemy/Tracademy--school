import BlueDown from "../../assets/svg/blue_down.svg";

function Result() {
  const resultData = [
    {
      subject: "Maths",
      assignment: "14/20",
      text1: "12/20",
      text2: "14/20",
      exams: "60/100",
    },
    {
      subject: "Civic Education",
      assignment: "15/20",
      text1: "10/20",
      text2: "12/20",
      exams: "73/100",
    },
    {
      subject: "C.R.S",
      assignment: "16/20",
      text1: "15/20",
      text2: "10/20",
      exams: "83/100",
    },
    {
      subject: "English",
      assignment: "14/20",
      text1: "07/20",
      text2: "11/20",
      exams: "93/100",
    },
    {
      subject: "Economics",
      assignment: "10/20",
      text1: "10/20",
      text2: "14/20",
      exams: "78/100",
    },
    {
      subject: "French",
      assignment: "12/20",
      text1: "11/20",
      text2: "16/20",
      exams: "73/100",
    },
    {
      subject: "Geography",
      assignment: "14/20",
      text1: "07/20",
      text2: "11/20",
      exams: "93/100",
    },
    {
      subject: "Government",
      assignment: "13/20",
      text1: "12/20",
      text2: "15/20",
      exams: "75/100",
    },
    {
      subject: "History",
      assignment: "11/20",
      text1: "10/20",
      text2: "12/20",
      exams: "70/100",
    },
    {
      subject: "Literature-in-English",
      assignment: "15/20",
      text1: "10/20",
      text2: "14/20",
      exams: "90/100",
    },
  ];
  return (
    <div className="border w-[450px] rounded-xl px-2 py-3">
      <div className="flex  justify-between ">
        <h3 className="text-[#3527D6] text-[24px]">Results Records</h3>
        <div className="flex gap-3">
          <select className="rounded shadow-lg outline-none text-[#3527D6] px-2">
            <option value="">
              Year
              <span>
                <img src={BlueDown} alt="" />
              </span>
            </option>
            <option value="">2018</option>
            <option value="">2019</option>
            <option value="">2020</option>
            <option value="">2021</option>
            <option value="">2022</option>
            <option value="">2023</option>
          </select>

          <select className="shadow-lg rounded outline-none text-[#3527D6] px-2">
            <option value="">
              Term{" "}
              <span>
                <img src={BlueDown} alt="down" />
              </span>
            </option>
            <option value="">First</option>
            <option value="">Second</option>
            <option value="">Third</option>
          </select>
        </div>
      </div>
      <div>
        <table className="w-full text-[15px] my-5">
          <tr className="font-bold">
            <td>Subject</td>
            <td>Assignment</td>
            <td>Test 2</td>
            <td>Test 1</td>
            <td>Exam</td>
          </tr>
          {resultData.map((value, index) => (
            <tr
              key={index}
              className=" border-t border-[#CFCFCF] py-4 my-4 border-spacing-y-5 h-[60px]"
            >
              <td>{value.subject}</td>
              <td>{value.assignment}</td>
              <td>{value.text1}</td>
              <td>{value.text2}</td>
              <td>{value.exams}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
export default Result;
