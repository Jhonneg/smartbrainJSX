import { Component } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal-root");

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }
  componentDidMount() {
    modalRoot.appendChild(this.el);
  }
  componentWillUnmount() {
    modalRoot.appendChild(this.el);
  }

  render() {
    return createPortal(this.props.children, this.el);
  }
}
