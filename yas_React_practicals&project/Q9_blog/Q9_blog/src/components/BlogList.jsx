import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const blogs = [
    { id: 1, title: 'React Basics', description: 'Learn the basics of React and how to get started.' },
    { id: 2, title: 'Understanding React Router', description: 'A guide to using React Router for navigation.' },
    { id: 3, title: 'State Management in React', description: 'An introduction to managing state in React applications.' },
  ];

  return (
    <div>
      <h1 className="text-center mb-4">Blog List</h1>
      <ul className="list-group">
        {blogs.map((blog) => (
          <li key={blog.id} className="list-group-item">
            <h3>
              <Link to={`/blogs/${blog.id}`} className="text-decoration-none">
                {blog.title}
              </Link>
            </h3>
            <p>{blog.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
