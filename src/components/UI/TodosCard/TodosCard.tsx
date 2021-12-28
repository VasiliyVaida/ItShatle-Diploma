import React from 'react';
import { Card } from 'antd';
import PopOver from '../PopOver/PopOver';

const TodosCard = ({ title, cardData, checked }: any) => {
  return (
    <div className="site-card-border-less-wrapper">
      <Card title={title} bordered={true} style={{ width: 300 }}>
        <PopOver user={cardData} />
        <input type="checkbox" checked={checked} />
      </Card>
    </div>
  );
};

export default TodosCard;
