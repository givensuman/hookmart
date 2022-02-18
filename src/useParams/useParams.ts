import { useState, useEffect } from "react"

type State = object | null

const useParams = (
    url: URL['href'] = window.location.href
) => {
    const [ params, setParams ] = useState<State>(null)

    useEffect(() => {
        let query: string =  new URL(url).search
        const URLparams = new URLSearchParams(query)

        for (const key of URLparams.keys()) {
            if (URLparams.getAll(key).length > 1) {
                setParams({
                    ...params,
                    [key]: URLparams.getAll(key)
                })
            } else {
                setParams({
                    ...params,
                    [key]: URLparams.get(key)
                })
            }
        }
    }, [url])
    
    return params
}

export default useParams