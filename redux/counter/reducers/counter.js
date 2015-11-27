import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter'

export default function counter(num = 0, action) {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return num + 1
        case DECREMENT_COUNTER:
            return num - 1
        default:
            return num
    }
}
