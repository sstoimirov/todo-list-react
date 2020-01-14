import * as React from "react";
import { observer } from "mobx-react";
import { TodoState } from "../../state";
import * as CMP from "../../components";

@observer
export class TodoList extends React.PureComponent<{ dataProvider: TodoState }, TodoState>{
    constructor(props) {
        super(props)
        this.state = this.props.dataProvider;
    }

    render() {
        return (
            <div>
                <CMP.TodoInput onClick={this.state.addTodo} todoText={this.state.inputText} onChange={this.state.updateInputValue} />
                <CMP.Todos todos={this.state.todos} onClickDelete={this.state.deleteTodo} />
                <div>{this.state.todosCount}</div>
            </div>
        )
    }
}