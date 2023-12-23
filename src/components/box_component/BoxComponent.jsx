// import Youtube from "../../assets/images/youtube_video.png";

import PropTypes from "prop-types";

function BoxComponent({ title, paragraph, image }) {
  return (
    <div className="flex flex-col gap-3 px-3 py-3 rounded-xl shadow-md md:w-[350px] ">
      <img src={image} alt="youtube-video" />
      <h3 className="font-bold text-[#55578D]">{title}</h3>
      <p>{paragraph}</p>
    </div>
  );
}

BoxComponent.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};

export default BoxComponent;
