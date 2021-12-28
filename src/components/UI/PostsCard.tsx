import React, { useState } from 'react';
import { Card } from 'antd';
import './PostCard.scss';
import PostsModal from './PostsModal/PostsModal';
import PostComment from './PostComment/PostComment';

const PostsCard = ({ data, userName, comments }: any) => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <PostsModal visible={visible} setVisible={setVisible}>
        <Card title={data.title} bordered={true} style={{ width: 300 }}>
          <p className="card__point--user">{userName}</p>
          <p className="card__point--body">{data.body}</p>
          <button onClick={() => setVisible(false)} className="card__point--btn">
            Close comments
          </button>
          <div className="card__post-comments">
            {comments.map((comment: any) => {
              return <PostComment email={comment.email} text={comment.body} key={comment.id} />;
            })}
          </div>
        </Card>
      </PostsModal>
      <Card title={data.title} bordered={true} style={{ width: 300, margin: '0 auto' }}>
        <p className="card__point--user">{userName}</p>
        <p className="card__point--body">{data.body}</p>
        <button onClick={() => setVisible(true)} className="card__point--btn">
          Show comments
        </button>
      </Card>
    </div>
  );
};

export default PostsCard;
