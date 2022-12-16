import React, { useEffect, useState } from "react";
import { useFetcher, useParams } from "react-router-dom";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loaders/Loader";
import { useFetching } from "../hooks/useFetching";


const PostPage = () => {

    const params = useParams()
    const [post,setPost] = useState({})
    const [comments, setComments] = useState([])

    const [fetchingPostById, isLoading, error] = useFetching(async (id) => { 
         const response = await PostService.getById(id)
         setPost(response.data)
    })

    const [fetchingComment, isCommentLoading, errorComment] = useFetching(async (id) => { 
      const response = await PostService.getCommentsByPostID(id)
      setComments(response.data)

 })

    useEffect( () => {
        fetchingPostById(params.id)
        fetchingComment(params.id)
    }, [] )
 
      return( 
        <div>
            <h1>Opened Post ID = {params.id}</h1>
            {isLoading 
             ? <Loader/>
             : <div> {post.id}. {post.title}</div>
            }

            <h1>Comments:</h1>

            {isLoading 
             ? <Loader/>
             : <div style={{marginTop:5}}> 
              
                {comments.map( comm =>
                 <div>
                   <h5>{comm.email} </h5>
                   <div> {comm.body} </div>
                 </div>
                 
                )}


               </div>
            }
            
           
       </div>
      );
};

export default PostPage;