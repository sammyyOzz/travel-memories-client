import { createSlice } from '@reduxjs/toolkit'
import { asyncRequest } from '../services'
import * as asyncReducers from './memories.extraReducers'

const namespace = 'memories'

/*************************************************************
 * async thunks
 *************************************************************/
export const getMemories = asyncRequest(`${namespace}/getMemories`, '/api/memory', 'get')
export const saveMemory = asyncRequest(`${namespace}/saveMemory`, '/api/memory', 'post')
export const getMessages = asyncRequest(`${namespace}/getMessages`, (objData) => `/api/message/${objData.id}`, 'get')
export const createMessage = asyncRequest(`${namespace}/createMessage`, (objData) => `/api/message/${objData.id}`, 'post')



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
        messages: { ...DEFAULT, data: [] },
        createMessage: DEFAULT,
    },
    
    reducers: {
        setMemoryForDisplay(state, { payload }) {
            state.memoryForDisplay.data = payload
        },
        clearMessages(state) {
            state.messages = { ...DEFAULT, data: [] }
        },
        addUserIDToAuthorized(state, { payload }) {
            const memoryIndex = state.memories.data.findIndex(memory => memory._id === payload.memoryID)
            let memory = state.memories.data[memoryIndex]
            memory.authorized = [...memory.authorized, payload.userID]
            state.memories.data[memoryIndex] = memory
        }
    },

    extraReducers: {
        [getMemories.pending]: asyncReducers.getMemoriesPending,
        [getMemories.fulfilled]: asyncReducers.getMemoriesFulfilled,
        [getMemories.rejected]: asyncReducers.getMemoriesRejected,

        [saveMemory.pending]: asyncReducers.saveMemoryPending,
        [saveMemory.fulfilled]: asyncReducers.saveMemoryFulfilled,
        [saveMemory.rejected]: asyncReducers.saveMemoryRejected,

        [getMessages.pending]: asyncReducers.getMessagesPending,
        [getMessages.fulfilled]: asyncReducers.getMessagesFulfilled,
        [getMessages.rejected]: asyncReducers.getMessagesRejected,

        [createMessage.pending]: asyncReducers.createMessagePending,
        [createMessage.fulfilled]: asyncReducers.createMessageFulfilled,
        [createMessage.rejected]: asyncReducers.createMessageRejected,
    }
})

export const { 
    addNewMemory, 
    setMemoryForDisplay,
    clearMessages,
    addUserIDToAuthorized

} = memoriesSlice.actions

export default memoriesSlice.reducer