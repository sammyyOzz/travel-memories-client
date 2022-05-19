import { createSlice } from '@reduxjs/toolkit'
import { asyncRequest } from '../services'
import * as asyncReducers from './memories.extraReducers'

const namespace = 'memories'

/*************************************************************
 * async thunks
 *************************************************************/
export const getMemories = asyncRequest(`${namespace}/getMemories`, '/api/memory', 'get')
export const saveMemory = asyncRequest(`${namespace}/saveMemory`, '/api/memory', 'post')
export const getComments = asyncRequest(`${namespace}/getComments`, '/api/comment', 'get')
export const createComment = asyncRequest(`${namespace}/createComment`, '/api/comment', 'post')



const DEFAULT = { status: null, data: null, error: null }

/*************************************************************
 * slice
 *************************************************************/
const memoriesSlice = createSlice({
    name: 'memories',

    initialState: {
        memories: { ...DEFAULT, data: [] },
        saveMemory: DEFAULT,
        memoryForDisplay: DEFAULT,
        comments: { ...DEFAULT, data: [] },
        createComment: DEFAULT,
    },
    
    reducers: {
        setMemoryForDisplay(state, { payload }) {
            state.memoryForDisplay.data = payload
        },
        clearComments(state) {
            state.comments = { ...DEFAULT, data: [] }
        }
    },

    extraReducers: {
        [getMemories.pending]: asyncReducers.getMemoriesPending,
        [getMemories.fulfilled]: asyncReducers.getMemoriesFulfilled,
        [getMemories.rejected]: asyncReducers.getMemoriesRejected,

        [saveMemory.pending]: asyncReducers.saveMemoryPending,
        [saveMemory.fulfilled]: asyncReducers.saveMemoryFulfilled,
        [saveMemory.rejected]: asyncReducers.saveMemoryRejected,

        [getComments.pending]: asyncReducers.getCommentsPending,
        [getComments.fulfilled]: asyncReducers.getCommentsFulfilled,
        [getComments.rejected]: asyncReducers.getCommentsRejected,

        [createComment.pending]: asyncReducers.createCommentPending,
        [createComment.fulfilled]: asyncReducers.createCommentFulfilled,
        [createComment.rejected]: asyncReducers.createCommentRejected,
    }
})

export const { 
    addNewMemory, 
    setMemoryForDisplay,
    clearComments 

} = memoriesSlice.actions

export default memoriesSlice.reducer