import React from "react";
import { Button, Image, Typography } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import Studio1 from "../../assets/images/studio-1.svg";
import Studio2 from "../../assets/images/studio-2.svg";
import Studio3 from "../../assets/images/studio-3.svg";
import Studio4 from "../../assets/images/studio-4.svg";
const { Title } = Typography;

const StudioWelcome = (props) => {
  return (
    <div
      className="flex flex-col items-center gap-12 md:gap-20 p-20 bg-black"
      {...props}
    >
      <div className="flex flex-col lg:w-8/12">
        <Title className="m-0 text-lg sm:text-4xl text-white">Powered by</Title>
        <Title className="m-0 text-4xl sm:text-6xl md:text-9xl text-white">
          Welcome
        </Title>
        <Title className="m-0 text-4xl sm:text-6xl md:text-9xl text-white lg:self-end">
          Studio
        </Title>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-3">
          <Image preview={false} src={Studio1} alt="studio-1" />
        </div>
        <div className="col-span-1 hidden md:block">
          <Image preview={false} src={Studio2} alt="studio-2" />
        </div>
        <div className="col-span-1 hidden md:block">
          <Image preview={false} src={Studio3} alt="studio-4" />
        </div>
        <div className="col-span-1 hidden md:block">
          <Image preview={false} src={Studio4} alt="studio-3" />
        </div>
      </div>
      <Button type="default" shape="round" ghost>
        See all studios <ArrowRightOutlined />
      </Button>
    </div>
  );
};

export default StudioWelcome;
