import React from "react";
import PropTypes from "prop-types";

function ButtonShop({ children, className, id, active, onClick }) {
  return (
    <button className={`${className}${active && " active"}`} onClick={onClick}>
      {children}
    </button>
  );
}

ButtonShop.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  className: PropTypes.string,
  id: PropTypes.string,
  active: PropTypes.bool,
};

export default ButtonShop;
