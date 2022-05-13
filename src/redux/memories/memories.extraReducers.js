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

export const getCommentsPending = (state) => {
    state.comments.status = HTTP_STATUS.PENDING
}

export const getCommentsFulfilled = (state, { payload }) => {
    state.comments.status = HTTP_STATUS.FULFILLED
    state.comments.data = payload
}

export const getCommentsRejected = (state, { payload }) => {
    state.comments.status = HTTP_STATUS.REJECTED
    state.comments.error = payload
}

export const createCommentPending = (state) => {
    state.createComment.status = HTTP_STATUS.PENDING
}

export const createCommentFulfilled = (state, { payload }) => {
    state.createComment.status = HTTP_STATUS.FULFILLED
    const oldComments = state.comments.data
    state.comments.data = [ ...oldComments, payload ]
}

export const createCommentRejected = (state, { payload }) => {
    state.createComment.status = HTTP_STATUS.REJECTED
    state.createComment.error = payload
}