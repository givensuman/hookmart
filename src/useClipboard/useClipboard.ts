import { useState } from 'react'

type State = string | null

const useClipboard = () => {
    const [ clipboard, setClipboard ] = useState<State>(null)

    const copy = async (text: string): Promise<boolean> => {
        try {
            await navigator.clipboard.writeText(text)
            setClipboard(text)
            return true
        }
        catch (err) {
            console.error('Error copying to clipboard.', err)
            setClipboard(null)
            return false
        }
    }

    return [ clipboard, copy ]
}

export default useClipboard