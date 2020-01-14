export type TodoType = {
    todoId: string,
    text: string,
    // isCompleted: boolean,
    // isActive: boolean,
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void
}