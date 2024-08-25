import React from "react";
import "./BlogCard.scss";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const BlogCard = (props) => {
  const { id, title, content, buttonEnabled = true } = props;
  return (
    <div className="blogCard">
      <p className="title">{title}</p>
      <p>{content}</p>
      {buttonEnabled ? (
        <Button component={Link} to={"/blog-details/" + String(id)}>
          See More
        </Button>
      ) : null}
    </div>
  );
};

export default BlogCard;
