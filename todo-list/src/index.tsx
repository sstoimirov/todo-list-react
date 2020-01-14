import React from 'react';
import ReactDOM from 'react-dom';
import { TodoList } from "./blocks/TodoBlock/components"
import * as serviceWorker from './serviceWorker';
import { TodoState } from './blocks/TodoBlock/state';

ReactDOM.render(< TodoList dataProvider={new TodoState()} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
