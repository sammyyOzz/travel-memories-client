export const userToken = localStorage.getItem('memories-user-token')
export const setUserToken = data => localStorage.setItem('memories-user-token', JSON.stringify(data))
export const removeUserToken = () => localStorage.removeItem('memories-user-token')