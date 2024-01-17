import Search from "../../../assets/svg/chat_search.svg";
import Dots from "../../../assets/images/chat_dot.png";
import ChatComponent from "../ChatComponent";
import ChatDialog from "../ChatDialog";
import { useContext } from "react";
import { TracademyContext } from "../../../context/TracademyContext";
import "./chat.css";

function Chat({ handleShowState, showDialog }) {
  const { teachersInfo } = useContext(TracademyContext);
  console.log(teachersInfo);
  return (
    <div className="bg-[#F2F3FF] border rounded-md pb-2 relative wrapper" style={{width: showDialog===false?"100%":""}}>
      <div className="bg-white text-[#3527D6] rounded flex justify-between px-4 py-3 ">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={handleShowState}
        >
          <img
            src={teachersInfo.avatar}
            alt="crowder"
            className="rounded-[40px]"
          />
          <p>{teachersInfo.name}</p>
        </div>
        <div className="flex items-center gap-3">
          <img src={Search} alt="search" />
          <img src={Dots} alt="dots" />
        </div>
      </div>
      <div>
        <ChatComponent />
      </div>
      <div className="chat_dialog">
        <ChatDialog />
      </div>
    </div>
  );
}
export default Chat;
