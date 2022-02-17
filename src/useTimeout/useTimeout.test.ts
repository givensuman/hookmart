import { act, cleanup, renderHook } from '@testing-library/react-hooks'
import useTimeout from '.'

describe('useTimeout()', () => {

    test('should render', () => {
        renderHook(() => useTimeout(() => null))
        cleanup()
    })

    test('should fire callback after delay', () => {
        jest.useFakeTimers()
        const delay = 60000
        const e = jest.fn()
        renderHook(() => useTimeout(e, delay))

        expect(e).not.toHaveBeenCalled()

        act(() => {
            jest.advanceTimersByTime(delay)
        })

        expect(e).toHaveBeenCalledTimes(1)
        cleanup()
    })

})