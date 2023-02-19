<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title @click="$router.push('/')">
          Task Management System
        </q-toolbar-title>

        <div>Technical Exam</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'MainLayout',

  components: {
  },

  setup () {
    return {
    }
  }
});
</script>
