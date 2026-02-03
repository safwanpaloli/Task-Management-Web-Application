<template>
  <div class="min-h-screen bg-gray-100">
    <div class="max-w-2xl mx-auto p-6">
      <h1 class="text-3xl font-bold mb-6 text-gray-800">Task List</h1>

      <div class="space-y-3">
        <div
          v-for="task in tasks"
          :key="task.id"
          class="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition"
        >
          <!-- Task title -->
          <span
            :class="[
              'ml-3 flex-1',
              task.completed
                ? 'line-through text-gray-400'
                : 'text-gray-800'
            ]"
          >
            {{ task.title }}
          </span>

          <!-- Priority badge -->
          <span
            class="text-xs font-medium px-2 py-1 rounded"
            :class="
              task.priority === 'high'
                ? 'bg-red-100 text-red-800'
                : task.priority === 'medium'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-green-100 text-green-800'
            "
          >
            {{ task.priority }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type Task = {
  id: number
  title: string
  completed: boolean
  priority: 'high' | 'medium' | 'low'
}

const tasks = ref<Task[]>([
  { id: 1, title: 'Complete project documentation', completed: false, priority: 'high' },
  { id: 2, title: 'Review pull requests', completed: true, priority: 'medium' },
  { id: 3, title: 'Update dependencies', completed: false, priority: 'low' },
  { id: 4, title: 'Fix bug in auth module', completed: false, priority: 'high' },
  { id: 5, title: 'Write unit tests', completed: false, priority: 'medium' },
])
</script>
