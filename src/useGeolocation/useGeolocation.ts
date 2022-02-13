import { useState, useEffect } from 'react'

const useGeolocation = (options: any = {}) => {
    const [ data, setData ] = useState({})

    if (!navigator.geolocation) {
        console.error("Geolocation isn't supported.")
    }

    useEffect(() => {
        const callback = (e: GeolocationPosition) => setData(e.coords)

        try {
            navigator.geolocation.getCurrentPosition(callback, options)
        }
        catch (err) {
            console.error('Error getting geolocation.', err)
        }

        const watcher = navigator.geolocation.watchPosition(callback, options)
        return () => navigator.geolocation.clearWatch(watcher)
    }, [options])

    return data
}

export default useGeolocation