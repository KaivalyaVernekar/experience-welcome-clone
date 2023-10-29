import React from 'react';
import { Space, Typography, Divider } from 'antd';
import Label from '../../components/Label';

import CountUp from '../../components/CountUpAnimator';
import revenue from '../../assets/images/revenue.svg';

const { Title, Text } = Typography;

const Revenue = (props) => {
  return (
    <div className="px-8 py-12 md:px-20 md:py-36 bg-[#F5F5F5]" {...props}>
      <div className="flex flex-col md:flex-row justify-between gap-16 md:items-center">
        <div>
          <Title className="m-0 md:text-6xl lg:text-7xl xl:text-8xl">
            Drive
          </Title>
          <div className="flex flex-row items-center gap-2 sm:gap-4">
            <img
              src={revenue}
              alt="revenue"
              className="rounded-full max-w-[25%]"
            />
            <Title className="m-0 md:text-6xl lg:text-7xl xl:text-8xl">
              Revenue
            </Title>
          </div>
        </div>
        <div>
          <Space direction={'vertical'} split={<Divider type={'horizontal'} />}>
            <Label
              title={
                <Title className="m-0 text-2xl sm:text-3xl md:text-4xl">
                  +<CountUp value={87} />%
                </Title>
              }
              description={
                <Text>increased attendee engagement at Bitwise</Text>
              }
            />
            <Label
              title={
                <Title className="m-0 text-2xl sm:text-3xl md:text-4xl">
                  $<CountUp value={17} />M
                </Title>
              }
              description={<Text>pipeline generated at Everbridge</Text>}
            />
            <Label
              title={
                <Title className="m-0 text-2xl sm:text-3xl md:text-4xl">
                  <CountUp value={58} />%
                </Title>
              }
              description={<Text>attendee conversion rate at Interfolio</Text>}
            />
          </Space>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
