import { act, cleanup, renderHook } from '@testing-library/react-hooks'
import useClipboard from '.'

describe('useClipboard', () => {
    
    beforeEach(() => {
        // @ts-ignore
        global.navigator.clipboard = { writeText: jest.fn() }
    })

    afterEach(() => jest.resetAllMocks())

    test('should render', () => {
        renderHook(() => useClipboard())
        cleanup()
    })

    test('should instantiate types', () => {
        const { result } = renderHook(() => useClipboard())

        expect(result.current[0]).toBe(null)
        expect(typeof result.current[1]).toBe('function')
        cleanup()
    })

    test('should copy to clipboard', async () => {
        const { result } = renderHook(() => useClipboard())

        await act(async () => {
            await result.current[1]('some text')
        })

        expect(navigator.clipboard.writeText).toBeCalledTimes(1)
        expect(result.current[0]).toBe('some text')
        cleanup()
    })

    test('should copy asynchronously', async () => {
        const { result } = renderHook(() => useClipboard())

        await act(async() => {
            await result.current[1]('some text')
                .then(async () => await result.current[1]('some more text'))
        })

        expect(navigator.clipboard.writeText).toBeCalledTimes(2)
        expect(result.current[0]).toBe('some more text')
        cleanup()
    })

})