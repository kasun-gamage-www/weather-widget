export default class IconMapping {
    static getIconURIByCode(code: number) : string {
        return `https://developer.accuweather.com/sites/default/files/${code.toString().padStart(2, '0')}-s.png`
    }

    static getIconURIByText(code: string) : string {
        return `../assets/img/${code || 'Clouds'}.png`
    }
}