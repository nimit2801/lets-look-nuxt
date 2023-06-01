<template>
  <div>
    <main>
      <h1>Task Board</h1>
      <p>Create a list of taks!</p>
      <div class="create-new">
        <input type="text" v-model="newTask" placeholder="Add a new task" @keypress.enter="addTask">
        <button @click="addTask">Add</button>
      </div>

      <div class="tasks">
        <!-- Component -->
        <Task v-for="(task, i) in store.tasks" :key="i" :task="task" />
      </div>
    </main>
  </div>
</template>


<script>

import { useMainStore } from './store/index.ts';
export default {
  setup() {
    const store = useMainStore();
    return { store };
  },
  data() {
    return {
      newTask: '',
    }
  },
  methods: {
    addTask() {
      if (this.newTask) {
        console.log(this.newTask);
        const store = useMainStore();
        store.ADD_TASK(this.newTask);
        this.newTask = '';
      }
    }
  }
}
</script>