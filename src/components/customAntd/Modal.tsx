import { Modal } from "antd";
import React from "react";

const CustomModal = ({ ...props }) => {
  return <Modal {...props} centered />;
};

export default CustomModal;
