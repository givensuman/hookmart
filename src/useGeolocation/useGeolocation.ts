import { useState, useEffect } from 'react'

const useGeolocation = (options: object = {}) => {
    const [ data, setData ] = useState({})

    if (!navigator.geolocation) {
        console.error("Geolocation isn't supported.")
        return
    }

    useEffect(() => {
        const callback = (e: GeolocationPosition) => setData(e.coords)

        try {
            navigator.geolocation.getCurrentPosition(
                callback,
                err => console.error('Error getting geolocation.', err),
                options)
        }
        catch (err) {
            console.error('Error getting geolocation.', err)
        }

        const watcher = navigator.geolocation.watchPosition(
            callback,
            err => console.error('Error watching geolocation.', err),
            options)
        return () => navigator.geolocation.clearWatch(watcher)
    }, [options])

    return data
}

export default useGeolocation