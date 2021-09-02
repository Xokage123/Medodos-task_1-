<template>
  <form class="form">
    <h2 class="form__title">Анкета</h2>
    <div>
      <Private
        @update-value-name="setName"
        @update-value-surname="setSurname"
        @update-value-lastname="setLastname"
        @update-value-birth="setBirth"
        :validate="{
          name: $v.name,
          surname: $v.surname,
          lastname: $v.lastname,
          birth: $v.birth
        }"
      />
    </div>
    <div>
      <Addres :validate="{}" />
    </div>
    <div>
      <Pasport :validate="{}" />
    </div>
  </form>
</template>

<script>
import Private from "./components/Fieldsets/Private/Private.vue";
import Addres from "./components/Fieldsets/Addres/Addres.vue";
import Pasport from "./components/Fieldsets/Pasport/Pasport.vue";

import { Vue__validationObjectPrivate, checkValue } from "./utils/index.js";
export default {
  name: "App",
  components: {
    Private,
    Addres,
    Pasport,
  },
  data() {
    return {
      name: "",
      surname: "",
      lastname: "",
      birth: ""
    };
  },
  validations: Vue__validationObjectPrivate,
  methods: {
    setName(value) {
      this.name = checkValue(value, "name");
      this.$v.name.$touch();
    },
    setSurname(value) {
      this.surname = checkValue(value, "surname");
      this.$v.surname.$touch();
    },
    setLastname(value) {
      this.lastname = checkValue(value, "lastname");
      this.$v.lastname.$touch();
    },
    setBirth() {
      this.$v.lastname.$touch();
    }
  },
  created() {
    this.lastname = checkValue(this.lastname, "lastname");
  }
};
</script>

<style lang="sass">
@import "./styles/scss/global"
@import './styles/scss/components/form'
@import './styles/scss/components/main'
</style>