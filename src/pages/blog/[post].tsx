// Copyright (C) Jheyson Saavedra ~ All right reserved.
import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from 'src/components/Layout';
import axios from 'axios';
import marked from 'marked';
import { useEffect, useState } from 'react';
import RequestError from 'src/components/RequestError';

function PostPage(): JSX.Element {
  const router = useRouter();
  const { post } = router.query;
  const [isLoading, setIsLoading] = useState(true);
  const [postContent, setPostContent] = useState('');

  useEffect(() => {
    if (post != undefined) {
      try {
        const fetchData = async () => {
          try {
            let res = await axios.get(`/posts/${post}.md`);
            setPostContent(marked(res.data));
            setIsLoading(false);
          } catch (e) {
            console.log(e);
            setIsLoading(false);
          }
        };
        fetchData();
      } catch (e) {
        console.log(e);
        setIsLoading(false);
      }
    }
  });

  return (
    <Layout title={post ? `${post}` : 'Loading...'} header>
      <div dangerouslySetInnerHTML={{ __html: postContent }} />
      {isLoading ? (
        <div className="grid justify-center text-center no-select">
          <Image src="/img/loading.svg" width={450} height={450} />
          <span className="font-bold text-2xl md:text-4xl text-gray-800 dark:text-opacity-75 dark:text-gray-200">
            Loading...
          </span>
        </div>
      ) : (
        ''
      )}
    </Layout>
  );
}

export default PostPage;
