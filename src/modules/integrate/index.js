import React from "react";
import { Col, Image, Row, Typography } from "antd";

import hubspot from "../../assets/images/hubspot.svg";
import office from "../../assets/images/office.svg";
import integrate from "../../assets/images/integrate.svg";

import InfiniteScroller from "../../components/InfiniteScroller";

const { Title, Text } = Typography;

const Pill = (props) => (
  <div
    className="flex flex-col items-center justify-center rounded-full px-8 py-16 bg-white"
    style={{
      boxShadow: "0px 35px 64px 0px rgba(0, 0, 0, 0.08)",
    }}
  >
    <Image preview={false} src={props.src} alt={props.alt} />
  </div>
);

const Integrate = (props) => {
  return (
    <div className="px-20 bg-[#F5F5F5] overflow-hidden h-[596px] hidden md:block">
      <Row gutter={[64, 16]} justify="space-between" align="middle">
        <Col
          lg={10}
          md={10}
          sm={24}
          xs={24}
          className="flex flex-row gap-5 h-[596px]"
        >
          <InfiniteScroller
            direction="vertical"
            reverse={false}
            loop={true}
            className="flex flex-col items-center flex-nowrap gap-6"
          >
            <Pill src={hubspot} alt="hubspot" />
            <Pill src={office} alt="office" />
            <Pill src={hubspot} alt="hubspot" />
            <Pill src={office} alt="office" />
          </InfiniteScroller>
          <InfiniteScroller
            direction="vertical"
            reverse={true}
            loop={true}
            className="flex flex-col-reverse items-center flex-nowrap gap-6"
          >
            <Pill src={hubspot} alt="hubspot" />
            <Pill src={office} alt="office" />
            <Pill src={hubspot} alt="hubspot" />
            <Pill src={office} alt="office" />
          </InfiniteScroller>
        </Col>
        <Col lg={14} md={14} sm={24} xs={24}>
          <Title className="m-0 md:text-7xl">Integrate</Title>
          <div className="flex flex-row items-center gap-4">
            <img
              src={integrate}
              alt="integrate"
              preview={false}
              className="rounded-full max-w-[25%]"
            />
            <Title className="m-0 md:text-7xl">your data</Title>
          </div>
          <Text className="mt-16">
            Leverage your existing marketing platforms and sync the data
            seamlessly
          </Text>
        </Col>
      </Row>
    </div>
  );
};

export default Integrate;
