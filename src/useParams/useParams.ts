import { useState, useEffect } from "react"

type State = object | null

const useParams = (
    url: URL['href'] = window.location.href
) => {
    const [ params, setParams ] = useState<State>({})

    useEffect(() => {
        let query: string = new URL(url).search
        const URLparams = new URLSearchParams(query)
        
        let obj = {}
        for (let key of URLparams.keys()) {
            if (URLparams.getAll(key).length > 1) {
                obj[key] = URLparams.getAll(key)
            } else {
                obj[key] = URLparams.get(key)
            }
        }
        setParams(obj)
    }, [url])
    return params
}

export default useParams