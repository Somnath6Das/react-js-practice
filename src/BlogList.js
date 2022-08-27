import React from 'react'
import { Link } from "react-router-dom";

function BlogList({blogs, title }) {
  return (
    <div className="blog-list">
        <h2>{ title }</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
          <h2>{ blog.title }</h2>
          <p>Written by {blog.author}</p>
          </Link>
          <p>{blog.body}</p>
        </div>
      ))}
    </div>
  )
}
          

export default BlogList