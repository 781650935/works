import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header'; //组件
import MainSection from '../components/MainSection'; //组件
import * as TodoActions from '../actions/todos';  //相比flux 这里的action已经和调度器 dispatch分离

class App extends Component {
    render() {
        const { todos, actions } = this.props;
        return (
            <div>
                <Header addTodo={actions.addTodo}/>
                <MainSection todos={todos} actions={actions}/>
            </div>
        )
    }
}

App.propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}
//connect方法 将 provider中的store属性映射到组件App的'this.props'中 ,
export default connect(
    function (state) {
        //state来自provider组件中的store中getState();
        return {
            todos: state.todos
        }
    },
    function (dispatch) {
        //dispatch是来自provider的store中dispatch(fn);
        //TodeActions是纯函数,经过bindActionCreators函数进行合并变成flux中的todoAction了;
        return {
            actions: bindActionCreators(TodoActions, dispatch)//实际上是将flux当中todoAction拆分后结合了
        }
    }
)(App);
