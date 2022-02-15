import { useState } from 'react'

type State = string | null

const useClipboard = () => {
    const [ clipboard, setClipboard ] = useState<State>(null)

    const copy = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text)
            setClipboard(text)
        }
        catch (err) {
            console.error('Error copying to clipboard.', err)
            setClipboard(null)
        }
    }

    return [ clipboard, copy ] as const
}

export default useClipboard