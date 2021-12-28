import React from 'react';
import './PostsModal.scss';

const PostsModal = ({ children, visible }: any) => {
  return (
    <div className={visible ? 'posts-modal__active' : 'posts-modal'}>
      <div className="posts-modal__content">{children}</div>
    </div>
  );
};

export default PostsModal;
