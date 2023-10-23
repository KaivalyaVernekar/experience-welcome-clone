import React from "react";
import { Button, Typography } from "antd";
import Label from "../../components/Label";
import StudioWelcome from "./studio";

const { Title, Text } = Typography;

const Studio = (props) => {
  return (
    // <div>
    <>
      <div className="bg-studio-pattern bg-contain lg:bg-cover bg-no-repeat pl-20 py-72 hidden lg:block">
        <div className="flex flex-wrap w-6/12">
          <Label
            title={
              <Title className="m-0 text-white">
                “Makes other platforms look like the 1990’s”
              </Title>
            }
            description={
              <Text className="text-white/[0.65]">
                -Nate Skinner, CMO at Onfido
              </Text>
            }
          >
            <Button type="default mt-9" shape="round" ghost>
              Read customer stories
            </Button>
          </Label>
        </div>
      </div>
      <StudioWelcome />
    </>
  );
};

export default Studio;
