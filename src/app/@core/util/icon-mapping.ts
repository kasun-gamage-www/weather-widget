export default class IconMapping {
    static getIconURIByCode(code: any) {
        return `https://developer.accuweather.com/sites/default/files/${code.toString().padStart(2, '0')}-s.png`
    }

    static getIconURIByText(code: any) {
        return `../assets/img/${code || 'Clouds'}.png`
    }
}