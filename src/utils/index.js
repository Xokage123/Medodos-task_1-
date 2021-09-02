import { required, minLength, between } from "vuelidate/lib/validators";

// Vue
export const Vue__validationObjectPrivate = {
    // Имя
    name: {
        required,
        minLength: minLength(4)
    },
    // Фамилия
    surname: {
        required,
        minLength: minLength(4),
    },
    // Отчество
    lastname: {
        minLength: minLength(4),
    },
    birth: {
        required
    }
}

// JS

export const checkValue = (value, nameElement) => {
    let regXP;
    switch (nameElement) {
        case 'name':
        case 'surname':
        case 'lastname':
            regXP = /\W/i;
    }
    let checkValue = '';
    for (let i = 0; i < value.length; i++) {
        if (regXP.test(value[i])) {
            checkValue += value[i]
        }
    }
    return checkValue;
}