<template>
  <fieldset class="form-section form-section--private">
    <legend class="form-section__title">Личная информация</legend>
    <!-- Фамилия -->
    <div class="form-group">
      <label
        class="form-label"
        :class="{
          success: !validate.surname.$invalid,
          error: validate.surname.$invalid,
        }"
      >
        Фамилия*
        <input
          name="surname"
          class="form-input"
          placeholder="Введите фамилию"
          :class="{
            'form-input--error': validate.surname.$error,
            'form-input--sucess': !validate.surname.$invalid,
          }"
          v-model.trim="validate.surname.$model"
          @input="setSurname($event.target.value)"
        />
      </label>
      <small class="form-small error" v-if="!validate.surname.required">
        Поле обязательно для заполнения
      </small>
      <small class="form-small error" v-else-if="!validate.surname.minLength">
        Минимальное количество символом в этом поле
        {{ validate.surname.$params.minLength.min }}.
      </small>
      <small class="form-small success" v-else> Поле заполненно успешно</small>
    </div>
    <!-- Имя -->
    <div class="form-group">
      <label
        class="form-label"
        :class="{
          success: !validate.name.$invalid,
          error: validate.name.$invalid,
        }"
      >
        Имя*
        <input
          name="name"
          class="form-input"
          placeholder="Введите имя"
          :class="{
            'form-input--error': validate.name.$error,
            'form-input--sucess': !validate.name.$invalid,
          }"
          v-model.trim="validate.name.$model"
          @input="setName($event.target.value)"
        />
      </label>
      <small class="form-small error" v-if="!validate.name.required">
        Поле обязательно для заполнения
      </small>
      <small class="form-small error" v-else-if="!validate.name.minLength">
        Минимальное количество символом в этом поле
        {{ validate.name.$params.minLength.min }}.
      </small>
      <small class="form-small success" v-else> Поле заполненно успешно</small>
    </div>
    <!-- Отчество -->
    <div class="form-group">
      <label
        class="form-label"
        :class="{
          success: !validate.lastname.$invalid,
          error: validate.lastname.$invalid,
        }"
      >
        Отчество
        <input
          name="lastname"
          class="form-input"
          placeholder="Введите Отчество"
          :class="{
            'form-input--error': validate.lastname.$error,
            'form-input--sucess': !validate.lastname.$invalid,
          }"
          v-model.trim="validate.lastname.$model"
          @input="setLastname($event.target.value)"
        />
      </label>
      <small class="form-small error" v-if="!validate.lastname.minLength">
        Минимальное количество символом в этом поле
        {{ validate.name.$params.minLength.min }}.
      </small>
      <small
        class="form-small success"
        v-else-if="validate.lastname.$model.length > 0"
      >
        Поле заполненно успешно</small
      >
    </div>
    <!-- Дата рождения-->
    <div class="form-group">
      <label
        class="form-label"
        :class="{
          success: !validate.birth.$invalid,
          error: validate.birth.$invalid,
        }"
      >
        Дата рождения*
        <input
          type="date"
          name="birth"
          class="form-input"
          placeholder="Введите дату рождения"
          :class="{
            'form-input--error': validate.birth.$error,
            'form-input--sucess': !validate.birth.$invalid,
          }"
          v-model.trim="validate.birth.$model"
          @input="setBirth($event.target.value)"
        />
      </label>
      <small class="form-small error" v-if="!validate.birth.required">
        Поле обязательно для заполнения
      </small>
      <small class="form-small success" v-else> Поле заполненно успешно</small>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: "Private",
  props: ["validate"],
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
    setBirth(value) {
      console.log(new Date(value));
      this.$emit("update-value-birth");
    },
  },
};
</script>