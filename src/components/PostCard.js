import React from 'react'
import Posts from './Posts'
import SocialFollow from "./SocialFollow"

function PostCard(){


    return(
        <div>
            <header class="blog-header pure-g">
            <div class="pure-u-1">
                <div className="blogTitle">
                    <h1 class="blog-title">
                    Welcome to My Blog
                    </h1>

                </div>
                 <p class="blog-subtitle">My tips and thoughts  on Brewing </p>
                <SocialFollow/>
                
            </div>
        </header>
        <div className='blogBody'>
            <div >
                <Posts/>
            </div>
        </div>
            
            
        </div>
    )
}
export default PostCard; 