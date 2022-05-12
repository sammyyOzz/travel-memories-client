import { createSlice } from '@reduxjs/toolkit'
import { HTTP_STATUS } from '../../utils/constants/httpStatus.constant'
import { asyncRequest } from '../services'
import * as asyncReducers from './auth.extraReducers'

const namespace = 'auth'

/*************************************************************
 * async thunks
 *************************************************************/
export const loginUser = asyncRequest(`${namespace}/loginUser`, '/api/user/login', 'post')
export const signupUser = asyncRequest(`${namespace}/signupUser`, '/api/user/signup', 'post')

/*************************************************************
 * slice
 *************************************************************/
const authSlice = createSlice({
    name: 'auth',

    initialState: {
        user: { status: null, data: null, error: null }
    },
    
    reducers: {
        
    },

    extraReducers: {
        [loginUser.pending]: asyncReducers.authUserPending,
        [loginUser.fulfilled]: asyncReducers.authUserFulfilled,
        [loginUser.rejected]: asyncReducers.authUserRejected,

        [signupUser.pending]: asyncReducers.authUserPending,
        [signupUser.fulfilled]: asyncReducers.authUserFulfilled,
        [signupUser.rejected]: asyncReducers.authUserRejected,
    }
})

// export const {  } = authSlice.actions

export default authSlice.reducer