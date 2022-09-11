export default class Geo {
    static fetchUserLocation(callback: (position: any) => void) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position): any => {
                if (position) {
                    callback({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    })
                }
            },
                (e) => { throw new Error('User Location is disabled') }
            )
        } else {
            throw new Error('User Location is disabled')
        }
    }
}