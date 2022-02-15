import { cleanup, renderHook} from '@testing-library/react-hooks'
import useGeolocation from '.'

describe('useGeolocation', () => {

    const currentMock = jest.fn()
    const watchMock = jest.fn()
    beforeEach(() => {
        // @ts-ignore
        global.navigator.geolocation = { 
            getCurrentPosition: currentMock,
            watchPosition: watchMock
        }
    })

    afterEach(() => jest.resetAllMocks())

    test('should render', () => {
        renderHook(() => useGeolocation())
        cleanup()
    })

    test('should accept options', () => {
        renderHook(() => useGeolocation({ enableHighAccuracy: true }))
    })

    test('should fire geolocation functions', () => {
        renderHook(() => useGeolocation())

        expect(currentMock).toHaveBeenCalled()
        expect(watchMock).toHaveBeenCalled()
    })

})