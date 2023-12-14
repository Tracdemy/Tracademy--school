import Logo from "../../assets/svg/barca_logo.svg";
import Telephone from "../../assets/svg/telephone.svg";
import Email from "../../assets/svg/messagebox.svg";
import LocationIcon from "../../assets/svg/location_icon.svg";
import FaceBook from "../../assets/svg/ic Facebook.svg";
import Twitter from "../../assets/svg/ic Twitter.svg";
import Linkdin from "../../assets/svg/ic Linkedin.svg";
import "./footer.css";

function LandingFooter() {
  return (
    <div
      className="bg-[#5956E9] text-[white] px-4"
      style={{ marginTop: "100px" }}
    >
      <div className=" py-5 ">
        <div className="flex justify-between mb-6 works flex-col md:flex-row gap-4 mx-4">
          <div>
            <div className="flex items-center gap-3">
              <img src={Logo} alt="logo" />
              <h3>Barca</h3>
            </div>
            <div className="flex items-center gap-2">
              <img src={Telephone} alt="telephone" />
              <p>0703302438</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={Email} alt="email" />
              <p>Barcalearn@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={LocationIcon} alt="location" />
              <p>Abuja, Nigeria</p>
            </div>
          </div>
          <div>
            <ul>
              <li className="font-bold">Courses</li>
              <li>Mathematics</li>
              <li>Physics</li>
              <li>English</li>
              <li>Chemistry</li>
              <li>Geography</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="font-bold">Mentors</li>
              <li>Olalekun idowu</li>
              <li>Olanikpekun Joshua</li>
              <li>Moses Simon</li>
              <li>Elizabeth Dauda</li>
              <li>Oghenekaro Steve</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="font-bold">About Us</li>
              <li>Terms and condtion</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="flex justify-between my-6 flex-wrap">
          <div className="flex items-center gap-3">
            <span className="px-2 py-2 rounded-full border-2 border-white">
              <img src={Twitter} alt="twitter" />
            </span>
            <span className="px-2 py-2 rounded-full border-2 border-white">
              <img src={FaceBook} alt="facebook" />
            </span>
            <span className="px-2 py-2 rounded-full border-2 border-white">
              <img src={Linkdin} alt="linkdin" />
            </span>
          </div>
          <div>
            <p>A product of Barca Edutech Platform</p>
          </div>
          <div>
            <p>© 2023 Barca Ltd. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LandingFooter;
