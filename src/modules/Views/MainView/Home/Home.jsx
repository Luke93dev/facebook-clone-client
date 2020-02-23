import React, { useState, useEffect } from 'react';
import HttpService from 'modules/Network/HttpService';

import styles from './Home.scss';

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const result = await HttpService.request('/posts');
    setData(result);
  };

  const renderPost = (post) => (
    <div className={styles.Post} key={post.id}>
      <div className={styles.PostTitle}>
        Author:
        {post.author}
      </div>
      <div>{post.content}</div>
    </div>
  );

  return <div>{data.map((post) => renderPost(post))}</div>;
}

export default Home;
