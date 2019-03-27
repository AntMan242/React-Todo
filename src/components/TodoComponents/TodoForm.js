import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input>
                onChange={props.handleTodoChange}
                type='text'
                name='todo'
                value={props.value}
                placeholder='...todo'
            </input>

            <button onClick={props.handleAddTodo}>Ad Todo</button>
            <button onClick={props.handleClearTodos}>Clear Completed</button>
        </form>
    )
}

export default TodoForm;