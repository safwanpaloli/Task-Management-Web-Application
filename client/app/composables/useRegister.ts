import axios from "axios"
import { ElNotification } from "element-plus"

type User = {
    name?: string,
    email?: string,
    password?: string,
    confirmPassword?: string
}

export default function () {

    const registerForm = reactive<User>({})

    async function register() {
        const response = await axios.post('http://localhost:8000/api/register', registerForm).then((response) => {
            if (response && response.status == 201) {
                ElNotification({
                    title: 'Success',  
                    message: 'Registration successful',
                    type: 'success',
                })
                 navigateTo('/')
            }   
            
            return response?.data
        }).catch((error) => {
            ElNotification({
                title: 'Error',
                message: error.response.data.message || 'Registration failed',
                type: 'error',
            })
        })
    }

    return {
        registerForm,
        register
    }
}