import { HTTP_STATUS } from "../../utils/constants/httpStatus.constant"

export const authUserPending = (state) => {
    state.user.status = HTTP_STATUS.PENDING
}

export const authUserFulfilled = (state, { payload }) => {
    state.user.status = HTTP_STATUS.FULFILLED
    state.user.data = payload.result
    state.user.error = null
    localStorage.setItem('memories-user-token', JSON.stringify(payload.token))
}

export const authUserRejected = (state, { payload }) => {
    state.user.status = HTTP_STATUS.REJECTED
    state.user.error = payload
    state.user.data = null
}

export const getLoggedInUserFulfilled = (state, { payload }) => {
    state.user.status = HTTP_STATUS.FULFILLED
    state.user.data = payload
    state.user.error = null
}