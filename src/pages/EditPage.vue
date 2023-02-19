<template>
  <q-page>
    <div class="row q-pa-md">
      <q-btn color="primary" label="< Back" @click="$router.push('/')" class="q-ma-sm"/>
      <q-btn color="red" label="Delete" @click="deleteTask()" class="q-ma-sm"/>
    </div>
    <div class="row col-auto q-pa-md">
      <q-card class="q-pa-md col-md-8 col">
        <TaskForm @submit="$event => onSubmit($event)" :task="form"></TaskForm>
      </q-card>

    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TaskForm from 'components/TaskForm.vue'

export default defineComponent({
  name: 'EditPage',
  components: {
    TaskForm
  },
  data: () => {
    return {
      form: {
        name: null,
        description: null
      },
      id: null
    }
  },
  methods: {
    onSubmit(form: unknown) {
      this.$store.dispatch('task/updateTask', {data: form, id: this.$route.params.id}).then(() => {
        this.$q.dialog({
          message:'Task updated',
          title:'Success!',
        })
        setTimeout(() => {
          this.$router.push('/')
        },1000)
      })
    },
    deleteTask() {
      this.$q.dialog({
          title: 'Are you sure?',
					message: 'Are you sure you want to delete this task?',
          persistent: true,
          cancel: true
      }).onOk(() => {
        this.$store.dispatch('task/deleteTask', this.$route.params.id).then(() => {
          this.$q.dialog({
            message:'Task deleted',
            title:'Success!',
            cancel: true
          })
          setTimeout(() => {
            this.$router.push('/')
          },1000)
        })
      })
    }
  },
  async mounted() {
    this.$store.dispatch('task/getTask', this.$route.params.id).then((response) => {
      this.form = response
    })
  }
});
</script>
