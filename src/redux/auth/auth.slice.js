import { createSlice } from '@reduxjs/toolkit'
import { asyncRequest } from '../services'
import * as asyncReducers from './auth.extraReducers'

const namespace = 'auth'

/*************************************************************
 * async thunks
 *************************************************************/
export const loginUser = asyncRequest(`${namespace}/loginUser`, '/api/user/login', 'post')
export const signupUser = asyncRequest(`${namespace}/signupUser`, '/api/user/signup', 'post')
export const getLoggedInUser = asyncRequest(`${namespace}/getLoggedInUser`, '/api/user/getLoggedInUser', 'get')
export const forgotPassword = asyncRequest(`${namespace}/forgotPassword`, '/api/user/forgotPassword', 'post')
export const resetPassword = asyncRequest(`${namespace}/resetPassword`, '/api/user/resetPassword', 'post')


const DEFAULT = { status: null, data: null, error: null }

/*************************************************************
 * slice
 *************************************************************/
const authSlice = createSlice({
    name: 'auth',

    initialState: {
        user: DEFAULT
    },
    
    reducers: {
        logout(state) {
            state.user = DEFAULT
            localStorage.removeItem('memories-user-token')
        }
    },

    extraReducers: {
        [loginUser.pending]: asyncReducers.authUserPending,
        [loginUser.fulfilled]: asyncReducers.authUserFulfilled,
        [loginUser.rejected]: asyncReducers.authUserRejected,

        [signupUser.pending]: asyncReducers.authUserPending,
        [signupUser.fulfilled]: asyncReducers.authUserFulfilled,
        [signupUser.rejected]: asyncReducers.authUserRejected,

        [getLoggedInUser.pending]: asyncReducers.authUserPending,
        [getLoggedInUser.fulfilled]: asyncReducers.getLoggedInUserFulfilled,
        [getLoggedInUser.rejected]: asyncReducers.authUserRejected,
    }
})

export const { logout } = authSlice.actions

export default authSlice.reducer