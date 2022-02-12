import { useEffect, useRef } from 'react'

type Event = GlobalEventHandlersEventMap | WindowEventMap | HTMLElementEventMap 

const useEventListener = (
        event: Event, 
        callback: (e?: object) => void, 
        target: any = window
) => {
    const savedCallback = useRef(callback)

    useEffect(() => savedCallback.current = callback, [callback])
    
    useEffect(() => {
        if (!target.addEventListener) return

        const listener = (e?: object) => savedCallback.current(e)

        target.addEventListener(event, listener)
        return () => target.removeEventListener(event, listener)
    })
}

export default useEventListener