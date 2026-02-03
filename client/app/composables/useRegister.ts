import axios from "axios"

type User = {
    name?: string,
    email?: string,
    password?: string,
    confirmPassword?: string
}

export default function(){

    const registerForm = reactive<User>({})

    async function register() {
       const response =  await axios.post('http://localhost:8000/api/register', registerForm)
       if(response.status !== 200){
        throw new Error('Registration failed')
       }
        NavigateTo('/login')
         return response.data
    }
    return {
        registerForm,
        register
    }
}