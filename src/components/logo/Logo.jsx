import Cap from "../../assets/svg/cap.svg";
import Curve from "../../assets/svg/c-logo.svg";

function Logo() {
  return (
    <div className="relative mx-5 w-[200px] my-3">
      <div>
        <img
          src={Curve}
          alt="curve"
          className="absolute top-[-4px] left-0 max-w-[39px]"
        />
        <img src={Cap} alt="" className="absolute top-[-4px] right-[35px]" />
        <h3 className="text-blue-800 font-bold text-[27px] ml-6">Tracdemy</h3>
      </div>
    </div>
  );
}

export default Logo;
