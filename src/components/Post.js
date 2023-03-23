import React from "react";
import Posts from './Posts'

const Post = ({ post: { title, body,
date }, index }) => {
  return (  

    <div className="blogContainer">
      
      {/* <div >
        <h1 >{title}</h1>
        <h4>{date}</h4>
        <p class='lead'>{body}</p>
      </div> */}


<div class="blog">
        <header class="blog-header pure-g">
            
        </header>
        <div class="blog-posts pure-g">
            <div class="pure-u-1 pure-u-md-1-2">
                <article class="blog-post">
                    <h2 class="blog-post-title">{title}</h2>
                    <p class="blog-post-date">{date}</p>
                    <p class="lead blog-post-content">
                        {body}
                    </p>
                </article>
            </div>
        </div>
    </div>
 
    </div>
    
  );
};
  
export default Post;