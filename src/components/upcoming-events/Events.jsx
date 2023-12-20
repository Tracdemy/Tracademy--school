import ArrowRight from "../../assets/svg/arrowright.svg";

function Events() {
  return (
    <div>
      <div className="border px-3 py-2 rounded-md">
        <h4 className="font-bold">Upcoming Events</h4>
        <div className="flex gap-3 my-3 items-center">
          <div className="text-white flex flex-col px-3 py-1 bg-[#3527D6] rounded-lg items-center">
            <p className="font-bold">12</p>
            <span>Wed</span>
          </div>
          <div className="leading-5">
            <p>Inter-club competition</p>
            <span className="text-[12px]">Science lab</span>
          </div>
        </div>
        <div className="flex gap-3 my-3 items-center">
          <div className="flex flex-col px-3 py-1 bg-[#D8EEBD] rounded-lg items-center">
            <p className="font-bold">12</p>
            <span>Wed</span>
          </div>
          <div className="leading-5">
            <p>Inter-club competition</p>
            <span className="text-[12px]">Science lab</span>
          </div>
        </div>
        <div className="flex gap-3 my-3 items-center">
          <div className=" flex flex-col px-3 py-1 bg-[#D5CEF1] rounded-lg items-center">
            <p className="font-bold">12</p>
            <span>Wed</span>
          </div>
          <div className="leading-5">
            <p>Inter-club competition</p>
            <span className="text-[12px]">Science lab</span>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="flex gap-3 items-center cursor-pointer">
            <p className="text-[12px] text-[#3527D6] font-bold">View more</p>
            <img src={ArrowRight} alt="arrow-right" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Events;
