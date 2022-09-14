export default class UnitHelper {
    static fahrenheitToCelsius(fValue: number) : number {
        return (fValue - 32) * 5 / 9
    }
}