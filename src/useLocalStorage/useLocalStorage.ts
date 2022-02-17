import { useState } from 'react'

const useLocalStorage = (
    key: string,
    initial: any = null
) => {
    const [ stored, setStored ] = useState(() => {
        try {
            const item = window.localStorage.getItem(key)
            if (item) {
                return JSON.parse(item)
            } else {
                window.localStorage.setItem(key, JSON.stringify(initial))
                return initial
            }
        }
        catch (err) {
            console.error(`Error reading localStorage key "${key}."`, err)
            return initial
        }
    })

    const setValue = (value: any) => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value))
            setStored(value)
        }
        catch (err) {
            console.error(`Error setting localStorage key "${key}."`, err)
        }
    }

    return [ stored, setValue ] as const
}

export default useLocalStorage