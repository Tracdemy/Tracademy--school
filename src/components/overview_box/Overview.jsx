// import Box1 from "../../assets/images/box1.png";
import PropTypes from "prop-types";

function Overview({ image, description, amount }) {
  return (
    <div>
      <div className="shadow border rounded-lg flex flex-col items-center py-3 px-[35px] ">
        <div className="flex relative">
          <img
            src={image}
            alt="overview"
            className="top-[-13px] left-[-37px] absolute"
          />
          <p className="text-[10px] ml-2">{description}</p>
        </div>
        <h2 className="font-bold text-[32px]">{amount}</h2>
      </div>
    </div>
  );
}

Overview.propTypes = {
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default Overview;
