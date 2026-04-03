import React, {useEffect, useState} from "react";
import {TodoProvider} from "./TodoContext";

const ContextProvider = ({children}) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)));
  };

  const deleteTodo = (id) => {
    setTodos((prev) => {
      return prev.filter((prevTodo) => prevTodo.id !== id);
    });
  };

  const toggleComplete = (id) => {
    const allTodos = [...todos];
    const findUpdateItemIndex = allTodos.findIndex((p) => p.id === id);

    allTodos[findUpdateItemIndex] = {
      ...allTodos[findUpdateItemIndex],
      completed: !allTodos[findUpdateItemIndex].completed,
    };

    setTodos(allTodos);
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
    {children}
    </TodoProvider>;
};

export default ContextProvider;