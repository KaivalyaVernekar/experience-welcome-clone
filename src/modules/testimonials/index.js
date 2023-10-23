import React from "react";
import { Typography, Carousel } from "antd";

import { testimonials } from "../../utils/index";
import TestimonialCard from "../../components/TestimonialCard";

const { Title } = Typography;

const Testimonials = (props) => {
  const getTestimonialList = (data = {}) =>
    testimonials.map((item) => (
      <div {...data}>
        <TestimonialCard
          name={item.name}
          meta={item.meta}
          companyLogo={item.companyLogo}
          profileImg={item.profileImg}
          description={item.description}
          className=""
        />
      </div>
    ));

  return (
    <div
      className="px-20 py-36 bg-testimonials-pattern bg-cover bg-no-repeat text-white"
      {...props}
    >
      <div className="flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-0 mb-16 md:mb-24">
        <Title className="m-0 text-5xl sm:text-6xl md:text-7xl text-black">
          Loved & <br className="hidden md:block" /> trusted
        </Title>
      </div>

      <div className="lg:flex lg:flex-row gap-12 hidden">
        {getTestimonialList()}
      </div>
      <Carousel className="block lg:hidden" autoplay>
        {getTestimonialList({
          className: "w-full overflow-hidden flex items-center",
        })}
      </Carousel>
    </div>
  );
};

export default Testimonials;
