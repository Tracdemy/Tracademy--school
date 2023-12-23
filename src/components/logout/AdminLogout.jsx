import LogoutImage from "../../assets/svg/logout.svg";
function AdminLogout(props) {
  const {user} = props
  //useContex
  return (
    <div className="py-5 px-2 bg-[#3527D6] text-white w-[234px] my-5 rounded-2xl">
      <div className="flex gap-3">
        <img src={user?.photoURL} alt="principal" className="w-5 h-5 rounded-full"/>
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
export default AdminLogout;
