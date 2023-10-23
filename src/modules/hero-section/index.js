import React from "react";
import { Col, Row, Typography } from "antd";
import Label from "../../components/Label";
import { svgs } from "../../utils";
import CountUp from "../../components/CountUpAnimator";
import InfiniteScroller from "../../components/InfiniteScroller";
import Hero from "./hero";

const { Title, Text } = Typography;

const HeroSection = (props) => {
  return (
    <>
      <Hero />
      <div className="px-20 bg-black hidden lg:block">
        <Row gutter={[64, 16]} justify="space-between" align="middle">
          <Col lg={12} md={24} sm={24} xs={24} className="py-20">
            <Label
              title={
                <Title className="m-0 text-white">
                  World-class teams are upgrading to Welcome
                </Title>
              }
              description={
                <Text className="text-white/[0.65]">
                  Companies are ditching legacy platforms for the ability to
                  deliver an engaging experience at every level.
                </Text>
              }
            />
            <Label
              title={
                <Title className="m-0 text-white">
                  +<CountUp value={66} />%{" "}
                  <Text className="text-white/[0.65]">attendance rate</Text>
                </Title>
              }
              description={
                <Text className="text-white/[0.65]">
                  avg attendance for Welcome customers
                </Text>
              }
            />
          </Col>
          <Col
            lg={8}
            md={24}
            sm={24}
            xs={24}
            className="flex flex-row gap-8 h-[396px]"
          >
            <InfiniteScroller
              direction="vertical"
              reverse={false}
              loop={true}
              className="flex flex-col items-center flex-nowrap gap-6"
            >
              {svgs.map((item, index) => (
                <div className="shrink-0" key={index}>
                  {item}
                </div>
              ))}
            </InfiniteScroller>
            <InfiniteScroller
              direction="vertical"
              reverse={true}
              loop={true}
              className="flex flex-col-reverse items-center flex-nowrap gap-6"
            >
              {svgs.map((item, index) => (
                <div className="shrink-0" key={index}>
                  {item}
                </div>
              ))}
            </InfiniteScroller>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default HeroSection;
