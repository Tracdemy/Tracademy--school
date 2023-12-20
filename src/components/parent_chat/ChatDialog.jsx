import Plus from "../../assets/svg/chat_add.svg";
import Attachment from "../../assets/svg/chat_attachement.svg";
import Send from "../../assets/svg/chat_send.svg";
function ChatDialog() {
  return (
    <div className="flex justify-between items-center px-3">
      <img src={Plus} alt="plus" />
      <div className="bg-white py-4 px-2 w-[250px] relative rounded">
        <img
          src={Attachment}
          alt="attachment"
          className="absolute top-[5px] right-2"
        />
      </div>
      <img src={Send} alt="send" />
    </div>
  );
}
export default ChatDialog;
