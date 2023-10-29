import React from 'react';
import { Button, Card, Image, Typography } from 'antd';
import Label from './Label';

const { Text } = Typography;

const Article = (props) => {
  const { imgSrc, imgAlt, title, label, action, ...restProps } = props;
  return (
    <Card
      hoverable
      cover={imgSrc && <Image preview={false} alt={imgAlt} src={imgSrc} />}
      {...restProps}
    >
      <Label label={<Text>{label}</Text>} title={<Text ellipsis>{title}</Text>}>
        <Button type="link" className="p-0">
          {action}
        </Button>
      </Label>
    </Card>
  );
};

export default Article;
