import React from 'react';
import { Table } from 'antd';
import { Item } from 'rc-menu';
import { useHistory } from 'react-router';

const AlbumsTable = ({ albumsData, photosData, usersData }: any) => {
  const router = useHistory();
  const tableData = albumsData.map((album: any) => {
    const urlPageNum = album.id;
    const tableButton = () => {
      return (
        <button onClick={() => router.push(`/albums/${urlPageNum}`)} className="action-btn">
          Show photos
        </button>
      );
    };

    const albumUser = usersData.find((item: any) => item.id === album.userId);
    return {
      key: Number(album.id),
      user: albumUser?.name,
      title: album.title,
      action: tableButton(),
    };
  });

  const columns = [
    {
      title: 'User name',
      dataIndex: 'user',
    },
    {
      title: 'Album title',
      dataIndex: 'title',
    },
    {
      title: 'Action',
      dataIndex: 'action',
    },
  ];
  // const tableData = [
  //   {
  //     key: '1',
  //     user: 'John Brown',
  //     title: 32,
  //     action: 'New York No. 1 Lake Park',
  //   },
  //   {
  //     key: '2',
  //     name: 'Jim Green',
  //     age: 42,
  //     address: 'London No. 1 Lake Park',
  //   },
  //   {
  //     key: '3',
  //     name: 'Joe Black',
  //     age: 32,
  //     address: 'Sidney No. 1 Lake Park',
  //   },
  // ];
  return (
    <div>
      <h4>Albums catalog</h4>
      <Table columns={columns} dataSource={tableData} size="middle" />
    </div>
  );
};

export default AlbumsTable;
