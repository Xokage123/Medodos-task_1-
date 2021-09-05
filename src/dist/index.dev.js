"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _vuelidate = _interopRequireDefault(require("vuelidate"));

var _vueMultiselect = _interopRequireDefault(require("vue-multiselect"));

var _App = _interopRequireDefault(require("./App.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Расширение Vue
_vue["default"].use(_vuelidate["default"]); // Мультисилектор


_vue["default"].component('multiselect', _vueMultiselect["default"]);

new _vue["default"](_App["default"]).$mount('#app');
//# sourceMappingURL=index.dev.js.map
