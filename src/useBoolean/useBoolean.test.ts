import { act, cleanup, renderHook } from '@testing-library/react-hooks'
import useBoolean from '.'

describe('useBoolean', () => {

    test('should render', () => {
        renderHook(() => useBoolean())
    })

    test('should instantiate types', () => {
        const { result } = renderHook(() => useBoolean())

        expect(typeof result.current.state).toBe('boolean')
        expect(typeof result.current.setTrue).toBe('function')
        expect(typeof result.current.setFalse).toBe('function')
        expect(typeof result.current.toggle).toBe('function')
        cleanup()
    })

    test('should provide default state', () => {
        const { result } = renderHook(() => useBoolean())

        expect(result.current.state).toBe(false)
        cleanup()
    })

    test('should receive input state', () => {
        const { result } = renderHook(() => useBoolean(true))

        expect(result.current.state).toBe(true)
        cleanup()
    })

    test('should update with setTrue()', () => {
        const { result } = renderHook(() => useBoolean())

        act(() => result.current.setTrue())

        expect(result.current.state).toBe(true)
        cleanup()
    })

    test('should update with setFalse()', () => {
        const { result } = renderHook(() => useBoolean(true))

        act(() => result.current.setFalse())

        expect(result.current.state).toBe(false)
        cleanup()
    })

    test('should update with toggle()', () => {
        const { result } = renderHook(() => useBoolean(Math.random() > 0.5))

        const initial = result.current.state

        act(() => result.current.toggle())

        expect(result.current.state !== initial)
        cleanup()
    })

})