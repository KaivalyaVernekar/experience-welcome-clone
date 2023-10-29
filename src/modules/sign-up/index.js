import React from 'react';
import { Col, Row, Typography } from 'antd';
import Input from 'rc-input';

const { Title, Text } = Typography;

const SignUp = (props) => {
  return (
    <div className="p-8 md:p-20 bg-gradient-to-r from-pink-500 from-10% via-red-500 via-40% to-black to-70%">
      <Row gutter={[8, 60]}>
        <Col span={24}>
          <Title className="text-3xl sm:text-4xl md:text-6xl text-white text-center md:text-start">
            Signup for the <br className="hidden md:block" /> newsletter
          </Title>
        </Col>
        <Col span={24}>
          <div className="flex flex-col md:flex-row justify-between">
            <Text className="text-white order-last md:order-first text-center md:text-start md:self-end mt-8 md:mt-0 cursor-pointer">
              Stay connected
            </Text>
            <div className="flex flex-col gap-7 order-first md:order-last">
              <Input
                placeholder="First name"
                bordered={false}
                className="bg-transparent py-2 border-b-2 border-t-0 border-r-0 border-l-0 text-white"
              />
              <Input
                placeholder="Email"
                bordered={false}
                className="bg-transparent py-2 border-b-2 border-t-0 border-r-0 border-l-0 text-white"
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SignUp;
