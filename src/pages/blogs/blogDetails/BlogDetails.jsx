import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { blogData, people } from "../../../utils/dummyData";
import BlogCard from "../../../components/blogCard/BlogCard";
import axios from "axios";
import { Button } from "@mui/material";

const BlogDetails = () => {
  const params = useParams();
  const { blog_id } = params;
  const [post, setPosts] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const getPostById = () => {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${blog_id}`)
        .then((res) => setPosts(res.data)) //positive feedback
        .catch((err) => setError(true)) //negative feedback
        .finally(() => setLoading(false));
    };
    getPostById();
  }, [blog_id]);

  if (loading) return <>Loading...</>;
  return (
    <div>
      <Button component={Link} variant="outlined" to={"/blogs"}>
        Back
      </Button>
      {!error ? (
        <BlogCard
          title={post.title}
          content={post.body}
          id={post.id}
          buttonEnabled={false}
        />
      ) : (
        <h1>404 not found, try different param</h1>
      )}
    </div>
  );
};

export default BlogDetails;
