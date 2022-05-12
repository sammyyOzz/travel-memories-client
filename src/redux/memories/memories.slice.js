import { createSlice } from '@reduxjs/toolkit'
import { asyncRequest } from '../services'
import * as asyncReducers from './memories.extraReducers'

const namespace = 'memories'

/*************************************************************
 * async thunks
 *************************************************************/
export const getMemories = asyncRequest(`${namespace}/getMemories`, '/api/memory', 'get')
export const saveMemory = asyncRequest(`${namespace}/saveMemory`, '/api/memory', 'post')



const DEFAULT = { status: null, data: null, error: null }

/*************************************************************
 * slice
 *************************************************************/
const memoriesSlice = createSlice({
    name: 'memories',

    initialState: {
        memories: { ...DEFAULT, data: [] },
        saveMemory: DEFAULT,
    },
    
    // reducers: {
        
    // },

    extraReducers: {
        [getMemories.pending]: asyncReducers.getMemoriesPending,
        [getMemories.fulfilled]: asyncReducers.getMemoriesFulfilled,
        [getMemories.rejected]: asyncReducers.getMemoriesRejected,

        [saveMemory.pending]: asyncReducers.saveMemoryPending,
        [saveMemory.fulfilled]: asyncReducers.saveMemoryFulfilled,
        [saveMemory.rejected]: asyncReducers.saveMemoryRejected,
    }
})

export const { addNewMemory } = memoriesSlice.actions

export default memoriesSlice.reducer