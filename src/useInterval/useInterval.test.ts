import {  cleanup, renderHook} from '@testing-library/react-hooks'
import useInterval from './useInterval'

describe('useInterval', () => {

    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
    const e = jest.fn()
    const delay = 100

    afterEach(() => jest.resetAllMocks())

    test('should render', () => {
        renderHook(() => useInterval(e, delay))
        cleanup()
    })

    test('should fire callback', async () => {
        renderHook(() => useInterval(e, delay))
        
        await sleep(150)

        expect(e).toHaveBeenCalled()
        cleanup()
    })

    test('should fire callback again', async () => {
        renderHook(() => useInterval(e, delay))

        await sleep(250)

        expect(e).toHaveBeenCalledTimes(2)
        cleanup()
    })

})