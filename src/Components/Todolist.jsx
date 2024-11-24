import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Todoform from './Todoform'
import Todo from './Todo'
import EditTodoForm from './EditTodoForm'




const Todolist = () => {
  const [todoValue, setTodo] = useState([]);
  const [showNewTask, setShowNewTask] = useState(false)
  const navigate = useNavigate();

  const createTodo = (todo) => {
   
      setTodo([...todoValue, { id: todoValue.length + 1, task: todo, isEditing: false }])
   
  }

  const deleteTodo = id => {
    setTodo (todoValue.filter(todo => todo.id !== id))
  }

  const editTodo = id => {
    setTodo(todoValue.map(todo => todo.id === id ? {...todo, isEditing:!todo.isEditing}: todo))

  }
  const updateTodo = (id, newTask) => {
    setTodo(todoValue.map((todo) =>
      todo.id === id ? { ...todo, task: newTask, isEditing: false } : todo
    ));
  };

  const handleShowNewTask = () => {
    navigate('/User'); // Navigate to /User route
  };


  return (
    <div className="container bg-slate-500 mx-auto mt-20 p-10 rounded-lg shadow-lg text-white text-center">
      <h1 className="text-4xl font-bold mb-8">Todo App</h1>
      <Todoform createTodo={createTodo} />
      <div className="mt-6 space-y-2">
        {todoValue.map((todo) =>
          todo.isEditing ? (
            <EditTodoForm
              key={todo.id}
              currentTask={todo.task}
              editTodo={(newTask) => updateTodo(todo.id, newTask)}
            />
          ) : (
            <Todo
              key={todo.id}
              task={todo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          )
        )}
      </div>
      
      {/* "Click x Time" button to switch to NewTask component */}
      <div className="flex justify-end mt-4">
        <button
          className="px-4 py-2 bg-blue-950 text-white rounded-lg hover:bg-slate-500"
          onClick={handleShowNewTask} // Switch component on click
        >
          Click x Time
        </button>
      </div>
    </div>
  );
};

export default Todolist;


