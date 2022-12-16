import React from "react";
import { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput
 from "./UI/input/MyInput";
const PostForm = ({create,remove}) => {

    const [post, setPost] = useState({title: "", body: "" })

    function AddNewPost(event) {
        event.preventDefault()
    
        const newPost = {
          id: Date.now,
          title: post.title,
          body:  post.body
        }

        create(newPost)
        setPost({title: "", body: "" })
    }

    return (
            <form>
            <MyInput type="text" 
                    value={post.title} 
                    onChange={ e => setPost({...post, title:e.target.value})} 
                    placeholder="Title"/>
            <MyInput type="text" 
                    value={post.body} 
                    onChange={ e => setPost({...post, body:e.target.value})}  
                    placeholder="Desc"/>

            <MyButton disabled={false} onClick={AddNewPost}>Create Post</MyButton>
            </form>
    );
};

export default PostForm;