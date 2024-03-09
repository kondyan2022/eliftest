import React from "react";
import PropTypes from "prop-types";

function ProductItem({ children, className, id, name, price }) {
  return (
    <div className={`${className}`}>
      <img src={""} alt={name} /> <h3>{name}</h3> <p>{price}</p>
      {children}
    </div>
  );
}

ProductItem.propTypes = {};

export default ProductItem;
