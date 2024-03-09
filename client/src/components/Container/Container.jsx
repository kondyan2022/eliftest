import PropTypes from "prop-types";

function Container({ children }) {
  return <div>{children}</div>;
}
Container.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Container;
