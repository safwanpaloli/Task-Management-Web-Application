<template>
  <div class="min-h-screen bg-gray-100">
    <div class="max-w-2xl mx-auto p-6">
      <div class="d-flex justify-between">
         <div class="heading">
        <h1 class="text-3xl font-bold mb-6 text-gray-800">Task List</h1>
      </div>
      <div class="actions">
        <NuxtLink
          to="/create_task"
          class="inline-block mb-4 px-4 mx-2 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
        >
          Create New Task
        </NuxtLink>
          <button @click="logout"
          class="inline-block mb-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-indigo-600 transition"
        >
          Logout
          </button>
      </div>
      <div class="user-type">
        
      </div>
      </div>
      <div v-if="tasks.length > 0" class="space-y-3">
        <div
          v-for="task in tasks"
          :key="task.id"
          class="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition"
        >
          <span>
                {{ task.status }}
          </span>
          <!-- Task title -->
          <span
            :class="[
              'ml-3 flex-1',
              task.completed ? 'line-through text-gray-400' : 'text-gray-800',
            ]"
          >
            {{ task.title }}
          </span>
          <div class="actions">
            <NuxtLink
              :to="`/create_task?id=${task.id}`"
              class="inline-block px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
            >
              Edit
            </NuxtLink>
            <button @click="deleteTask(task.id)" class="inline-block ml-3 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
                Delete
            </button>
            </div>
        </div>
      </div>
      <div v-else class="text-center text-gray-500 border-1 border-slate-200 p-5 rounded-lg">
        No tasks available. Please create a new task.  
    </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useLogin } from '#imports';

definePageMeta({
  middleware: 'auth'
})

const {
    logout
} = useLogin()
const {
    deleteTask,
    updateTask,
    tasks,
    getTasks
} = useTask()

await getTasks()
</script>
