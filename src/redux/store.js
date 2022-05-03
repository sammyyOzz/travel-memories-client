import { configureStore } from '@reduxjs/toolkit'
import memoriesReducer from './memories/memories.slice'


export default configureStore({
    reducer: {
      memories: memoriesReducer,
    },
})
  