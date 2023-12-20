import PropTypes from "prop-types";

function PictureComponent({ image }) {
  return (
    <div className="my-5">
      <img src={image} alt="teacher_image" className="rounded-[40px]" />
    </div>
  );
}

PictureComponent.propTypes = {
  image: PropTypes.string.isRequired,
};
export default PictureComponent;
