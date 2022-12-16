import React from "react";
import { TransitionGroup,CSSTransition} from "react-transition-group";
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {

   if (!posts.length)  {
      return  (
         <h1 style={{textAlign: "center"}} > 
             Post Not Found
          </h1>
      )
   }

   return (
      <div className="app">
      <h1> {title}</h1>
       <TransitionGroup> 
       {posts.map((post, idx) =>

        <CSSTransition
          key={post.id}
          timeout={500}
          classNames="post"
          >
          <PostItem remove={remove} number={idx+1} post={post} /> 
        </CSSTransition>
        
       )}

        </TransitionGroup>
      </div>
   )
}

export default PostList