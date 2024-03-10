import React from "react";
import { blogData, people } from "../../utils/dummyData";
import "./Blogs.scss";
import BlogCard from "../../components/blogCard/BlogCard";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  let navigate = useNavigate();
  return (
    <div className="blogs">
      {blogData.map((blog) => (
        <BlogCard
          id={blog?.id}
          title={blog?.title}
          author={blog?.author}
          date={blog?.date}
          content={blog?.content}
          tags={blog?.tags}
          onClick={() => navigate("/blog-details/" + blog?.id)}
          buttonMessage="View Profile"
        />
      ))}
    </div>
  );
};

export default Blogs;
