import { cleanup, renderHook } from '@testing-library/react-hooks'
import useWindowDimensions from '.'

describe('useWindowDimensions', () => {

    test('should render', () => {
        renderHook(() => useWindowDimensions())
        cleanup()
    })

    test('should instantiate types', () => {
        const { result } = renderHook(() => useWindowDimensions())

        expect(typeof result.current.height).toBe('number')
        expect(typeof result.current.width).toBe('number')
        cleanup()
    })

    test('should return window dimensions', () => {
        Object.defineProperty(
            window, 
            'innerWidth', 
            { writable: true, configurable: true, value: 100 }
        )
        Object.defineProperty(
            window,
            'innerHeight',
            { writable: true, configurable: true, value: 100 }
        )
        const { result } = renderHook(() => useWindowDimensions())

        expect(result.current.height && result.current.width).toBe(100)
        cleanup()
    })

})
