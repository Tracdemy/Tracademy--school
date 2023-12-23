import ChatBox from "./ChatBox";
import PictureComponent from "./PictureComponent";
import { useContext } from "react";
import { TracademyContext } from "../../context/TracademyContext";

function ChatComponent() {
  const { teachersInfo } = useContext(TracademyContext);
  return (
    <div className=" px-5 py-4 mx-5 text-[15px]">
      <div className="relative">
        <div className="absolute top-[-27px] left-[-17px]">
          <PictureComponent image="teachers/daniels.png" />
        </div>
        <ChatBox
          description={`Good morning ${teachersInfo.name}, I hope you are doing well`}
        />
        <ChatBox description="I'm messaging you to inform you that Doyin won't be in school for a week" />
      </div>
      <div className="relative ml-[40px]">
        <div className="absolute top-[-26px] right-[-24px]">
          <PictureComponent image={`${teachersInfo.avatar}`} />
        </div>
        <ChatBox description="Hello Mrs Juliet, Thank you for reaching out, I hope Doyin is alright? " />
      </div>
      <div className="relative">
        <div className="absolute top-[-27px] left-[-17px]">
          <PictureComponent image="teachers/daniels.png" />
        </div>
        <ChatBox description="After school yesterday, Doyin went to play with her friends for a bit . On her way back , she she fell and had a fracture. We had to rush her to the hospital for treatment as she was in severe pain. She has been admitted and the doctor says that she might have to be in the hospital for about a week . We will keep you posted with her improvement and information on when she can come back to school. Thanks you Ma." />
      </div>
      <div className="flex items-center">
        <span className="mb-[14px] text-[#FFFFFF]">____________</span>
        <h3 className="mx-2">Today</h3>
        <span className="mb-[14px] text-[#FFFFFF]">____________</span>
      </div>
      <div className="relative ml-[40px]">
        <div className="absolute top-[-26px] right-[-24px]">
          <PictureComponent image={`${teachersInfo.avatar}`} />
        </div>
        <ChatBox description="Hello Mrs Juliet,  I am so sorry about Doyin’s accident. Would it be okay to have some of har class mates and teacher visit her at the hospital?. Our hearts are with you and we wish Doyin speedy recovery. " />
      </div>
    </div>
  );
}
export default ChatComponent;
