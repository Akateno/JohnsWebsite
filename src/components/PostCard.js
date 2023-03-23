import React from 'react'
import Posts from './Posts'

function PostCard(){


    return(
        <div>
            <header class="blog-header pure-g">
            <div class="pure-u-1">
                <h1 class="blog-title">
                    Welcome to My Blog
                </h1>
                <p class="blog-subtitle">
                    My tips and thoughts  on Brewing 
                </p>
            </div>
        </header>
            <Posts/>
        </div>
    )
}
export default PostCard; 