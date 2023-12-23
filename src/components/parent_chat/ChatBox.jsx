import PropTypes from "prop-types";

function ChatBox({ description }) {
  return (
    <div className="bg-white rounded-md px-2 py-1 w-[220px] mx-2 my-2">
      <p>{description}</p>
    </div>
  );
}

ChatBox.propTypes = {
  description: PropTypes.string.isRequired,
};
export default ChatBox;
