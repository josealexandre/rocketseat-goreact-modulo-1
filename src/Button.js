import React, { Component } from "react";
import Proptypes from "prop-types";

export default class Button extends Component {
  static defaultProps = {
    children: "Salvar"
  };

  static propTypes = {
    onClick: Proptypes.func.isRequired,
    title: Proptypes.string
  };

  render() {
    return <button onClick={this.props.onClick}>{this.props.children}</button>;
  }
}
