import Plus from "../../assets/svg/plus.svg";
import "./addresult.css";
import { useContext } from "react";
import { TracademyContext } from "../../context/TracademyContext";

function AddResultTable() {
  const { session, setSession, term, setTerm } = useContext(TracademyContext);
  return (
    <div>
      <div className="flex justify-end gap-2 ">
        <div className="my-2">
          <select
            name="session"
            id="session"
            className="px-3 py-2 border outline-none mx-2 rounded-md"
            value={session}
            onChange={(e) => setSession(e.target.value)}
          >
            <option value="session">Session</option>
            <option value="2021/2022">2021/2022</option>
            <option value="2022/2023">2022/2023</option>
            <option value="2023/2024">2023/2024</option>
          </select>
          <select
            name="term"
            id="term"
            className="px-3 py-2 border outline-none rounded-md"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          >
            <option value="term">Term</option>
            <option value="first">First</option>
            <option value="second">Second</option>
            <option value="third">Third</option>
          </select>
        </div>
      </div>
      <div>
        <table className="border rounded-md px-3 py-2 w-[450px] text-[12px] changed_width">
          <thead>
            <tr className="font-bold border-spacing-x-2">
              <th className="p-2 text-left">Subject</th>
              <th className="p-2 text-left">Assignment</th>
              <th className="p-2 text-left">Test 1</th>
              <th className="p-2 text-left">Test 2</th>
              <th className="p-2 text-left">Exam</th>
              <th className="p-2 text-left">Action</th>
              <th className="p-2 text-left">
                <button className="bg-[#3527D6] rounded-full px-1 py-1">
                  <img src={Plus} alt="plus" />
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="px-2">
              <td className="border p-2 border-[#e2e8f0] text-left">Maths</td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
            </tr>
            <tr>
              <td className="border p-2 border-[#e2e8f0] text-left">
                Civic Edu
              </td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
            </tr>
            <tr>
              <td className="border p-2 border-[#e2e8f0] text-left">C.R.S</td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
            </tr>
            <tr>
              <td className="border p-2 border-[#e2e8f0] text-left">English</td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
            </tr>
            <tr>
              <td className="border p-2 border-[#e2e8f0] text-left">
                Economics
              </td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
            </tr>
            <tr>
              <td className="border p-2 border-[#e2e8f0] text-left">French</td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
            </tr>
            <tr>
              <td className="border p-2 border-[#e2e8f0] text-left">
                Geography
              </td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
            </tr>
            <tr>
              <td className="border p-2 border-[#e2e8f0] text-left">
                Goverment
              </td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
            </tr>
            <tr>
              <td className="border p-2 border-[#e2e8f0] text-left">History</td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
            </tr>
            <tr>
              <td className="border p-2 border-[#e2e8f0] text-left">
                <button className="bg-[#3527D6] rounded-full px-1 py-1">
                  <img src={Plus} alt="plus" />
                </button>
              </td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
              <td className="border p-2 border-[#e2e8f0] text-left"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default AddResultTable;
