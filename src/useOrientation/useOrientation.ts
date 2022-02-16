import { useState, useEffect } from 'react'

const useOrientation = () => {
    const [ orientation, setOrientation ] = useState(window.screen.orientation)

    useEffect(() => {
        const handleOrientation = () => setOrientation(window.screen.orientation)

        window.screen.orientation.addEventListener('change', handleOrientation)
        return () => window.screen.orientation.removeEventListener('change', handleOrientation)
    })

    return orientation
}

export default useOrientation