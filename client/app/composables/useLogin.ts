import axios from 'axios'

export default function useLogin() {
    const loginCredentials = reactive({ email: '', password: '' })
    const login = async () => {
        const response = await axios.post('http://localhost:8000/api/login', loginCredentials)
        navigateTo('/dashboard')
        const data = response.data

        const cookie = useCookie('auth_token')
        cookie.value = data.token

        return data
    }

    const logout = () => {
        const cookie = useCookie('auth_token')
        cookie.value = null
    }

    const isLoggedIn = () => {
        const cookie = useCookie('auth_token')
        return !!cookie.value
    }

    return {
        loginCredentials,
        login,
        logout,
        isLoggedIn
    }
}
