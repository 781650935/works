'use strict';

import type Immutable from 'immutable';
import type {Store} from 'flux/utils';
import type Todo from '../flux-infra/Todo';

import {Container} from 'flux/utils';
import Footer from './Footer.react';
import Header from './Header.react';
import MainSection from './MainSection.react';
import React, {Component} from 'react';
import TodoStore from '../flux-infra/TodoStore';

type State = {
    todos: Immutable.Map<string, Todo>,
    areAllComplete: boolean
};

class TodoApp extends Component<{}, {}, State> {

    static getStores(): Array<Store> {
        return [TodoStore];
    }

    static calculateState(prevState: ?State): State {
        return {
            todos: TodoStore.getState(),
            areAllComplete: TodoStore.areAllComplete(),
        };
    }

    render(): ?ReactElement {
        return (
            <div>
                <Header />
                <MainSection todos={this.state.todos} areAllComplete={this.state.areAllComplete}/>
                <Footer todos={this.state.todos} />
            </div>
        );
    }
}

const TodoAppContainer = Container.create(TodoApp);
export default TodoAppContainer;
