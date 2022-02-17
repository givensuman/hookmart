import { act, cleanup, renderHook } from '@testing-library/react-hooks'
import useLocalStorage from '.'

describe('useLocalStorage', () => {

    afterEach(() => {
        jest.resetAllMocks()
        localStorage.clear()
    })

    test('should render', () => {
        renderHook(() => useLocalStorage('some string'))
        cleanup()
    })

    test('should receive input state', () => {
        const { result } = renderHook(() => useLocalStorage('some string', 'some value'))
        
        expect(result.current[0]).toBe('some value')
        cleanup()
    })

    test('should update state', () => {
        const { result } = renderHook(() => useLocalStorage('some string'))

        const data = { someKey: 'some value' }
        act(() => result.current[1](data))

        expect(result.current[0]).toBe(data)
        cleanup()
    })

})