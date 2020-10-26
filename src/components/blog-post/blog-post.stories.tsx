import * as React from 'react';
import BlogPost from './';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Blog Post',
  component: BlogPost,
  decorators: [withKnobs],
};

export const blogPost = (): JSX.Element => (
  <div style={{ width: '370px' }}>
    <BlogPost
      img={<img src="./biomass.png" alt="biomass" />}
      header={text('header', 'This is a blog post header')}
      url={text('url', 'https://medium.com/regen-network')}
      description={text('description', 'This is a blog post description')}
    />
  </div>
);
