import { required, minLength, between } from "vuelidate/lib/validators";

export const MIN = {
    text: 2,
    phone: 12,
    index: 6,
    house: 4,
    pasport: {
        series: 4,
        number: 6,
    }
}

const textError = {
    required: "Поле обязательно для заполнения",
    minLength: "Минимальное количество символом в этом поле "
}

export const nameElement = {
    name: 'name',
    surname: 'surname',
    lastname: 'lastname',
    birth: 'birth',
    phone: 'phone',
    gender: 'gender',
    clients: 'clients',
    doctor: 'doctor',
    index: 'index',
    country: 'country',
    region: 'region',
    city: 'city',
    street: 'street',
    house: 'house',
    document: 'document',
    pasportSeries: 'pasportSeries',
    pasportNumber: 'pasportNumber',
    pasportOrganization: 'pasportOrganization',
    pasportDate: 'pasportDate',
}

const startInfo = {
    // Имя
    name: {
        startValue: "",
        validate: {
            required,
            minLength: minLength(MIN.text)
        },
        information: {
            label: {
                text: "Имя*"
            },
            input: {
                type: "text",
                name: "name",
                placeholder: "Введите имя"
            },
            tests: {
                text: {
                    required: textError.required,
                    minLength: textError.minLength
                }
            }
        }
    },
    // Фамилия
    surname: {
        startValue: "",
        validate: {
            required,
            minLength: minLength(MIN.text),
        },
        information: {
            label: {
                text: "Фамилия*"
            },
            input: {
                type: "text",
                name: "surname",
                placeholder: "Введите фамилию"
            },
            tests: {
                text: {
                    required: textError.required,
                    minLength: textError.minLength
                }
            }
        },
    },
    // Отчество
    lastname: {
        startValue: "",
        validate: {
            minLength: minLength(MIN.text),
        },
        information: {
            label: {
                text: "Отчество"
            },
            input: {
                type: "text",
                name: "lastname",
                placeholder: "Введите отчество"
            },
            tests: {
                text: {
                    minLength: textError.minLength
                }
            }
        },
    },
    // Дата рождения
    birth: {
        startValue: "",
        validate: {
            required
        },
        information: {
            label: {
                text: "Дата рождения*"
            },
            input: {
                type: "date",
                name: "birth",
                placeholder: "Введите дату рождения"
            },
            tests: {
                text: {
                    required: textError.required
                }
            }
        },
    },
    // Телефон
    phone: {
        startValue: "+7",
        validate: {
            required,
            minLength: minLength(MIN.phone)
        },
        information: {
            label: {
                text: "Мобильный телефон*"
            },
            input: {
                type: "tel",
                name: "phone",
                placeholder: "Введите номер мобильного телефона"
            },
            tests: {
                text: {
                    required: textError.required,
                    minLength: textError.minLength
                }
            }
        },
    },
    // Пол
    gender: {
        startValue: "",
        validate: {},
        information: {
            label: {
                text: "Пол"
            },
            input: {
                type: "radio",
                name: "gender",
            },
            tests: {
                text: {}
            }
        },
    },
    // Клиенты
    clients: {
        startValue: [],
        validate: {
            required
        },
        information: {
            label: {
                text: "Группа клиентов*"
            },
            input: {
                type: "select",
                multiple: true,
                name: "clients",
                placeholder: "Выберите группу клиентов",
                value: [
                    "VIP",
                    "Проблемные",
                    "ОМС"
                ]
            },
            tests: {
                text: {
                    required: textError.required,
                }
            }
        },
    },
    // Лечащий доктор
    doctor: {
        startValue: "",
        validate: {},
        information: {
            label: {
                text: "Лечащий врач"
            },
            input: {
                type: "select",
                multiple: false,
                name: "doctor",
                placeholder: "Выберите лечящего врача",
                value: [
                    "Иванов",
                    "Захаров",
                    "Чернышева"
                ]
            },
            tests: {
                text: {}
            }
        },
    },
    // Индекс проживания
    index: {
        startValue: "",
        validate: {
            minLength: minLength(MIN.index)
        },
        information: {
            label: {
                text: "Индекс"
            },
            input: {
                type: "text",
                name: "index",
                placeholder: "Введите индекс"
            },
            tests: {
                text: {
                    minLength: textError.minLength
                }
            }
        },
    },
    // Страна
    country: {
        startValue: "",
        validate: {
            minLength: minLength(MIN.text),
        },
        information: {
            label: {
                text: "Страна"
            },
            input: {
                type: "text",
                name: "country",
                placeholder: "Введите страну проживания"
            },
            tests: {
                text: {
                    minLength: textError.minLength
                }
            }
        },
    },
    // Область
    region: {
        startValue: "",
        validate: {
            minLength: minLength(MIN.text),
        },
        information: {
            label: {
                text: "Область"
            },
            input: {
                type: "text",
                name: "region",
                placeholder: "Введите область проживания"
            },
            tests: {
                text: {
                    minLength: textError.minLength
                }
            }
        },
    },
    // Город
    city: {
        startValue: "",
        validate: {
            required,
            minLength: minLength(MIN.text),
        },
        information: {
            label: {
                text: "Город*"
            },
            input: {
                type: "text",
                name: "city",
                placeholder: "Введите город проживания"
            },
            tests: {
                text: {
                    required: textError.required,
                    minLength: textError.minLength
                }
            }
        },
    },
    // Улица
    street: {
        startValue: "",
        validate: {
            minLength: minLength(MIN.text),
        },
        information: {
            label: {
                text: "Улица"
            },
            input: {
                type: "text",
                name: "street",
                placeholder: "Введите улицу проживания"
            },
            tests: {
                text: {
                    minLength: textError.minLength
                }
            }
        },
    },
    // Дом
    house: {
        startValue: "",
        validate: {
            minLength: minLength(MIN.house)
        },
        information: {
            label: {
                text: "Дом"
            },
            input: {
                type: "text",
                name: "house",
                placeholder: "Введите номер дома"
            },
            tests: {
                text: {
                    minLength: textError.minLength
                }
            }
        },
    },
    // Тип документа
    document: {
        startValue: "",
        validate: {
            required
        },
        information: {
            label: {
                text: "Тип документа*"
            },
            input: {
                type: "select",
                multiple: false,
                name: "document",
                placeholder: "Выберите тип документа",
                value: [
                    "Паспорт",
                    "Свидетельство о рождении",
                    "Водительское удостоверение"
                ]
            },
            tests: {
                text: {
                    required: textError.required
                }
            }
        },
    },
    // Серия
    pasportSeries: {
        startValue: "",
        validate: {
            minLength: minLength(MIN.pasport.series),
        },
        information: {
            label: {
                text: "Серия"
            },
            input: {
                type: "text",
                name: "pasportSeries",
                placeholder: "Введите серию документа"
            },
            tests: {
                text: {
                    minLength: textError.minLength
                }
            }
        },
    },
    // Номер
    pasportNumber: {
        startValue: "",
        validate: {
            minLength: minLength(MIN.pasport.number),
        },
        information: {
            label: {
                text: "Номер"
            },
            input: {
                type: "text",
                name: "pasportNumber",
                placeholder: "Введите номер документа"
            },
            tests: {
                text: {
                    minLength: textError.minLength
                }
            }
        },
    },
    // Кем выдан
    pasportOrganization: {
        startValue: "",
        validate: {
            minLength: minLength(MIN.text),
        },
        information: {
            label: {
                text: "Кем выдан"
            },
            input: {
                type: "text",
                name: "pasportNumber",
                placeholder: "Введите кем выдан документ"
            },
            tests: {
                text: {
                    minLength: textError.minLength
                }
            }
        },
    },
    // Дата выдачи
    pasportDate: {
        startValue: "",
        validate: {},
        information: {
            label: {
                text: "Когда выдан"
            },
            input: {
                type: "date",
                name: "pasportDate",
                placeholder: "Введите кем выдан документ"
            },
            tests: {
                text: {}
            }
        },
    },
}


export const dataRoot = {};
export const INFO = {};
export const Vue__validationObjectPrivate = {};
Object.values(nameElement).forEach(element => {
    dataRoot[element] = startInfo[element].startValue;
    INFO[element] = startInfo[element].information;
    Vue__validationObjectPrivate[element] = startInfo[element].validate;
});