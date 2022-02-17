import { useState, useEffect } from "react"

type State = object | null

const useParams = (
    url?: string
) => {
    const [ params, setParams ] = useState<State>(null)

    useEffect(() => {
        let query: string = url ? new URL(url).search : window.location.search
        const URLparams = new URLSearchParams(query)
        setParams(Object.fromEntries(URLparams))
    }, [url])
    
    return params
}

export default useParams