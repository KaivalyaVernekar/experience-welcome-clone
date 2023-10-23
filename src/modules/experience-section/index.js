import React from "react";
import { Button, Image, Row, Typography } from "antd";
import { experiences } from "../../utils";
import InfiniteScroller from "../../components/InfiniteScroller";

const { Title, Text } = Typography;

const Experience = (props) => {
  return (
    <>
      <div className="flex flex-col items-center gap-4 mb-20">
        <Title className="m-0 mb-0 px-8 text-5xl md:text-7xl lg:text-8xl text-black text-center">
          Experience <br className="hidden lg:block" /> Welcome
        </Title>
        <Text className="m-0 px-8 text-black/[.65] text-lg sm:text-xl text-center">
          A webinar platform designed for marketers to host jaw-dropping
          experiences that drive revenue.
        </Text>
        <Button type="primary" shape="round" className="m-0 px-8">
          Request a demo
        </Button>
      </div>
      <Row gutter={[8, 32]} align="middle">
        <InfiniteScroller
          direction="horizontal"
          reverse={false}
          loop={true}
          className="flex flex-row items-center flex-nowrap gap-6"
        >
          {experiences.map((item) => (
            <div className="shrink-0" key={item.id}>
              <Image
                src={item.src}
                alt={item.alt}
                preview={false}
                className="rounded-full max-w-sm 2xl:max-w-md"
              />
            </div>
          ))}
        </InfiniteScroller>

        <InfiniteScroller
          direction="horizontal"
          reverse={true}
          loop={true}
          className="flex flex-row-reverse items-center flex-nowrap gap-6"
        >
          {experiences.map((item) => (
            <div className="shrink-0" key={item.id}>
              <Image
                src={item.src}
                alt={item.alt}
                preview={false}
                className="rounded-full max-w-sm 2xl:max-w-md"
              />
            </div>
          ))}
        </InfiniteScroller>
      </Row>
    </>
  );
};

export default Experience;
