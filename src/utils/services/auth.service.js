export const userToken = sessionStorage.getItem('memories-user-token')
export const setUserToken = data => sessionStorage.setItem('memories-user-token', JSON.stringify(data))
export const removeUserToken = () => sessionStorage.removeItem('memories-user-token')