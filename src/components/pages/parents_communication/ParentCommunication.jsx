import Navbar from "../../navbar/Navbar";
import Sidebar from "../../sidebar/Sidebar";
import Todo from "../../todo/Todo";
import Logout from "../../logout/Logout";
import Footer from "../../footer/Footer";
import TeacherSubject from "../../teacher_subject/TeacherSubject";
import Chat from "../../parent_chat/chat_folder/Chat";
import TeachersDetails from "../../teachers_details/TeachersDetails";
import { useState } from "react";

function ParentCommunication() {
  const [showDialog, setShowDialog] = useState(false);
  const handleShowState = () => {
    setShowDialog(!showDialog);
  };
  return (
    <div className="mx-3 md:mx-10">
      <Navbar />
      <div className="flex justify-between">
        <div>
          <Sidebar />
          <Todo />
        </div>
        <div className="flex gap-4 my-3">
          <TeacherSubject />
          <Chat handleShowState={handleShowState} />
          {showDialog && <TeachersDetails />}
        </div>
      </div>

      <div className="flex gap-3">
        <Logout />
        <Footer />
      </div>
    </div>
  );
}
export default ParentCommunication;
