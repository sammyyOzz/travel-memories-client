const MEMORIES_USER_TOKEN = 'memories-user-token'

export const userToken = sessionStorage.getItem(MEMORIES_USER_TOKEN);
export const setUserToken = data => sessionStorage.setItem(MEMORIES_USER_TOKEN, JSON.stringify(data))
export const removeUserToken = () => sessionStorage.removeItem(MEMORIES_USER_TOKEN);