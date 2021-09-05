<template>
  <section class="form-section form-section--private">
    <legend class="form-section__title">Паспорт</legend>
    <!-- Тип документа -->
    <Group
      @update-document="setDocument"
      :validate="validate.document"
      :info="documentInfo"
      :nameElement="'document'"
    ></Group>
    <!-- Серия паспорта -->
    <Group
      @update-pasport_series="setPasportSeries"
      :validate="validate.pasportSeries"
      :info="pasportSeriesInfo"
      :nameElement="'pasport_series'"
    ></Group>
    <!-- Номер паспорта -->
    <Group
      @update-pasport_number="setPasportNumber"
      :validate="validate.pasportNumber"
      :info="pasportNumberInfo"
      :nameElement="'pasport_number'"
    ></Group>
    <!-- Кем выдан паспорт -->
    <Group
      @update-pasport_organization="setPasportOrganization"
      :validate="validate.pasportOrganization"
      :info="pasportOranizationInfo"
      :nameElement="'pasport_organization'"
    ></Group>
    <!-- Когда выдан паспорт -->
    <Group
      @update-pasport_date="setPasportDate"
      :validate="validate.pasportDate"
      :info="pasportDateInfo"
      :nameElement="'pasport_date'"
    ></Group>
  </section>
</template>

<script>
import Group from "../../Group.vue";
import { INFO } from "../../../data/index.js";
export default {
  name: "Pasport",
  props: ["validate"],
  components: {
    Group,
  },
  data() {
    return {
      documentInfo: INFO.document,
      pasportSeriesInfo: INFO.pasportSeries,
      pasportNumberInfo: INFO.pasportNumber,
      pasportOranizationInfo: INFO.pasportOrganization,
      pasportDateInfo: INFO.pasportDate,
    };
  },
  methods: {
    setDocument(value) {
      this.$emit("update-value-document", value);
    },
    setPasportSeries(value) {
      this.$emit("update-value-pasport_series", value);
    },
    setPasportNumber(value) {
      this.$emit("update-value-pasport_number", value);
    },
    setPasportOrganization(value) {
      this.$emit("update-value-pasport_organization", value);
    },
    setPasportDate(value) {
      this.$emit("update-value-pasport_date", value);
    },
  },
};
</script>