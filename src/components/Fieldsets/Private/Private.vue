<template>
  <fieldset class="form-section form-section--private">
    <legend class="form-section__title">Личная информация</legend>
    <!-- Фамилия -->
    <Group
      @update-surname="setSurname"
      :validate="validate.surname"
      :info="surnameInfo"
      :nameElement="'surname'"
    ></Group>
    <!-- Имя -->
    <Group
      @update-name="setName"
      :validate="validate.name"
      :info="nameInfo"
      :nameElement="'name'"
    ></Group>
    <!-- Отчество -->
    <Group
      @update-lastname="setLastname"
      :validate="validate.lastname"
      :info="lastnameInfo"
      :nameElement="'lastname'"
    ></Group>
    <!-- Дата рождения-->
    <Group
      @update-birth="setBirth"
      :validate="validate.birth"
      :info="birthInfo"
      :nameElement="'birth'"
    ></Group>
    <!--Телефон -->
    <Group
      @update-phone="setPhone"
      :validate="validate.phone"
      :info="phoneInfo"
      :nameElement="'phone'"
    ></Group>
    <!--Пол -->
    <Group
      @update-gender="setGender"
      :validate="validate.gender"
      :info="genderInfo"
      :nameElement="'gender'"
    ></Group>
    <!--Клиенты -->
    <Group
      @update-clients="setClients"
      :validate="validate.clients"
      :info="clientsInfo"
      :nameElement="'clients'"
    ></Group>
    <!--Доктор -->
    <Group
      @update-doctor="setDoctor"
      :validate="validate.doctor"
      :info="doctorInfo"
      :nameElement="'doctor'"
    ></Group>
    <!--Отправлять ли данные на сервер -->
    <label class="form__label-checkbox">
      Не отправлять
      <input @input="setDispatch" type="checkbox" />
      <div></div>
    </label>
  </fieldset>
</template>


<script>
import Group from "../../Group.vue";
import { INFO } from "../../../data/index.js";

export default {
  name: "Private",
  props: ["validate"],
  components: {
    Group,
  },
  data() {
    return {
      nameInfo: INFO.name,
      surnameInfo: INFO.surname,
      lastnameInfo: INFO.lastname,
      birthInfo: INFO.birth,
      phoneInfo: INFO.phone,
      genderInfo: INFO.gender,
      clientsInfo: INFO.clients,
      doctorInfo: INFO.doctor,
    };
  },
  methods: {
    setName(value) {
      this.$emit("update-value-name", value);
    },
    setSurname(value) {
      this.$emit("update-value-surname", value);
    },
    setLastname(value) {
      this.$emit("update-value-lastname", value);
    },
    setBirth() {
      this.$emit("update-value-birth");
    },
    setPhone(value) {
      this.$emit("update-value-phone", value);
    },
    setGender() {
      this.$emit("update-value-gender");
    },
    setClients() {
      this.$emit("update-value-clients");
    },
    setDoctor() {
      this.$emit("update-value-doctor");
    },
    setDispatch(ev) {
      this.$emit("update-value-dispatch", ev.target.checked);
    },
  },
};
</script>