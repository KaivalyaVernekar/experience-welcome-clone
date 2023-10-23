import React from "react";
import { Typography } from "antd";
import { opportunities } from "../../utils/index";

const { Title, Text } = Typography;

const Opportunities = (props) => {
  return (
    <div gutter={[8, 60]} className="p-20 bg-black flex flex-col gap-16">
      <Title className="m-0 mb-0 text-white text-5xl md:text-7xl lg:text-8xl text-center">
        Endless <br className="hidden lg:block" /> Opportunities
      </Title>

      <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-6 sm:gap-8 justify-items-center">
        {opportunities.map((item) => (
          <Text className="text-white cursor-pointer">{item}</Text>
        ))}
      </div>
    </div>
  );
};

export default Opportunities;
