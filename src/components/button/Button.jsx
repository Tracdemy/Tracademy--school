import React from "react";
import PropTypes from "prop-types";

function Button({ color, children, background, textcolor, bgColor }) {
  return (
    <div>
      <button
        className={`text-${color} bg-${background} px-3 py-2 hover:text-${textcolor} hover:bg-${bgColor} outline-none border rounded-xl`}
      >
        {children}
      </button>
    </div>
  );
}

Button.propTypes = {
  color: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  textcolor: PropTypes.string,
  bgColor: PropTypes.string,
};

export default Button;
