<template>
  <q-page class="row justify-evenly">
    <TaskComponent></TaskComponent>
  </q-page>
</template>

<script lang="ts">
import TaskComponent from 'components/TaskComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { TaskComponent },
});
</script>
