import { useState, useEffect } from "react"

const useParams = (
    url: string = window.location.search
) => {
    const [ params, setParams ] = useState<object | null>(null)

    useEffect(() => setParams(new URLSearchParams(url)), [url])

    return params
}

export default useParams