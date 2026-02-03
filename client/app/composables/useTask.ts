import axios from "axios"
import { ElNotification } from "element-plus"
import type { Task } from "~/types/task"

export default function () {
    const tasks = reactive<Task[]>([])
    const taskForm = reactive<Partial<Task>>({})

    async function createTask() {
        await axios.post('http://localhost:8000/api/createTask', taskForm, {
            withCredentials: true
        }).then(response => {
            navigateTo('/dashboard')
            ElNotification({
                title: 'Success',
                message: 'Task created successfully',
                type: 'success',
            })
        }).catch((error) => {
            ElNotification({
                title: 'Error',
                message: error.response.data.message || 'Task creation failed',
                type: 'error',
            })
        })
    }

    async function getTasks() {
        const response = await axios.get('http://localhost:8000/api/getTasks')
        tasks.splice(0, tasks.length)

        response.data.forEach((task: Task) => tasks.push(task))
        return response.data
    }

    async function updateTask(id: number) {
        const response = await axios.put(`http://localhost:8000/api/updateTask/${id}`, taskForm)
        if (response.status !== 200) {
            throw new Error('Task update failed')
        }
        return response.data
    }

    async function deleteTask(id: number) {
        const response = await axios.delete(`http://localhost:8000/api/deleteTask/${id}`).then(async response => {
            await getTasks()
            ElNotification({
                title: 'Success',
                message: 'Task deleted successfully',
                type: 'success',
            })
        }).catch((error) => {
            ElNotification({
                title: 'Error',
                message: error.response.data.message || 'Task deletion failed',
                type: 'error',
            })
        })
    }

    return {
        tasks,
        createTask,
        getTasks,
        updateTask,
        deleteTask,
        taskForm
    }
}