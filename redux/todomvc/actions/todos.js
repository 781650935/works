//action实际上现在只是函数提供者, 在flux当中todoAction拆分了
import * as types from '../constants/ActionTypes'

export function addTodo(text) {
    return {type: types.ADD_TODO, text}
}

export function deleteTodo(id) {
    return {type: types.DELETE_TODO, id}
}

export function editTodo(id, text) {
    return {type: types.EDIT_TODO, id, text}
}

export function completeTodo(id) {
    return {type: types.COMPLETE_TODO, id}
}

export function completeAll() {
    return {type: types.COMPLETE_ALL}
}

export function clearCompleted() {
    return {type: types.CLEAR_COMPLETED}
}
