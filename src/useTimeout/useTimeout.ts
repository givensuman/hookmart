import { useEffect, useRef } from 'react'

const useTimeout = (
    callback: () => void,
    delay: number = 0
) => {
    const savedCallback = useRef(callback)

    useEffect(() => savedCallback.current = callback, [callback])

    useEffect(() => {
        const timeout = setTimeout(() => savedCallback.current, delay)
        return () => clearTimeout(timeout)
    })
}

export default useTimeout