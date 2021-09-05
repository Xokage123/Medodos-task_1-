<template>
  <div class="form-group">
    <div
      v-if="
        info.input.type === 'text' ||
        info.input.type === 'date' ||
        info.input.type === 'tel'
      "
    >
      <label
        class="form-label"
        :class="{
          success: !validate.$invalid && validate.$model,
          error: validate.$invalid,
        }"
      >
        {{ info.label.text }}
        <input
          :type="info.input.type"
          :name="info.input.name"
          class="form-input"
          :placeholder="info.input.placeholder"
          :class="{
            'form-input--error': validate.$error,
            'form-input--sucess': !validate.$invalid,
          }"
          v-model.trim="validate.$model"
          @input="setValue($event.target.value, nameElement)"
        />
      </label>
    </div>
    <div v-else-if="info.input.type === 'radio'">
      <h2
        :class="{
          success: !validate.$invalid && validate.$model,
          error: validate.$invalid,
        }"
        class="form__label"
      >
        {{ info.label.text }}
      </h2>
      <label class="form__label-radio">
        М
        <input
          @input="setValue($event.target.value)"
          v-model.trim="validate.$model"
          class="form-input"
          :type="info.input.type"
          :name="info.input.name"
          value="man"
        />
        <span></span>
      </label>
      <label class="form__label-radio">
        Ж
        <input
          @input="setValue($event.target.value)"
          v-model.trim="validate.$model"
          class="form-input"
          :type="info.input.type"
          :name="info.input.name"
          value="woman"
        />
        <span></span>
      </label>
    </div>
    <div v-else-if="info.input.type === 'select'">
      <label
        class="form-label"
        :class="{
          success: !validate.$invalid && validate.$model,
          error: validate.$invalid,
        }"
      >
        {{ info.label.text }}
      </label>
      <multiselect
        @select="(value) => setValue(value, nameElement)"
        v-model="validate.$model"
        class="form-input"
        :multiple="info.input.multiple ? info.input.multiple : false"
        :options="info.input.value"
        :searchable="false"
        :close-on-select="info.input.multiple ? false : true"
        :show-labels="true"
        :placeholder="info.input.placeholder"
      ></multiselect>
    </div>
    <Errors
      :value="validate.$model"
      :tests="{
        required: {
          text: info.tests.text.required,
          condition: !this.validate.required,
        },
        minLength: {
          text: info.tests.text.minLength,
          condition: !this.validate.minLength,
          number: info.tests.text.minLength
            ? this.validate.$params.minLength.min
            : null,
        },
      }"
    ></Errors>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import Errors from "./Errors/Errors.vue";

export default {
  name: "Group",
  props: ["validate", "info", "nameElement"],
  components: {
    Errors,
    Multiselect,
  },
  data() {
    return {
      value: null,
    };
  },
  methods: {
    setValue() {},
  },
  created() {
    this[`set${this.nameElement}`] = function (value) {
      this.$emit(`update-${this.nameElement}`, value);
    };
    this.setValue = function (value, name) {
      const nameFunction = `set${name}`;
      this[nameFunction](value);
    };
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>