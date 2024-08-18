import React from 'react';

import BlogSummaryCard from '@/components/BlogSummaryCard';
import { getBlogPostList } from '@/helpers/file-helpers';

import styles from './homepage.module.css';

async function Home() {
  const blogPostList = await getBlogPostList();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>

      {blogPostList.map((item) => {
        return (
          <BlogSummaryCard
            key={item.slug}
            slug={item.slug}
            title={item.title}
            abstract={item.abstract}
            publishedOn={item.publishedOn}
          />
        );
      })}
    </div>
  );
}

export default Home;
