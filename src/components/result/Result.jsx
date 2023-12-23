import BlueDown from "../../assets/svg/blue_down.svg";
import { useState, useContext } from "react";
import { TracademyContext } from "../../context/TracademyContext";

function Result() {
  const { personalInfo } = useContext(TracademyContext);
  const [showItems, setShowItems] = useState(null);

  const handleShowState = (index) => {
    setShowItems(showItems === index ? null : index);
  };

  let resultData;
  const science = [
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
      subject: "Technical Drawing",
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
      subject: "Further Maths",
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
      subject: "Physics",
      assignment: "13/20",
      text1: "12/20",
      text2: "15/20",
      exams: "75/100",
    },
    {
      subject: "Chemistry",
      assignment: "11/20",
      text1: "10/20",
      text2: "12/20",
      exams: "70/100",
    },
    {
      subject: "Biology",
      assignment: "15/20",
      text1: "10/20",
      text2: "14/20",
      exams: "90/100",
    },
  ];
  const Arts = [
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
  const commercial = [
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
      subject: "Commerce",
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
      subject: "Business Admin",
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

  if (personalInfo.department === "Science") {
    resultData = science;
  } else if (personalInfo.department === "commercial") {
    resultData = commercial;
  } else if (personalInfo.department === "Art") {
    resultData = Arts;
  } else {
    resultData = science;
  }

  return (
    <div className="border rounded-xl px-2 py-3 relative">
      <div className="flex  justify-between ">
        <div className="flex gap-2 items-center">
          <h3 className="text-[#3527D6] text-[24px]">Results Records</h3>
          <div>
            <img src="./svg/result_record.svg" alt="" />
          </div>
        </div>
        <div className="flex gap-3">
          <div className="rounded shadow-lg outline-none text-[#3527D6] px-2">
            <div
              className="flex items-center gap-3 py-2"
              onClick={() => handleShowState(0)}
            >
              Year
              <img src={BlueDown} alt="" />
            </div>
            {showItems === 0 && (
              <div className="absolute top-[60px] right-[93px] bg-white px-6 py-2 rounded cursor-pointer">
                <option value="">2018</option>
                <option value="">2019</option>
                <option value="">2020</option>
                <option value="">2021</option>
                <option value="">2022</option>
                <option value="">2023</option>
              </div>
            )}
          </div>

          <div className="shadow-lg rounded outline-none text-[#3527D6] px-2">
            <div
              className="flex items-center gap-3 py-2"
              onClick={() => handleShowState(1)}
            >
              Term <img src={BlueDown} alt="down" />
            </div>

            {showItems === 1 && (
              <div className="absolute top-[60px] right-[8px] bg-white py-2 px-2 rounded cursor-pointer">
                <option value="">First</option>
                <option value="">Second</option>
                <option value="">Third</option>
              </div>
            )}
          </div>
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
              className=" border-t border-[#CFCFCF] py-4 my-4 border-spacing-y-5 h-[50px]"
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
