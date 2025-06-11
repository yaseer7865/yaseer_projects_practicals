import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();

  const blogs = [
    { id: 1, title: 'React Basics', content: 'React is a JavaScript library for building user interfaces. It allows you to create reusable UI components.' },
    { id: 2, title: 'Understanding React Router', content: 'React Router is a library for routing in React applications. It enables navigation between different views or pages.' },
    { id: 3, title: 'State Management in React', content: 'State management in React involves managing the state of components. Tools like Redux or Context API can be used for this purpose.' },
  ];

  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <h1>Blog not found</h1>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogDetails;