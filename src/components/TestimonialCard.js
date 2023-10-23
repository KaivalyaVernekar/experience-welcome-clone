import React from "react";
import { Avatar, Card, Image, Typography } from "antd";
import Label from "./Label";

const { Text } = Typography;
const { Meta } = Card;

const TestimonialCard = (props) => {
  const {
    meta,
    profileImg,
    name,
    description,
    companyLogo,
    children,
    className = "md:w-9/12 lg:w-6/12 xl:w-4/12",
  } = props;

  return (
    <div
      className={`pt-8 pr-8 border-t-2 border-r-2 border-l-0 border-b-0 border-solid border-white rounded-tr-[56px] w-full ${className}`}
    >
      <Label title={<Text className="text-white">{description}</Text>}>
        {name && (
          <Meta
            avatar={
              profileImg && (
                <Avatar
                  className="sm:w-12 sm:h-12 md:w-16 md:h-16"
                  src={profileImg}
                  alt={name}
                />
              )
            }
            title={<Text className="text-white">{name}</Text>}
            description={<Text className="text-white/[.65]">{meta}</Text>}
            className="flex flex-row items-center gap-4 my-8"
          />
        )}
        {companyLogo && name && (
          <Image
            preview={false}
            src={companyLogo}
            alt={`${name}'s company`}
            className="max-h-20"
          />
        )}
      </Label>
      {children}
    </div>
  );
};

export default TestimonialCard;
