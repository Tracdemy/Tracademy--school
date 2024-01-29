import { useNavigate } from "react-router-dom";
import LogoutImage from "../../assets/svg/logout.svg";
import { getAuth, signOut } from "firebase/auth";
function StudentLogOut({ user }) {
  // console.log(user);
  //Navigate
  const navigate = useNavigate();
  // const { user } = user;
  //Handle admin signout
  // console.log(props);
  const handleStudentSignout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/");
        // console.log("Out");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="py-5 px-2 bg-[#3527D6] text-white w-[234px] my-5 rounded-2xl">
      <div className="flex gap-3">
        <img
          src={`${user?.photoURL}`}
          alt="principal"
          className="w-10 h-10 rounded-full"
        />
        <div className="leading-[16px] ml-[30px]">
          <h2>{user?.displayName}</h2>
          <p>Student</p>
        </div>
      </div>
      <div className="flex justify-center my-2">
        <div className="flex items-center px-4 rounded-3xl bg-[#D8EEBD]">
          <img src={LogoutImage} alt="logout" />
          <button className="text-[#3527D6]" onClick={handleStudentSignout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
export default StudentLogOut;
