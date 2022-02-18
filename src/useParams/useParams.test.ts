import { cleanup, renderHook } from '@testing-library/react-hooks'
import useParams from './useParams'

describe('useParams', () => {

    test('should render', () => {
        renderHook(() => useParams())
        cleanup()
    })

    test('should instantiate types', () => {
        const { result } = renderHook(() => useParams())

        expect(typeof result.current).toBe('object')
        cleanup()
    })

    test('should pull params out of a url', () => {
        const data = {
            name: 'Given',
            mood: 'Happy'
        }
        const url = 'https://www.someurl.xyz/user?'
        const { result } = renderHook(() => useParams(url + new URLSearchParams(data).toString()))

        expect(result.current).toMatchObject(data)
        cleanup()
    })

})