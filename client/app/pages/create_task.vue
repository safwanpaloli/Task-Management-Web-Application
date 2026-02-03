<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-lg bg-white rounded-xl shadow-lg p-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">
        Create Task
      </h2>

      <div class="space-y-4">
        <!-- Title -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Task Title
          </label>
          <input
            v-model="taskForm.title"
            type="text"
            placeholder="Enter task title"
            class="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <!-- Description -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            v-model="taskForm.description"
            rows="3"
            placeholder="Task details..."
            class="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>

        <!-- Status -->
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              v-model="taskForm.status"
              class="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-500"
            >
              <option value="pending">Pending</option>
              <option value="in_progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>

        <!-- Due Date -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Due Date
          </label>
          <input
            v-model="taskForm.due_date"
            type="date"
            class="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <!-- Actions -->
        <div class="flex justify-end gap-3 pt-4">
          <button
            type="reset"
            class="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            @click="createTask"
            class="px-5 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
          >
            Save Task
          </button>
        </div>
    </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import moment from 'moment';
const { createTask , taskForm, getTasks} = useTask()

definePageMeta({
  middleware: 'auth'
})

const route = useRoute()
const taskId = route.query.id as string | undefined

if (taskId) {
  const task = await getTasks().then(tasks => tasks.find(t => t.id === Number(taskId)))

  if (task) {
    if(task.due_date) {
      console.log(task.due_date,'taskskkljsdlkf')
      taskForm.due_date = moment(task.due_date).format('YYYY-MM-DD')
    }
    taskForm.id = task.id
    taskForm.title = task.title
    taskForm.description = task.description
    taskForm.status = task.status
    taskForm.due_date = task.due_date
  }
}
</script>
