<template>
  <form class="form">
    <h2 class="form__title">Анкета</h2>
    <Private
      @update-value-name="setName"
      @update-value-surname="setSurname"
      @update-value-lastname="setLastname"
      @update-value-birth="setBirth"
      @update-value-phone="setPhone"
      @update-value-gender="setGender"
      @update-value-clients="setClients"
      @update-value-doctor="setDoctor"
      @update-value-dispatch="setDispatch"
      :validate="{
        name: $v.name,
        surname: $v.surname,
        lastname: $v.lastname,
        birth: $v.birth,
        phone: $v.phone,
        gender: $v.gender,
        clients: $v.clients,
        doctor: $v.doctor,
      }"
    ></Private>
    <Addres
      @update-value-index="setIndex"
      @update-value-country="setCountry"
      @update-value-region="setRegion"
      @update-value-city="setCity"
      @update-value-street="setStreet"
      @update-value-house="setHouse"
      :validate="{
        index: $v.index,
        country: $v.country,
        region: $v.region,
        city: $v.city,
        street: $v.street,
        house: $v.house,
      }"
    ></Addres>
    <Pasport
      @update-value-document="setDocument"
      @update-value-pasport_series="setPasportSeries"
      @update-value-pasport_number="setPasportNumber"
      @update-value-pasport_organization="setPasortOrganization"
      @update-value-pasport_date="setPasortDate"
      :validate="{
        document: $v.document,
        pasportSeries: $v.pasportSeries,
        pasportNumber: $v.pasportNumber,
        pasportOrganization: $v.pasportOrganization,
        pasportDate: $v.pasportDate,
      }"
    ></Pasport>
    <button class="form__submit" @click.prevent="openModal($v)" type="button">
      Создать клиента
    </button>
  </form>
</template>

<script>
import Private from "./components/Fieldsets/Private/Private.vue";
import Addres from "./components/Fieldsets/Addres/Addres.vue";
import Pasport from "./components/Fieldsets/Pasport/Pasport.vue";

import { checkValue } from "./utils/index.js";
import { dataRoot, Vue__validationObjectPrivate } from "./data/index";

export default {
  name: "App",
  components: {
    Private,
    Addres,
    Pasport,
  },
  data() {
    return {
      ...dataRoot,
      dispatch: false,
    };
  },
  validations: Vue__validationObjectPrivate,
  methods: {
    openModal(valid) {
      if (!valid.$invalid) {
      }
      const modal = document.querySelector(".modal");
        const overlay = document.querySelector(".overlay");
        modal.innerHTML = valid.$invalid ? 'Вы не заполнели все обязательные поля' : 'Клиент успешно создан';
        modal.innerHTML +=  this.dispatch ? ' ( данные будут отправлены )' : ' ( данные отправлены не будут )';
        modal.classList.add("active" , valid.$invalid ? 'error' : 'good');
        overlay.classList.add("active");
        setTimeout(() => {
          modal.classList.remove("active");
          overlay.classList.remove("active");
        }, 2000);
    },
    setName(value) {
      this.name = checkValue(value, "text");
      this.$v.name.$touch();
    },
    setSurname(value) {
      this.surname = checkValue(value, "text");
      this.$v.surname.$touch();
    },
    setLastname(value) {
      this.lastname = checkValue(value, "text");
      this.$v.lastname.$touch();
    },
    setBirth() {
      this.$v.birth.$touch();
    },
    setPhone(value) {
      this.phone = checkValue(value, "phone");
      this.$v.birth.$touch();
    },
    setGender() {
      this.$v.gender.$touch();
    },
    setClients() {
      this.$v.clients.$touch();
    },
    setDoctor() {
      this.$v.doctor.$touch();
    },
    setDispatch(value) {
      this.dispatch = value;
    },
    setIndex(value) {
      this.index = checkValue(value, "index");
      this.$v.index.$touch();
    },
    setCountry(value) {
      this.country = checkValue(value, "text");
      this.$v.country.$touch();
    },
    setRegion(value) {
      this.region = checkValue(value, "text");
      this.$v.region.$touch();
    },
    setCity(value) {
      this.city = checkValue(value, "text");
      this.$v.city.$touch();
    },
    setStreet(value) {
      this.street = checkValue(value, "text");
      this.$v.street.$touch();
    },
    setHouse(value) {
      this.house = checkValue(value, "house");
      this.$v.house.$touch();
    },
    setDocument() {
      this.$v.document.$touch();
    },
    setPasportSeries(value) {
      this.pasportSeries = checkValue(value, "pasport-series");
      this.$v.pasportSeries.$touch();
    },
    setPasportNumber(value) {
      this.pasportNumber = checkValue(value, "pasport-number");
      this.$v.pasportNumber.$touch();
    },
    setPasortOrganization(value) {
      this.pasportOrganization = checkValue(value, "text");
      this.$v.pasportOrganization.$touch();
    },
    setPasortDate() {
      this.$v.pasportDate.$touch();
    },
  },
};
</script>

<style lang="sass">
@import "./styles/scss/global"
@import './styles/scss/components/form'
@import './styles/scss/components/main'
</style>