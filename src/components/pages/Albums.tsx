import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { ALBUMS_ENDPOINT, PHOTOS_ENDPOINT } from '../../constatnts/endpoints';
import { IUsersContext, usersContext } from '../../context';
import AlbumsTable from '../UI/AlbumsTable/AlbumsTable';
import PageWrapper from '../wrappers/PageWrapper/PageWrapper';

const Albums = () => {
  interface IAlbum {
    userId: number;
    id: number;
    title: string;
  }

  interface IPhoto {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  }

  const [albums, setAlbums] = useState<IAlbum[]>([]);
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const { users } = useContext<IUsersContext>(usersContext);

  const fetchAlbums = async () => {
    const response = await axios.get<IAlbum[]>(ALBUMS_ENDPOINT);
    setAlbums(response.data);
  };
  const fetchPhotos = async () => {
    const response = await axios.get<IPhoto[]>(PHOTOS_ENDPOINT);
    setPhotos(response.data);
  };

  useEffect(() => {
    fetchAlbums();
    fetchPhotos();
  }, []);

  return (
    <PageWrapper>
      <AlbumsTable albumsData={albums} photosData={photos} usersData={users} />
    </PageWrapper>
  );
};

export default Albums;
