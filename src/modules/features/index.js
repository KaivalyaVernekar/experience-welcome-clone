import React from "react";
import { Button, Image, Typography } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

import Exp1 from "../../assets/images/exp-1.svg";
import Exp2 from "../../assets/images/exp-2.svg";
import Exp3 from "../../assets/images/exp-3.svg";
import Exp4 from "../../assets/images/exp-4.svg";
import Exp5 from "../../assets/images/exp-5.svg";

const { Title } = Typography;

const Features = (props) => {
  return (
    <div
      className="flex flex-col items-center gap-12 md:gap-20 p-20"
      {...props}
    >
      <Title className="m-0 text-lg sm:text-4xl">
        An unmatched attendee <br />{" "}
        <Title className="m-0 text-4xl sm:text-7xl md:text-8xl lg:text-9xl">
          Experience
        </Title>
      </Title>
      <div className="flex flex-col gap-6">
        <Image preview={false} src={Exp1} alt="feature-1" />
        <div className="flex flex-row gap-6">
          <Image preview={false} src={Exp2} alt="feature-2" />
          <Image preview={false} src={Exp4} alt="feature-4" />
        </div>
        <div className="hidden md:flex md:flex-row gap-6">
          <Image preview={false} src={Exp3} alt="feature-3" />
          <Image preview={false} src={Exp5} alt="feature-5" />
        </div>
      </div>
      <Button type="default" shape="round">
        See all features <ArrowRightOutlined />
      </Button>
    </div>
  );
};

export default Features;
