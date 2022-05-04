import { createSlice } from '@reduxjs/toolkit'
import { defaultMemories } from '../../data/memories.data'


const memoriesSlice = createSlice({
    name: 'memories',

    initialState: {
        memories: defaultMemories
    },
    
    reducers: {
        addNewMemory(state, { payload }) {
            const previousMemories = state.memories
            state.memories = [payload, ...previousMemories]
        }
    },

    // extraReducers: {
    // }
})

export const { addNewMemory } = memoriesSlice.actions

export default memoriesSlice.reducer