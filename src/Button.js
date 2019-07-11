import React from "react";
import Proptypes from "prop-types";

const Button = props => (
  <button onClick={props.onClick}>{props.children}</button>
);

Button.defaultProps = {
  children: "Salvar"
};

Button.propTypes = {
  onClick: Proptypes.func.isRequired,
  title: Proptypes.string
};

export default Button;
