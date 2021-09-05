"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var textError = {
  required: "Поле обязательно для заполнения",
  minLength: "Минимальное количество символом в этом поле "
};
var INFO = {
  surname: {
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
  name: {
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
  },
  lastname: {
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
  birth: {
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
  phone: {
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
  gender: {
    label: {
      text: "Пол"
    },
    input: {
      type: "radio",
      name: "gender"
    },
    tests: {
      text: {}
    }
  },
  clients: {
    label: {
      text: "Группа клиентов*"
    },
    input: {
      type: "select",
      multiple: true,
      name: "clients",
      placeholder: "Выберите группу клиентов",
      value: ["VIP", "Проблемные", "ОМС"]
    },
    tests: {
      text: {
        required: textError.required
      }
    }
  },
  doctor: {
    label: {
      text: "Лечащий врач"
    },
    input: {
      type: "select",
      multiple: false,
      name: "doctor",
      placeholder: "Выберите лечящего врача",
      value: ["Иванов", "Захаров", "Чернышева"]
    },
    tests: {
      text: {}
    }
  },
  document: {
    label: {
      text: "Тип документа*"
    },
    input: {
      type: "select",
      multiple: false,
      name: "document",
      value: ["Иванов", "Свидетельство о рождении", "Вод. удостоверение"]
    },
    tests: {
      text: {
        required: textError.required
      }
    }
  }
};
var _default = INFO;
exports["default"] = _default;
//# sourceMappingURL=index.dev.js.map
