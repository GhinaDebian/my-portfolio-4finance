import React from "react";
import "./BlogCard.scss";
import { Button } from "@mui/material";

const BlogCard = (props) => {
  const { id, title, author, date, content, tags, onClick, buttonMessage } =
    props;
  return (
    <div className="blogCard">
      <h1>Person {id}</h1>
      <p>{title}</p>
      <p>
        by {author}, {date}
      </p>
      <p>{content}</p>
      <br />
      <p>
        {tags.map((element) => {
          return <>{element + ", "}</>;
        })}
      </p>
      <Button variant="outlined" onClick={onClick}>
        {buttonMessage}
      </Button>
    </div>
  );
};

export default BlogCard;
