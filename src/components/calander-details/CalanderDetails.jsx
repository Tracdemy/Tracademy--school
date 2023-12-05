// import Check from "../../assets/svg/check.svg";
import CheckBox from "../checkbox/CheckBox";

function CalanderDetails() {
  return (
    <div>
      <div className="bg-white border px-3 my-5">
        <h3 className="text-[#3527D6] text-[25px] my-5">Calendar Details</h3>
        <div>
          <div className="bg-[#3527D6] rounded-full px-5 py-1 flex items-center gap-3 text-white my-5">
            <span>
              <CheckBox color="white" />
            </span>
            Inter-house sports
          </div>
          <div className="bg-[#D8EEBD] text-black rounded-full px-5 py-1 flex items-center gap-3 my-5">
            <span>
              <CheckBox color="black" />
            </span>
            Jet club meeting
          </div>
          <div className="bg-[#D5CEF1] text-black rounded-full px-5 py-1 flex items-center gap-3 my-5">
            <span>
              <CheckBox color="black" />
            </span>
            Mid-term break
          </div>
          <div className="bg-[#B3DCF8] text-black rounded-full px-5 py-1 flex items-center gap-3 my-5">
            <span>
              <CheckBox color="black" />
            </span>
            Civic education test
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalanderDetails;
