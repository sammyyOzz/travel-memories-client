import { configureStore } from '@reduxjs/toolkit'
import memoriesReducer from './memories/memories.slice'
import authReducer from './auth/auth.slice'


export default configureStore({
    reducer: {
      auth: authReducer,
      memories: memoriesReducer,
    },
})
  