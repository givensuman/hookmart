import { cleanup, renderHook } from '@testing-library/react-hooks'
import fire from '@testing-library/user-event'
import useEventListener from '.'

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
        const refSpy = jest.spyOn(ref, 'addEventListener')
        renderHook(() => useEventListener('click', e))

        expect(refSpy).toHaveBeenCalledWith('click', expect.anything())
        cleanup()
    })

    test('should fire events', () => {
        const e = jest.fn()
        const  ref = document.createElement('div')
        renderHook(() => useEventListener('click', e))
        fire.click(ref)

        expect(e).toHaveBeenCalledTimes(1)
        cleanup()
    })

})