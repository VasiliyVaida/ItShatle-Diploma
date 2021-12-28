import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { COMMENTS_ENDPOINT, POSTS_ENDPOINT } from '../../constatnts/endpoints';
import PostsCard from '../UI/PostsCard';
import PageWrapper from '../wrappers/PageWrapper/PageWrapper';
import { usersContext, IUsersContext } from './../../context/index';
import './Posts.scss';

const Posts = () => {
  interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  interface IComment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  }

  const [posts, setPosts] = useState<IPost[]>([]);
  const [comments, setComments] = useState<IComment[]>([]);

  const { users } = useContext<IUsersContext>(usersContext);

  const fetchPosts = async () => {
    const response = await axios.get<IPost[]>(POSTS_ENDPOINT);
    setPosts(response.data);
  };

  const fetchComments = async () => {
    const responce = await axios.get<IComment[]>(COMMENTS_ENDPOINT);
    setComments(responce.data);
  };

  useEffect(() => {
    fetchPosts();
    fetchComments();
  }, []);

  return (
    <PageWrapper>
      <div className="cards-wrapper">
        {posts.map((post: IPost) => {
          const user = users?.find((item) => item.id === post.userId);
          const userName = user?.name;
          const postComments = comments.filter((comment) => comment.postId === post.id);
          return (
            <div className="card-wrapper">
              <PostsCard style={{ margin: '0 auto' }} key={post.id} data={post} userName={userName} comments={postComments} />
            </div>
          );
        })}
      </div>
    </PageWrapper>
  );
};

export default Posts;
