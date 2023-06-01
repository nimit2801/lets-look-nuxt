<template>
    <div :class="`task ${task.done ? 'is-complete' : ''}`">
        <div class="content">
            {{ task.content }}
        </div>
        <div class="button">
            <button @click="toggleDone">{{ task.done ? 'Undo' : 'Done' }}</button>
            <button @click="removeTask" class=" delete">Delete</button>
        </div>
    </div>
</template>

<script>

import { useMainStore } from '../store/index.ts';
export default {
    props: ['task'],
    methods: {
        toggleDone() {
            const store = useMainStore();
            store.TOGGLE_TASK(this.task);
        },
        removeTask() {
            const store = useMainStore();
            store.REMOVE_TASK(this.task);
        }
    }
}
</script>