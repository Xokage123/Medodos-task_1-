<template>
  <section class="form-section form-section--private">
    <legend class="form-section__title">Адрес</legend>
    <!-- Фамилия -->
    <Group
      @update-index="setIndex"
      :validate="validate.index"
      :info="indexInfo"
      :nameElement="'index'"
    ></Group>
     <!-- Страна -->
    <Group
      @update-country="setCountry"
      :validate="validate.country"
      :info="countryInfo"
      :nameElement="'country'"
    ></Group>
    <!-- Регион -->
    <Group
      @update-region="setRegion"
      :validate="validate.region"
      :info="regionInfo"
      :nameElement="'region'"
    ></Group>
    <!-- Город -->
    <Group
      @update-city="setCity"
      :validate="validate.city"
      :info="cityInfo"
      :nameElement="'city'"
    ></Group>
    <!-- Улица -->
    <Group
      @update-street="setStreet"
      :validate="validate.street"
      :info="streetInfo"
      :nameElement="'street'"
    ></Group>
    <!-- Дом -->
    <Group
      @update-house="setHouse"
      :validate="validate.house"
      :info="houseInfo"
      :nameElement="'house'"
    ></Group>
  </section>
</template>

<script>
import Group from "../../Group.vue";
import { INFO } from "../../../data/index.js";

export default {
  name: "Addres",
  props: ["validate"],
  components: {
    Group,
  },
  data() {
    return {
      indexInfo: INFO.index,
      countryInfo: INFO.country,
      regionInfo: INFO.region,
      cityInfo: INFO.city,
      streetInfo: INFO.street,
      houseInfo: INFO.house,
    };
  },
  methods: {
    setIndex(value) {
      this.$emit("update-value-index", value);
    },
    setCountry(value) {
      this.$emit("update-value-country", value);
    },
    setRegion(value) {
      this.$emit("update-value-region", value);
    },
    setCity(value) {
      this.$emit("update-value-city", value);
    },
    setStreet(value) {
      this.$emit("update-value-street", value);
    },
    setHouse(value) {
      this.$emit("update-value-house", value);
    },
  },
};
</script>