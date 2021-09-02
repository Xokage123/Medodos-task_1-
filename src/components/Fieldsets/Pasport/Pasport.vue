<template>
  <section class="form-section form-section--private">
    <legend class="form-section__title">Паспорт</legend>
  </section>
</template>

<script>
export default {
  name: "Pasport",
  props: ["validate"],
  methods: {
    setName(value) {
      this.$emit('update-value-name', value)
    },
    setSurname(value) {
      this.$emit('update-value-surname', value)
    }
  },
};
</script>