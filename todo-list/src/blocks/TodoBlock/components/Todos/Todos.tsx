import * as React from "react";
import { TodoType } from "../../types";
import { Todo } from "../Todo";
import { observer } from "mobx-react";

@observer
export class Todos extends React.PureComponent<{ todos: TodoType[], onClickDelete: Function }, {}>{
    render() {
        return (
            <div className="todos-wrapper">
                {this.props.todos.map(x => (
                    <Todo
                        key={x.todoId}
                        todoId={x.todoId}
                        text={x.text}
                        // isActive={x.isCompleted}
                        // isCompleted={x.isCompleted}
                        onClick={this.props.onClickDelete.bind(this, x.todoId)}
                    />
                ))}
            </div>
        )
    }
}