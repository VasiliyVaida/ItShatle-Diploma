import React from 'react';
import { Button, Popover } from 'antd';

const PopOver = ({ user }: any) => {
  const content = (
    <div>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <p>Phone: {user?.phone}</p>
      <p>Street: {user?.address?.street}</p>
      <p>Suite: {user?.address?.suite}</p>
      <p>City: {user?.address?.city}</p>
    </div>
  );
  return (
    <div className="todos__popOver-wrapper">
      <Popover content={content} title="Person`s info">
        <Button type="primary">{user?.name}</Button>
      </Popover>
    </div>
  );
};

export default PopOver;
