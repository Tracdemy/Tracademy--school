import PropTypes from "prop-types";

function RecommendedContainer({ image, details }) {
  return (
    <div>
      <div className="rounded-md bg-[#D5CEF1] px-2 py-2 mt-3">
        <img src={image} alt="recommendation1" />
      </div>
      <p className="underline text-center font-bold">{details}</p>
    </div>
  );
}

RecommendedContainer.propTypes = {
  image: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};

export default RecommendedContainer;
