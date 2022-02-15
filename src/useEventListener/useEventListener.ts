import { useEffect, useRef } from 'react'

const useEventListener = (
        eventType: Event['type'], 
        callback: (e?: Event) => void, 
        target: any = window
) => {
    const savedCallback = useRef(callback)

    useEffect(() => savedCallback.current = callback, [callback])
    
    useEffect(() => {
        if (!target.addEventListener) return

        const listener = (e: Event) => savedCallback.current(e)

        target.addEventListener(eventType, listener)
        return () => target.removeEventListener(eventType, listener)
    })
}

export default useEventListener