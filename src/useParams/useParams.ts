import { useState, useEffect } from "react"

type State = object | null

const useParams = (
    url: string = window.location.search
) => {
    const [ params, setParams ] = useState<State>(null)

    useEffect(() => setParams(new URLSearchParams(url)), [url])

    return params
}

export default useParams