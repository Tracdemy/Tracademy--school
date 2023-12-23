import PropTypes from "prop-types";
import "./categorycomponent.css";

function CategoryComponent({ image, title, description, color }) {
  return (
    <div className="lappy flex py-2 items-center border gap-3 rounded-md px-2 my-3 mx-4">
      <div
        className={`bg-${color} px-4 py-4`}
        style={{ backgroundColor: color }}
      >
        <img src={image} alt="image_section" />
      </div>
      <div>
        <h4 className="font-bold text-[20px]">{title}</h4>
        <p className="text-[#BDBDBD] text-[15px]">{description}</p>
      </div>
    </div>
  );
}

CategoryComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CategoryComponent;
