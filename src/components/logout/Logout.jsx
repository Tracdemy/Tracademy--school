import LogoutImage from "../../assets/svg/logout.svg";
import Principal from "../../assets/images/hairgirl.png";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
function Logout() {

  //useContex
  const {user} = useContext(UserContext)
  return (
    <div className="py-5 px-2 bg-[#3527D6] text-white w-[250px] xl:w-[310px] my-5 rounded-2xl">
      <div className="flex gap-3">
        <img src={Principal} alt="principal" />
        <div className="leading-[16px]">
          <h2>{user?.displayName}</h2>
          <p>student</p>
        </div>
      </div>
      <div className="flex justify-center my-2">
        <div className="flex items-center px-4 rounded-3xl bg-[#D8EEBD]">
          <img src={LogoutImage} alt="logout" />
          <button className="text-[#3527D6]">Logout</button>
        </div>
      </div>
    </div>
  );
}
export default Logout;
