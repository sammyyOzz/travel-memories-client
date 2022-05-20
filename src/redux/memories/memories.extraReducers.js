import { HTTP_STATUS } from '../../utils/constants/httpStatus.constant'

export const getMemoriesPending = (state) => {
    state.memories.status = HTTP_STATUS.PENDING
}

export const getMemoriesFulfilled = (state, { payload }) => {
    state.memories.status = HTTP_STATUS.FULFILLED
    state.memories.data = payload.reverse()
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

export const getMessagesPending = (state) => {
    state.messages.status = HTTP_STATUS.PENDING
}

export const getMessagesFulfilled = (state, { payload }) => {
    state.messages.status = HTTP_STATUS.FULFILLED
    state.messages.data = payload
}

export const getMessagesRejected = (state, { payload }) => {
    state.messages.status = HTTP_STATUS.REJECTED
    state.messages.error = payload
}

export const createMessagePending = (state) => {
    state.createMessage.status = HTTP_STATUS.PENDING
}

export const createMessageFulfilled = (state, { payload }) => {
    state.createMessage.status = HTTP_STATUS.FULFILLED
    const oldMessages = state.messages.data
    state.messages.data = [ ...oldMessages, payload ]
}

export const createMessageRejected = (state, { payload }) => {
    state.createMessage.status = HTTP_STATUS.REJECTED
    state.createMessage.error = payload
}