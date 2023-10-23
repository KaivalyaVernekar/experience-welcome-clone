import React from "react";
import { Button, Col, Image, Row, Typography } from "antd";
import { PlayCircleFilled } from "@ant-design/icons";

import HeroImg from "../../assets/images/hero.png";

const { Title, Text } = Typography;

const Hero = (props) => {
  return (
    <div className="py-36 bg-black text-white w-full bg-hero-pattern bg-cover bg-no-repeat">
      <Row gutter={[40, 48]} className="flex flex-col items-center">
        <Col span={24}>
          <div className="flex flex-col items-center gap-6">
            <Title className="m-0 mb-0 px-8 text-5xl md:text-7xl lg:text-8xl text-white text-center">
              Captivate & Convert
            </Title>
            <Text className="m-0 px-8 text-white/[.70] text-lg lg:text-xl text-center">
              A webinar platform designed for marketers to host{" "}
              <br className="hidden sm:block" /> jaw-dropping experiences that
              drive revenue.
            </Text>
            <div className="flex flex-row gap-4 items-center">
              <Button type="primary" shape="round">
                Demo
              </Button>{" "}
              <Button
                type="default"
                shape="round"
                ghost
                icon={<PlayCircleFilled />}
              >
                How it works
              </Button>
            </div>
          </div>
        </Col>
        <Col span={24}>
          <div>
            <Image preview={false} src={HeroImg} alt="sign-up" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
