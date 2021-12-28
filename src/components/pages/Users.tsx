import React, { useContext } from 'react';
import PageWrapper from '../wrappers/PageWrapper/PageWrapper';
import { usersContext, IUsersContext } from './../../context/index';
import { List, Card } from 'antd';

const Users = () => {
  const { users } = useContext<IUsersContext>(usersContext);

  const listData = users?.map((user) => {
    return {
      title: user.name,
      id: user.id,
      email: user.email,
    };
  });

  return (
    <PageWrapper>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        dataSource={listData}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.title}>
              <div className="users-card__body">
                <p className="users-card__id">{`Id: ${item.id}`}</p>
                <p className="users-card__mail">{`E-mail: ${item.email}`}</p>
              </div>
            </Card>
          </List.Item>
        )}
      />
    </PageWrapper>
  );
};

export default Users;
