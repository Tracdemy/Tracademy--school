import Cap from "../../assets/svg/cap.svg";
import Curve from "../../assets/svg/c-logo.svg";
import "./logo.css";
import { Link } from "react-router-dom";
function Logo() {
  return (
    <div className="relative mx-5 w-[200px] my-3 logo_width">
      <Link to="/">
        <img
          src={Curve}
          alt="curve"
          className="absolute top-[-4px] left-0 max-w-[39px]"
        />
        <img
          src={Cap}
          alt=""
          className="absolute top-[-4px] right-[35px] logo_right"
        />
        <h3 className="text-blue-800 font-bold text-[27px] ml-6">Tracdemy</h3>
      </Link>
    </div>
  );
}

export default Logo;
