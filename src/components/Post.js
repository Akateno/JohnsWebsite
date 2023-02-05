import React from "react";

const Post = ({ post: { title, body,
date }, index }) => {
  return (  

    <div class="card justify-content-center">

    











      <h1 class="text-center">BLOG POSTS</h1>
      <div class="card-body">
        <h1 class="card-title">{title}</h1>
        <h3>{date}</h3>
        <p class="card-text text-center">{body}</p>
      </div>
    </div>
    
  );
};
  
export default Post;