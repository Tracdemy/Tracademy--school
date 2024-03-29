// import Navbar from "../../navbar/Navbar";
import Todo from "../../todo/Todo";
import Logout from "../../logout/AdminLogout";
import Footer from "../../footer/Footer";
import TeacherSubject from "../../teacher_subject/TeacherSubject";
import Chat from "../../parent_chat/chat_folder/Chat";
import TeachersDetails from "../../teachers_details/TeachersDetails";
import { useState } from "react";
import StudentSidebar from "../../studentSidebar/StudentSidebar";
import StudentNavbar from "../../navbar/StudentNavbar";

function StudentParentCommunication({ user }) {
  const [showDialog, setShowDialog] = useState(false);
  const handleShowState = () => {
    setShowDialog(!showDialog);
  };
  return (
    <div className="mx-3 md:mx-10">
      <StudentNavbar user={user} />
      {/* <Navbar user={user} /> */}
      <div className="flex justify-between">
        <div className="hidden xl:block">
          <StudentSidebar />
          <Todo />
        </div>
        <div className="flex gap-4 my-3 change_flex">
          <TeacherSubject showDialog={showDialog} />
          <Chat handleShowState={handleShowState} showDialog={showDialog} />
          <TeachersDetails showDialog={showDialog} />
        </div>
      </div>

      <div className="flex gap-3">
        <div className="hidden xl:block">
          <Logout />
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default StudentParentCommunication;
