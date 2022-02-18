import { cleanup, renderHook } from '@testing-library/react-hooks'
import useOrientation from './useOrientation'

describe('useOrientation', () => {

    const mock = jest.fn()
    beforeEach(() => {
        // @ts-ignore
        window.screen.orientation = mock
    })

    afterEach(() => jest.resetAllMocks())

    test('should render', () => {
        renderHook(() => useOrientation())
        cleanup()
    })

    test('should fire orientation functions', () => {
        renderHook(() => useOrientation())

        expect(mock).toHaveBeenCalled()
        cleanup()
    })

})