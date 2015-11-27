import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from '../components/Counter'
import * as CounterActions from '../actions/counter'

export default connect(
    function (state) {
        return {
            counter: state.counter
        }
    },
    function (dispatch) {
        return bindActionCreators(CounterActions, dispatch);
    }
)(Counter);

//绑定 this.state
