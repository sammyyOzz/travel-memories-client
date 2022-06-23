import { createSlice } from '@reduxjs/toolkit'
import { HTTP_STATUS } from '../../utils/constants/httpStatus.constant'
import { asyncRequest } from '../services'

const namespace = 'stripe'

export const payForPrivateMemory = asyncRequest(`${namespace}/payForPrivateMemory`, (objData) => `/api/stripe/${objData.memoryID}`, 'post')


const DEFAULT = { status: null, data: null, error: null }

/*************************************************************
 * slice
 *************************************************************/
const stripeSlice = createSlice({
    name: 'stripe',

    initialState: {
        payment: DEFAULT
    },
    
    // reducers: {
        
    // },

    extraReducers: {
        [payForPrivateMemory.pending](state) {
            state.payment.status = HTTP_STATUS.PENDING
        },
        [payForPrivateMemory.fulfilled](state, { payload }) {
            state.payment.status = HTTP_STATUS.FULFILLED
            state.payment.data = payload
        },
        [payForPrivateMemory.rejected](state, { payload }) {
            state.payment.status = HTTP_STATUS.REJECTED
            state.payment.error = payload
        }
    }
})

// export const { } = stripeSlice.actions

export default stripeSlice.reducer