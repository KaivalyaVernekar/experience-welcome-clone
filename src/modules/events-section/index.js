import React from "react";
import { Button, Image, Typography } from "antd";
import Label from "../../components/Label";

import JoinUs from "../../assets/images/sign-up.svg";
import TestimonialCard from "../../components/TestimonialCard";

const { Title, Text } = Typography;

const Events = (props) => {
  return (
    <div className="px-20 py-36 bg-black text-white" {...props}>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-0 mb-16 md:mb-24">
        <Title className="m-0 text-5xl sm:text-6xl md:text-7xl text-white">
          Join Us
        </Title>
        <Button type="default" ghost shape="round">
          All events
        </Button>
      </div>

      <div className="flex">
        <TestimonialCard
          description={
            <Label
              label={<Text className="text-white mb-4">December 21, 2022</Text>}
              title={
                <Title className="m-0 text-white text-2xl sm:text-4xl lg:text-5xl  mb-6 xl:w-3/4">
                  Attention-Grabbing Marketing in a Noisy Market
                </Title>
              }
            >
              <Button type="primary" shape="round">
                Register
              </Button>
            </Label>
          }
          className="flex flex-col md:flex-row flex-auto md:w-9/12 lg:w-6/12 xl:w-4/12"
        >
          <Image preview={false} src={JoinUs} alt="sign-up" />
        </TestimonialCard>
      </div>
    </div>
  );
};

export default Events;
