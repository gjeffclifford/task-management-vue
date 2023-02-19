<template>
  <q-page>
    <div class="row q-pa-md">
      <q-btn color="primary" label="< Back" @click="$router.push('/')"/>
    </div>
    <div class="row col-auto q-pa-md">
      <q-card class="q-pa-md col-md-8 col">
        <TaskForm @submit="$event => onSubmit($event)"></TaskForm>
      </q-card>

    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TaskForm from 'components/TaskForm.vue'

export default defineComponent({
  name: 'CreatePage',
  components: {
    TaskForm
  },
  data: () => {
    return {
      form: {
        name: null,
        description: null
      }
    }
  },
  methods: {
    onSubmit(form: unknown) {
      this.$store.dispatch('task/createTask', form).then(() => {
        this.$q.dialog({
					message:'Task is created',
					title:'Success!',
				})
        setTimeout(() => {
          this.$router.push('/')
        },1000)
      })
    }
  }
});
</script>
