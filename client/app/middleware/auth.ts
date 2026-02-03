export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie('auth_token')

  console.log(token,'token in middleware')
  if (!token.value && to.path !== '/') {
    return navigateTo('/')
  }

  if (token.value && to.path === '/') {
    return navigateTo('/dashboard')
  }
})
