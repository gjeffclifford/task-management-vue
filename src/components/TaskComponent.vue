<template>
  <div class="w-100">
    <div class="q-pa-md row justify-end">
      <q-btn color="secondary" label="Create Task" @click="$router.push('create')"/>
    </div>
    <div class="q-pa-md">
      <q-table
        title="Task"
        :rows="rows"
        :columns="columns"
        row-key="name"
        :loading="loading"
        @row-click="rowClicked"
        @update:pagination="paginate($event)"
      >
        <template v-slot:top-right>
          <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
      </q-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const columns = [
  {
    name: 'name',
    label: 'Name',
    required: true,
    // sortable: true,
    field: (row: { name: string; }) => row.name,
  },
  {
    name: 'description',
    label: 'Description',
    required: false,
    // sortable: true,
    field: (row: { description: string; }) => `${row.description.length > 50 ? row.description.substring(0,50) + '...' : row.description}`,
  }
]
export default defineComponent({
  name: 'TaskComponent',
  props: {},
  data: () => {
    return {
      rows: [],
      loading: true,
      filter: '',
      searchDebounce: 0,
      pagination: {},
    }
  },
  watch: {
    filter() {
      this.searchDebounce = window.setTimeout(() => {
        this.loading = true
        this.getTasks()
      }, 1000)
    }
  },
  setup() {
    return { columns };
  },
  methods: {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    rowClicked(event: Event, row: any) {
      this.$router.push(`edit/${row.id}`)
    },
    getTasks() {
      return this.$store.dispatch('task/getTasks', {keyword: this.filter, ...this.pagination}).then((response) => {
        this.loading = false
        this.rows = response.data
      });
    },
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    paginate(pagination: any) {
      this.pagination = pagination;
    }
  },
  async mounted() {
    this.getTasks()
  }
});
</script>
