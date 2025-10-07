import { useState } from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { TodoFilters } from './components/TodoFilters';
import { useTodos } from './hooks/useTodos';
import { FILTERS } from './utils/constants';
import './App.css';

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo, editTodo, clearCompleted } = useTodos();
  const [filter, setFilter] = useState(FILTERS.ALL);

  const filteredTodos = todos.filter(todo => {
    if (filter === FILTERS.ACTIVE) return !todo.completed;
    if (filter === FILTERS.COMPLETED) return todo.completed;
    return true;
  });

  const itemsLeft = todos.filter(todo => !todo.completed).length;
  const hasCompleted = todos.some(todo => todo.completed);

  return (
    <div className="app">
      <div className="todo-container">
        <h1 className="app-title">Todo List</h1>
        
        <TodoForm onAdd={addTodo} />
        
        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
        
        {todos.length > 0 && (
          <TodoFilters
            currentFilter={filter}
            onFilterChange={setFilter}
            itemsLeft={itemsLeft}
            onClearCompleted={clearCompleted}
            hasCompleted={hasCompleted}
          />
        )}
      </div>
    </div>
  );
}

export default App;