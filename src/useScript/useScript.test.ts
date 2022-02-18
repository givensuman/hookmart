import { cleanup, renderHook } from '@testing-library/react-hooks'
import useScript from './useScript'

describe('useScript', () => {

    const src = 'http://somesrc/'

    afterEach(() => jest.resetAllMocks())

    test('should render', () => {
        renderHook(() => useScript(src))
        cleanup()
    })

    test('should append script', () => {
        renderHook(() => useScript(src))

        const script = document.querySelector('script')

        expect(script).not.toBe(null)
        cleanup()
    })

    test('should accept options', () => {
        renderHook(() => useScript(src, { id: 'somescript', async: true }))

        const script = document.getElementById('somescript')

        if (script) {
            expect(script.getAttribute('src')).toBe(src)
            expect(script.getAttribute('id')).toBe('somescript')
            expect(script.getAttribute('async')).toBe(true)
        }
        cleanup()
    })

})