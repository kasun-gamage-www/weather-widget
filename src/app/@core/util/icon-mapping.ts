export default class IconMapping {
    static getIconURIByCode(code: any) {
        return `https://developer.accuweather.com/sites/default/files/0${code}-s.png`
    }

    static getIconURIByText(code : any) {
        return `../assets/img/${ code || 'Clouds' }.png`
    }
}