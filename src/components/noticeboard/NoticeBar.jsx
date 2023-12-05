import { useState } from "react";

function NoticeBar() {
  const [showText, setShowText] = useState(null);
  const handleShowText = (index) => {
    setShowText(showText === index ? null : index);
  };
  const textItem =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequiquisquam iste nisi impedit doloribus reiciendis corrupti essedolorum non, modi ratione provident odit nemo excepturi tenetur quiadistinctio quasi eius.";
  //   console.log(textItem.length);
  return (
    <div>
      <h3 className="text-[30px] font-bold my-5">Notice Board </h3>
      <div className="text-white bg-[#3527D6] px-4 py-4 rounded-xl text-[18px] overflow-auto">
        <div className="overflow-y-auto w-[260px] xl:w-[310px] h-[500px] ">
          <div className="my-4">
            <div className="flex gap-2 items-center">
              <span className="border rounded-2xl px-2 py-2 bg-white"></span>
              <h4 className="font-bold text-[22px]">Upcoming mid-term break</h4>
            </div>

            <p>
              {showText === 0 ? textItem : textItem.slice(0, 50)}
              <span className="font-bold" onClick={() => handleShowText(0)}>
                {" "}
                {showText === 0 ? "see less" : "see more"}
              </span>
            </p>
          </div>
          <div className="my-4">
            <div className="flex gap-2 items-center">
              <span className="border rounded-2xl px-2 py-2 bg-white"></span>
              <h4 className="font-bold text-[22px]">Inter-Club Competition</h4>
            </div>

            <p>
              {showText === 1 ? textItem : textItem.slice(0, 50)}
              <span className="font-bold" onClick={() => handleShowText(1)}>
                {" "}
                {showText === 1 ? "see less" : "see more"}
              </span>
            </p>
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <span className="border rounded-2xl px-2 py-2 bg-white"></span>
              <h4 className="font-bold text-[22px] my-3">Test Week</h4>
            </div>

            <p>
              {showText === 2 ? textItem : textItem.slice(0, 50)}
              <span className="font-bold" onClick={() => handleShowText(2)}>
                {" "}
                {showText === 2 ? "see less" : "see more"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NoticeBar;
