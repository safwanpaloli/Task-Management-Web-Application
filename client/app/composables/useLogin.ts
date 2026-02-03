import axios from 'axios'
import { ElNotification } from 'element-plus'

export default function useLogin() {
    const loginCredentials = reactive({ email: '', password: '' })

    const login = async () => {
        await axios.post('http://localhost:8000/api/login', loginCredentials).then((res) => {
            const data = res.data
            const cookie = useCookie('auth_token')
            const user = useCookie('user_info')
            user.value = data.user
            cookie.value = data.token
            navigateTo('/dashboard')
            return res
        }).catch((error) => {
            ElNotification({
                title: 'Error',
                message: 'Login failed',
                type: 'error',
            })

        })
    }

    const logout = () => {
        const cookie = useCookie('auth_token')
        cookie.value = null
        navigateTo('/')
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
