import React, { useEffect, useState } from 'react';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';

const App = () => {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('ITEMS');
    if (localValue === null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title) => {
    setTodos(prev => {
      return [
        ...prev,
        {
          id: crypto.randomUUID(),
          title,
          completed: false
        }
      ];
    });
  };

  const toggleTodo = (id, completed) => {
    setTodos(prev => {
      return prev.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };

  const deleteTodo = id => {
    setTodos(prev => {
      return prev.filter(todo => todo.id !== id);
    });
  };

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1>Todo List</h1>
      <TodoList todos={todos}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo} />
    </>
  );
};

export default App;
