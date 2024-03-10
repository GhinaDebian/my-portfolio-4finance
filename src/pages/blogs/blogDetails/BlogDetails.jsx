import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogData, people } from "../../../utils/dummyData";
import BlogCard from "../../../components/blogCard/BlogCard";

const BlogDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { blog_id } = params;
  const filteredUser = blogData.filter((element) => element.id === +blog_id);
  console.log("params", params);
  return (
    <div>
      {filteredUser.length ? (
        filteredUser.map((blog) => (
          <BlogCard
            id={blog?.id}
            title={blog?.title}
            author={blog?.author}
            date={blog?.date}
            content={blog?.content}
            tags={blog?.tags}
            onClick={() => navigate("../../blogs")}
            buttonMessage="View All Profiles"
          />
        ))
      ) : (
        <h1>No User Found</h1>
      )}
    </div>
  );
};

export default BlogDetails;
