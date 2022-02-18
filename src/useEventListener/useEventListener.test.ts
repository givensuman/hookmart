import { cleanup, renderHook } from '@testing-library/react-hooks'
import fire from '@testing-library/user-event'
import useEventListener from './useEventListener'

describe('useEventListener', () => {

    test('should render', () => {
        renderHook(() => useEventListener('click', e => e, window))
        cleanup()
    })

    test('should provide default target', () => {
        const e = jest.fn()
        const windowSpy = jest.spyOn(window, 'addEventListener')
        renderHook(() => useEventListener('click', e))

        expect(windowSpy).toHaveBeenCalledWith('click', expect.anything())
        cleanup()
    })

    test('should receive input target', () => {
        const e = jest.fn()
        const ref = document.createElement('div')
        renderHook(() => useEventListener('click', e, ref))
        cleanup()
    })

    test('should fire events', () => {
        const e = jest.fn()
        const  ref = document.createElement('div')
        renderHook(() => useEventListener('click', e, ref))
        fire.click(ref)

        expect(e).toHaveBeenCalled()
        cleanup()
    })

})