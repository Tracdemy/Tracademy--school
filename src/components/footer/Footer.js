import "./footer.css";
import FooterMan from "../../assets/images/cuate.png";

function Footer() {
  return (
    <div className="flex lg:justify-end">
      <div className="flex flex-col md:flex-row items-center justify-between md:w-[670px] xl:w-[920px] 2xl:w-[1440px] bg-[#3527D6] px-5 text-white py-4 rounded-2xl small-footer text-center md:text-start">
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-[24px]">Store your records securely</h2>
          <p className="w-[360px] text-[12px]">
            We have created a more easier and secure way to store your school’s
            records
          </p>
          <div>
            <button className="bg-[#D8EEBD] text-[#3527D6] rounded-2xl px-3 py-1 my-4">
              Show me
            </button>
          </div>
        </div>
        <div>
          <img src={FooterMan} alt="footerMan" />
        </div>
      </div>
    </div>
  );
}
export default Footer;
