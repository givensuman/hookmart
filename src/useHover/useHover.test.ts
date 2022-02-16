import { act, cleanup, renderHook } from '@testing-library/react-hooks'
import userEvent from '@testing-library/user-event'
import useHover from '.'

describe('useHover', () => {

    const  ref = document.createElement('div')

    afterEach(() => jest.resetAllMocks())

    test('should render', () => {
        renderHook(() => useHover(ref))
        cleanup()
    })

    test('should receive input target', () => {
        const  someOtherRef = document.createElement('div')
        renderHook(() => useHover(someOtherRef))
        cleanup()
    })

    test('should fire on hover', () => {
        const e = jest.fn()
        const f = jest.fn()
        renderHook(() => useHover(ref, e, f))
        
        act(() => userEvent.hover(ref))
        act(() => userEvent.unhover(ref))

        expect(e).toHaveBeenCalled()
        expect(f).toHaveBeenCalled()
        cleanup()
    })

})