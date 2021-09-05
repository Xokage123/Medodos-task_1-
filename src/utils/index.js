import { MIN } from "../data/index.js"

export const checkValue = (value, nameElement) => {
    let checkValue = '';
    let regXP;
    switch (nameElement) {
        case 'text':
            regXP = /\W/i;
            break;
        case 'phone':
        case 'index':
        case 'house':
        case 'pasport-series':
        case 'pasport-number':
            regXP = /\d/i
            break;
        default:
            return null;
    }
    for (let i = 0; i < value.length; i++) {
        if (i == 0 && nameElement === 'phone') {
            checkValue += "+"
        }
        if (regXP.test(value[i]) && nameElement != 'date') {
            switch (nameElement) {
                case 'phone':
                case 'index':
                case 'house':
                    if (i < MIN[nameElement]) checkValue += value[i];
                    break;
                case 'pasport-series':
                    if (i < MIN.pasport.series) checkValue += value[i];
                    break;
                case 'pasport-number':
                    if (i < MIN.pasport.number) checkValue += value[i];
                    break;
                default:
                    checkValue += value[i]
            }
        }
    }
    // Нельзя удалить первую цифру
    if (value.length == 1 && nameElement === 'phone') {
        checkValue = '+7';
    }
    return checkValue;
}