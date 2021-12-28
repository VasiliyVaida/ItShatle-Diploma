import React from 'react';
import { Select } from 'antd';

const SelectTodos = ({ defaultValue, statusCompleted, statusNotCompeted, changingValue, onChange }: any) => {
  const { Option } = Select;

  return (
    <Select onChange={(value: string) => onChange(value)} defaultValue={defaultValue} style={{ width: 200 }}>
      <Option value="disabled" disabled>
        {defaultValue}
      </Option>
      <Option value={statusCompleted}>{statusCompleted}</Option>
      <Option value={statusNotCompeted}>{statusNotCompeted}</Option>
    </Select>
  );
};

export default SelectTodos;
