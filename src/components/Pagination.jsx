import react, {useState} from 'react'
import { usePagination } from "../hooks/usePagination";
import MyButton from "./UI/button/MyButton";
import MySelect from "./UI/select/MySelect";

const Pagination = ({pagination, setPagination}) => {
      const paginationArr = usePagination(pagination.totalPages)
      
      const [options, _] = useState([
        {name:"5 page", value:"5"},
        {name:"10 page", value:"10"},
        {name:"20 page", value:"20"},
        {name:"30 page", value:"30"},
        {name:"40 page", value:"40"},
      ])
   
      return (
        <div className="page__wraper">
           {paginationArr.map( p => 
           
           <span onClick={ () => setPagination({...pagination, page: p})}
                 key={p}
                 className={pagination.page === p ? "page page__current" : "page"}
           > 
           {p}
           </span>)
           
           }

         <MySelect defaultValue="Post per page"   
                  value={pagination.limit}
                  options={options}
                  change={ v => setPagination({...pagination, limit: v})}  />
        </div>
       );
}

export default Pagination;