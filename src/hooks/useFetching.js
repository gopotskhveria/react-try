import { useState } from "react"

 export const useFetching = (completion) => {
  
    const [isLoading, setIsLoading] = useState(false)
    const [fetchError, setFetchError]   = useState("")

    const fetching = async (...args) => {
        try {
          setIsLoading(true)
          await completion(...args)
        } catch(e) {
            setFetchError(e.message)
        } finally {
          setIsLoading(false)
        }
    }

    return [fetching, isLoading, fetchError]
 }