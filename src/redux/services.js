import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../utils/services/axios'


/**
 * @param {*string} actionType 
 * @param {*string | function} url 
 * @param {*string} method 
 * @returns thunk 
 */
export const asyncRequest = (actionType, url, method) => createAsyncThunk(actionType, async (objData, { rejectWithValue }) => {
  const endpoint = typeof url === 'string' 
    ? url
    : url(objData)
  
  try {
    const { data } = await axios[method](endpoint, ['get', 'delete'].includes(method) ? {} : objData);
    return data;
  } catch (err) {
    return rejectWithValue(err.response.data)
  }
})
