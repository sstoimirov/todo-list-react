import * as React from "react";
import { TodoType } from "../../types";
export class Todo extends React.PureComponent<TodoType, {}>{
    render() {
        return (
            <div className="todo" id={this.props.todoId}>
                <div>{this.props.text}</div>
                <div onClick={this.props.onClick}>X</div>
            </div>
        )
    }
}