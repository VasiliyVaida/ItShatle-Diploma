import React, { ReactElement } from 'react';
import './styles.scss';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;
const navItems = [
  { name: 'Posts', link: '/posts' },
  { name: 'Albums', link: '/albums' },
  { name: 'Todos', link: '/todos' },
  { name: 'Users', link: '/users' },
];

interface IProps {
  children: any;
  // children: ReactElement[] | ReactElement;
}

const PageWrapper = (props: IProps) => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
          {navItems.map((item, index) => {
            const key = index + 1;
            return (
              <Menu.Item key={key}>
                <Link to={item.link}>{item.name}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">{props.children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}></Footer>
    </Layout>
  );
};

export default PageWrapper;
