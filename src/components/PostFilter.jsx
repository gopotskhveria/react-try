import React from "react";
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";
import { useMemo, useState } from "react";

const PostFilter = ({filter,setFilter}) => {
     const [options, _] = useState([
        {name:"By Tittle", value:"title"},
        {name:"By Body", value:"body"},
      ])

     return (
        <div> 
        <MyInput value={filter.query} onChange={e => setFilter({...filter, query: e.target.value})}/>
       
        <MySelect defaultValue="Default Sort"   
                  value={filter.sort}
                  options={options}
                  change={ v => setFilter({...filter, sort: v})}  />        
         
      </div>
     );
}

export default PostFilter;