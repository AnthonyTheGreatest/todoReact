import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul>
        {todos.length === 0 && <p>No Todos</p>} 
        {todos.map(todo => {
          return (
            <TodoItem {...todo}
                      key={todo.id}
                      toggleTodo={toggleTodo}
                      deleteTodo={deleteTodo} />
          );
        })}
    </ul>
  );
};

export default TodoList;
