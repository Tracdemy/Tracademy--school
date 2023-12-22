import PropTypes from "prop-types";

function OverviewComponent({ children, image, description, title }) {
  return (
    <div className="border shadow px-2 py-2 w-[200px]">
      <div className="flex gap-2">
        <img src={image} alt="result_svg" />
        <p>{title}</p>
      </div>
      <div>{children}</div>
      <div>
        <p className="text-[12px]">{description}</p>
      </div>
    </div>
  );
}

OverviewComponent.propTypes = {
  image: PropTypes.string.isRequired,
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default OverviewComponent;
