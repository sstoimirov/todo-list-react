import * as React from "react";
export class TodoInput extends React.PureComponent<{
    todoText: string,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
    onChange: (e: React.FormEvent<HTMLInputElement>) => void
}, {}>{
    render() {
        return (
            <div>
                <input placeholder="Add todo..." value={this.props.todoText} onChange={this.props.onChange}></input>
                <button onClick={this.props.onClick}>Add</button>
            </div>
        )
    }
}