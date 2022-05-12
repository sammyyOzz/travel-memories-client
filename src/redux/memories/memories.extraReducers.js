import { HTTP_STATUS } from '../../utils/constants/httpStatus.constant'

export const getMemoriesPending = (state) => {
    state.memories.status = HTTP_STATUS.PENDING
}

export const getMemoriesFulfilled = (state, { payload }) => {
    state.memories.status = HTTP_STATUS.FULFILLED
    state.memories.data = payload
}

export const getMemoriesRejected = (state, { payload }) => {
    state.memories.status = HTTP_STATUS.REJECTED
    state.memories.error = payload
}

export const saveMemoryPending = (state) => {
    state.saveMemory.status = HTTP_STATUS.PENDING
}

export const saveMemoryFulfilled = (state, { payload }) => {
    state.saveMemory.status = HTTP_STATUS.FULFILLED
    const oldMemories = state.memories.data
    state.memories.data = [ payload, ...oldMemories ]
}

export const saveMemoryRejected = (state, { payload }) => {
    state.saveMemory.status = HTTP_STATUS.REJECTED
    state.saveMemory.error = payload
}

