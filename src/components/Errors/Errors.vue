<template>
  <div>
     <small class="form-small error" v-if="(tests.required.text && tests.required.condition)">
      Поле обязательно для заполнения
    </small>
    <small class="form-small error" v-else-if="(tests.minLength.text && tests.minLength.condition)">
      Минимальное количество символом в этом поле
      {{ tests.minLength.number }}.
    </small>
    <small class="form-small success" v-else-if="this.value"> Поле заполненно успешно</small>
  </div>
</template>

<script>
export default {
  name: "Errors",
  props: ["tests", "value"]
};
</script>