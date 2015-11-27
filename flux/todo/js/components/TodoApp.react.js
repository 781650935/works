var Footer = require('./Footer.react');
var Header = require('./Header.react');
var MainSection = require('./MainSection.react');
var React = require('react');
var TodoStore = require('../stores/TodoStore');


var TodoApp = React.createClass({

    getInitialState: function () {
        return {
            allTodos: TodoStore.getAll(),
            areAllComplete: TodoStore.areAllComplete()
        };
    },

    componentDidMount: function () {
        TodoStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        TodoStore.removeChangeListener(this._onChange);
    },

    render: function () {
        return (
            <div>
                <Header />
                <MainSection allTodos={this.state.allTodos} reAllComplete={this.state.areAllComplete}/>
                <Footer allTodos={this.state.allTodos}/>
            </div>
        );
    },

    _onChange: function () {
        this.setState({
            allTodos: TodoStore.getAll(),
            areAllComplete: TodoStore.areAllComplete()
        });
    }

});

module.exports = TodoApp;