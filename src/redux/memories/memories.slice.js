import { createSlice } from '@reduxjs/toolkit'
import { defaultMemories } from '../../data/memories.data'


const memoriesSlice = createSlice({
    name: 'memories',

    initialState: {
        memories: defaultMemories
    },
    
    reducers: {
        
    },

    // extraReducers: {
    // }
})

export const {  } = memoriesSlice.actions

export default memoriesSlice.reducer