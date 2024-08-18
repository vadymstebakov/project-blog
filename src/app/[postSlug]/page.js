import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';

import COMPONENT_MAP from '@/helpers/mdx-components';
import { loadBlogPost } from '@/helpers/file-helpers';
import { BLOG_TITLE } from '@/constants';
import BlogHero from '@/components/BlogHero';
import styles from './postSlug.module.css';

export async function generateMetadata({ params: { postSlug } }) {
  const post = await loadBlogPost(postSlug);

  return {
    title: `${post.frontmatter.title} • ${BLOG_TITLE}`,
    description: post.frontmatter.abstract,
  };
}

async function BlogPost({ params: { postSlug } }) {
  const post = await loadBlogPost(postSlug);

  return (
    <article className={styles.wrapper}>
      <BlogHero title={post.frontmatter.title} publishedOn={post.frontmatter.publishedOn} />
      <div className={styles.page}>
        <MDXRemote source={post.content} components={COMPONENT_MAP} />
      </div>
    </article>
  );
}

export default BlogPost;
