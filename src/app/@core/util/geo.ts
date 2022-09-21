export default class Geo {
    static fetchUserLocation(callback: (position: {lat : number, lng : number}) => void) {
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