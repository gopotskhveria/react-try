import { useMemo, useState } from "react"

export const usePagination = (totalPages) => {
      const pagesArr = useMemo( () => {
        let pages = []
        for(let i = 0; i <totalPages ; i++){
            pages.push(i+1);
        }
 
        return pages;
      }, [totalPages])
      
      return pagesArr
}

