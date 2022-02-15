import { useState, useEffect } from 'react'

const useScript = (
    src: string,
    options?: object
) => {
    const [ loading, setLoading ] = useState(true)

    if (document.querySelector(`script[src="${src}"]`)) {
        setLoading(false)
        return loading
    }

    useEffect(() => {
        const el = document.createElement('script')
        el.src = src
    
        if (options) Object.keys(options).forEach(key => {
            if (el[key] === undefined) el.setAttribute(key, options[key])
            else el[key] = options[key]
        })
    
        const handleLoad = () => setLoading(false)
    
        el.addEventListener('load', handleLoad)
        return () => el.removeEventListener('load', handleLoad)
    }, [src])

    return loading
}

export default useScript