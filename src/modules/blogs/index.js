import React from 'react';
import { Button, Carousel, Typography } from 'antd';

import { blogs } from '../../utils';
import Article from '../../components/Article';

const { Title } = Typography;

const Blogs = (props) => {
  const getBlogList = (className = '') =>
    blogs.map((item) => (
      <Article
        key={item.id}
        imgSrc={item.imgSrc}
        imgAlt={item.imgAlt}
        title={item.title}
        label={item.label}
        action={item.action}
        className={className}
      />
    ));
  return (
    <div className="p-8 md:p-20 flex flex-col" {...props}>
      <Title className="m-0 md:text-5xl self-center">Recent Articles</Title>
      <div className="hidden md:flex md:flex-row items-center md:flex-nowrap md:overflow-x-auto gap-8 pb-16 pt-12 self-center">
        {getBlogList('w-72 h-80')}
      </div>
      <Carousel
        autoplay
        className="flex flex-row items-center flex-nowrap gap-8 pb-16 pt-12 md:hidden"
      >
        {getBlogList()}
      </Carousel>
      <Button type="primary" shape="round" className="self-center">
        Read all blogs
      </Button>
    </div>
  );
};

export default Blogs;
