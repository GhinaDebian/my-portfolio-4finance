import React from "react";
import "../card/Card.scss";
import { Button } from "@mui/material";

function PostCard({ title, url, id }) {
  return (
    <div className="appCard">
      this is my ID: {id}
      <span className="app-container">{title}</span>
      <span>
        <img src={url} alt={title} width={150} height={150} />
      </span>
      <div className="">
        <Button variant="contained" color="success" size="small">
          See More
        </Button>

        <Button variant="contained" color="error" size="small">
          Delete
        </Button>
      </div>
    </div>
  );
}

export default PostCard;
