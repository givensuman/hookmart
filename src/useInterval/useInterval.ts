import { useEffect, useRef } from 'react';

const useInterval = (
    callback: () => void, 
    delay: number
) => {
  const savedCallback = useRef(callback);

  useEffect(() => savedCallback.current = callback, [callback])

  useEffect(() => {
    if (delay !== null) {
      let id = setInterval(savedCallback.current, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

export default useInterval