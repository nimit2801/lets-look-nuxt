import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    tasks: [
      {
        content: 'hogehoge',
        done: false,
      },
    ],
  }),
  actions: {
    ADD_TASK(task: any) {
      this.tasks = [{ content: task, done: false }, ...this.tasks];
    },
    REMOVE_TASK(task: any) {
      this.tasks.splice(this.tasks.indexOf(task), 1);
    },
    TOGGLE_TASK(task: any) {
      task.done = !task.done;
    },
  },
});

// export const state = () => ({
//   tasks: [
//     {
//       content: 'hogehoge',
//       done: false,
//     },
//   ],
// });

// export const mutations = {
//   ADD_TASK(state: { tasks: any[] }, { task }: any) {
//     state.tasks = [{ content: task, done: false }, ...state.tasks];
//   },
//   REMOVE_TASK(state: { tasks: any[] }, { task }: any) {
//     state.tasks.splice(state.tasks.indexOf(task), 1);
//   },
//   TOGGLE_TASK(state: any, { task }: any) {
//     task.done = !task.done;
//   },
// };
