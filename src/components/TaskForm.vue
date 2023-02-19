<template>
  <div class="q-gutter-md">
    <q-input
      filled
      v-model="form.name"
      label="Task name"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'This field is required']"
    />

    <q-input
      filled
      v-model="form.description"
      label="Description"
      lazy-rules
      type="textarea"
    />
    <div>
      <q-btn label="Submit" type="submit" color="primary" @click="onSubmit"/>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TaskForm',
  components: { },
  data: () => {
    return {
      form: {
        name: null,
        description: null
      }
    }
  },
  props: ['task'],
  methods: {
    onSubmit() {
      this.$emit('submit', this.form)
    }
  },
  watch: {
    task(newValue) {
      this.form.name = newValue.name
      this.form.description = newValue.description
    }
  },
});
</script>
