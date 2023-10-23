import React from "react";
import {
  Button,
  Col,
  Image,
  List,
  Row,
  Space,
  Typography,
  Divider,
} from "antd";
import Label from "../../components/Label";
import { blogs } from "../../utils";
import Article from "../../components/Article";

const { Title, Text } = Typography;

const Blogs = (props) => {
  return (
    <div className="p-20 flex flex-col items-center" {...props}>
      <Title className="m-0 md:text-5xl">Recent Articles</Title>
      <div className="flex flex-row items-center flex-nowrap gap-8 overflow-x-scroll pb-16 pt-12">
        {blogs.map((item) => (
          <Article
            key={item.id}
            imgSrc={item.imgSrc}
            imgAlt={item.imgAlt}
            title={item.title}
            label={item.label}
            action={item.action}
            className="w-72 h-80"
          />
        ))}
      </div>
      <Button type="primary" shape="round">
        Read all blogs
      </Button>
    </div>
  );
};

export default Blogs;
