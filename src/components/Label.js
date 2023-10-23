import React from "react";
import { Col, Row } from "antd";

const Label = (props) => {
  const { label, title, description, children, ...restProps } = props;
  return (
    <div {...restProps}>
      <Row gutter={[16, 16]}>
        {label && <Col span={24}>{label}</Col>}
        {title && <Col span={24}>{title}</Col>}
        {description && <Col span={24}>{description}</Col>}
      </Row>
      {children}
    </div>
  );
};

export default Label;
