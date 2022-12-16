import React, { useEffect, useMemo, useState } from "react";
import PostList from "../components/PostList";
import "../styles/app.css"
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/modal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import { usePosts } from "../hooks/usePosts";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loaders/Loader";
import { getPageCount } from "../utils/pages";
import Pagination from "../components/Pagination";

  const Posts = () => {

  const [posts, setPosts] = useState([])

  const [filter, setFilter] = useState({sort: "", query: ""})
  const [modal, setModal] = useState(false)
  const sortedAndSearched = usePosts(posts, filter.sort, filter.query)
   const [pagination, setPagination] = useState({ totalPages:0, limit: 10, page:1})
  
  const [postFetching, isLoading, fetchError] = useFetching( async () => {
       const response = await PostService.getAll(pagination.limit, pagination.page)
       setPosts(response.data)
       const totalCount = response.headers["x-total-count"]
       const totalPageCount = getPageCount(totalCount, pagination.limit)
       setPagination({...pagination, totalPages: totalPageCount}) 
  })
 
  useEffect(  () => {
     postFetching()
  }, [pagination.limit, pagination.page])
 
  const createPost = (post) => {
    console.log("createPost") 
    setPosts([...posts, post])
    setModal(false)
  }
  
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
   }
 
  return (
    <div className="app"> 
    <MyButton onClick={postFetching}> Fetch Posts </MyButton>
    <MyButton onClick={() => setModal(true)}>Create Post</MyButton>

    <MyModal visible={modal} setVisible={setModal}> 
    <PostForm create={createPost}   />
    </MyModal>
 
  
    <PostFilter filter={filter} setFilter={setFilter}/>

     {fetchError &&
         <h1> Error ${fetchError}</h1>
     }
 
     {isLoading 
        ?<div style={{display: 'flex', justifyContent: 'center'}}> <Loader/></div>
        :<PostList posts={sortedAndSearched} remove={removePost} title="Languages"/>
     }

      <Pagination pagination={pagination} 
                  setPagination={setPagination} 
                  postFetching={postFetching}/>

     </div>
  );
};

export default Posts; 