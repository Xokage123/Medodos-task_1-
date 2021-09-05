"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkValue = exports.Vue__validationObjectPrivate = void 0;

var _validators = require("vuelidate/lib/validators");

var MIN = {
  text: 4,
  phone: 12
}; // Vue

var Vue__validationObjectPrivate = {
  // Имя
  name: {
    required: _validators.required,
    minLength: (0, _validators.minLength)(MIN.text)
  },
  // Фамилия
  surname: {
    required: _validators.required,
    minLength: (0, _validators.minLength)(MIN.text)
  },
  // Отчество
  lastname: {
    minLength: (0, _validators.minLength)(MIN.text)
  },
  birth: {
    required: _validators.required
  },
  phone: {
    required: _validators.required,
    minLength: (0, _validators.minLength)(MIN.phone)
  },
  gender: {},
  clients: {
    required: _validators.required
  },
  doctor: {}
}; // JS

exports.Vue__validationObjectPrivate = Vue__validationObjectPrivate;

var checkValue = function checkValue(value, nameElement) {
  var regXP;

  switch (nameElement) {
    case 'name':
    case 'surname':
    case 'lastname':
      regXP = /\W/i;
      break;

    case 'phone':
      regXP = /\d/i;
      break;

    default:
      return null;
  }

  var checkValue = '';

  for (var i = 0; i < value.length; i++) {
    if (i == 0 && nameElement === 'phone') {
      checkValue += "+";
    }

    if (regXP.test(value[i])) {
      if (nameElement === 'phone') {
        if (i < MIN.phone) {
          checkValue += value[i];
        }
      } else {
        checkValue += value[i];
      }
    }
  } // Нельзя удалить первую цифру


  if (value.length == 1 && nameElement === 'phone') {
    checkValue = '+7';
  }

  return checkValue;
};

exports.checkValue = checkValue;
//# sourceMappingURL=index.dev.js.map
