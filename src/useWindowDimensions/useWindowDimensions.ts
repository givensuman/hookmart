import { useEffect, useState } from 'react'

interface Props {
    width: number,
    height: number,
}

const useWindowDimensions = (): Props => {
    const [ width, setWidth ] = useState(window.innerWidth)
    const [ height, setHeight ] = useState(window.innerHeight)

    useEffect(() => {
        const getWindowDimensions = (): void => {
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)
        }
        window.addEventListener('resize', getWindowDimensions)
        return () => window.removeEventListener('resize', getWindowDimensions)
    })

    return { width, height }
}

export default useWindowDimensions