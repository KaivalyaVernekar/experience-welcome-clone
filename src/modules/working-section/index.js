import React from "react";
import { Button, Col, Image, Row, Typography } from "antd";
import Label from "../../components/Label";

import { workingSteps } from "../../utils";

const { Title, Text } = Typography;

const ListItem = (props) => {
  return (
    <Row
      gutter={[48, 32]}
      align="middle"
      justify="space-between"
      className="py-10 border-t-1 border-black/[.10]"
      style={{ borderTop: "1px solid" }}
    >
      <Col lg={10} md={12} sm={24} xs={22}>
        <Label
          label={<Text>{props.label}</Text>}
          title={<Title className="m-0">{props.title}</Title>}
          description={<Text>{props.description}</Text>}
        />
      </Col>
      <Col lg={14} md={12} sm={24} xs={22}>
        <Image
          src={props.src}
          alt={props.alt}
          preview={false}
          className="rounded-full"
        />
      </Col>
    </Row>
  );
};

const Working = (props) => {
  return (
    <div className="px-20 py-36" {...props}>
      <Row gutter={[200, 16]} className="mb-20" justify="space-between">
        <Col lg={12} md={24} sm={24} xs={24}>
          <Title className="m-0 text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            How it works
          </Title>
        </Col>
        <Col lg={10} md={24} sm={24} xs={24} className="">
          <Label
            description={
              <Text>
                Manage your experience from start to finish, from integrations
                to registration and from interactive stage elements to
                post-event data, it’s all here.
              </Text>
            }
          >
            <Button type="primary" shape="round" className="m-0 mt-4">
              Learn more
            </Button>
          </Label>
        </Col>
      </Row>

      {workingSteps.map((item) => (
        <ListItem key={item.label} {...item} />
      ))}
    </div>
  );
};

export default Working;
