import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router';
import { PHOTOS_ENDPOINT } from '../../constatnts/endpoints';
import { IUsersContext, usersContext } from '../../context';
import PageWrapper from '../wrappers/PageWrapper/PageWrapper';
import './AlbumsPage.scss';

const AlbumPage = () => {
  interface IPhotos {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  }

  const history = useHistory();
  const albumId = history.location.pathname.slice(8, 11);
  const { users } = useContext<IUsersContext>(usersContext);
  const [photos, setPhotos] = useState<IPhotos[]>([]);

  const fetchPosts = async () => {
    const response = await axios.get<IPhotos[]>(`${PHOTOS_ENDPOINT}?albumId=${albumId}`);
    setPhotos(response.data);
  };

  useEffect(() => {
    fetchPosts();
    console.log(albumId);
  }, []);

  return (
    <PageWrapper>
      <div className="album-wrapper">
        {photos.map((photo) => {
          return (
            <div className="photo-wrapper">
              <div className="photo">
                <img src={photo.thumbnailUrl} alt="photo" />
              </div>
            </div>
          );
        })}
      </div>
    </PageWrapper>
  );
};

export default AlbumPage;
