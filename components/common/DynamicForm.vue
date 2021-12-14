<template>
  <div class="container">
    <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
  </div>
</template>


<script>

export default {
  props: ['schema', 'model', 'formOptions']
}
</script>