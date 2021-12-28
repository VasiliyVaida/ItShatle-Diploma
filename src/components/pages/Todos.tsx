import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { TODOS_ENDPOINT } from '../../constatnts/endpoints';
import PageWrapper from '../wrappers/PageWrapper/PageWrapper';
import { usersContext, IUsersContext, IUser } from './../../context/index';
import TodosCard from './../UI/TodosCard/TodosCard';
import { Input, Card } from 'antd';
import SelectTodos from '../UI/Select/SelectTodos';
import { Button, Radio } from 'antd';

const Todos = () => {
  interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

  const { users } = useContext<IUsersContext>(usersContext);
  const [todos, setTodos] = useState<ITodo[]>([]);

  const [searchUserValue, setSearchUserValue] = useState('');
  const [searchDealValue, setSearchDealValue] = useState('');
  const [searchStatusValue, setSearchStatusValue] = useState('');
  const [sortedCardData, setSortedCardData] = useState([]);
  const [filterTodo, setFilterTodo] = useState(false);

  const fetchTodos = async () => {
    const response = await axios.get<ITodo[]>(TODOS_ENDPOINT);
    setTodos(response.data);
  };

  const cardData = todos.map((todosPoint) => {
    const user = users?.find((user) => user.id === todosPoint.userId);
    const card = { ...todosPoint, ...user };
    return card;
  });

  const cards = sortedCardData.length === 0 ? cardData : sortedCardData;
  console.log(cards);

  useEffect(() => {
    fetchTodos();
  }, []);

  useEffect(() => {
    const sortedCardData: any = cardData.filter((card) => card.name?.includes(searchUserValue) && card.title.includes(searchDealValue));
    console.log(sortedCardData);

    setSortedCardData(sortedCardData);
  }, [filterTodo]);

  return (
    <PageWrapper>
      <div className="todos__filters-wrapper">
        <Input placeholder="Введите имя" onChange={(e) => setSearchUserValue(e.target.value)} />
        <Input placeholder="Введите название" onChange={(e) => setSearchDealValue(e.target.value)} />
        {/* <SelectTodos changingValue={searchStatusValue} onChange={(status: any) => setSearchStatusValue(status)} defaultValue="Выеберите статус" statusCompleted="Completed" statusNotCompeted="Not completed" /> */}
        <SelectTodos changingValue={searchStatusValue} onChange={setSearchStatusValue} defaultValue="Выеберите статус" statusCompleted="Completed" statusNotCompeted="Not completed" />
        <Button onClick={() => setFilterTodo(!filterTodo ? true : false)} type="primary">
          Искать
        </Button>
      </div>
      <div className="cards-wrapper">
        {cards.map((card) => {
          return (
            <div className="todos__cards-wrapper">
              <TodosCard title={card.title} cardData={card} checked={card.completed} />
            </div>
          );
        })}
      </div>
    </PageWrapper>
  );
};

export default Todos;
