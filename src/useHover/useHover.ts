import { useState, useEffect } from 'react'

const useHover = (
    target: any,
    mouseOverCallback?: () => void,
    mouseOutCallback?: () => void
) => {
    const [ isHovering, setIsHovering ] = useState(false)

    const handleMouseOver = () => {
        if (mouseOverCallback) mouseOverCallback()
        setIsHovering(true)
    }
    const handleMouseOut = () => {
        if (mouseOutCallback) mouseOutCallback()
        setIsHovering(false)
    }

    useEffect(() => {
        if (!target.addEventListener) return
        target.addEventListener('mouseover', handleMouseOver)
        target.addEventListener('mouseout', handleMouseOut)

        return () => {
            target.removeEventListener('mouseover', handleMouseOver)
            target.removeEventListener('mouseout', handleMouseOut)
        }
    })

    return isHovering
}

export default useHover