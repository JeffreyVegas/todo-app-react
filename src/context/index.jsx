import { createContext, useState } from "react";
import useLocalStorege from "../hooks/useLocalStorege";

export const AppContex = createContext();

function Provaider({ children }) {
  const {
    data: todos,
    error,
    loading,
    updateData: updateTodo,
  } = useLocalStorege("TODOS", []);

  const [searchValue, setSearchValue] = useState("");

  const totalTodos = todos.length;
  const checkedTodos = todos.filter((el) => el.completed == true).length;

  let searchedTodos = [];
  if (searchValue.length === 0) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((el) =>
      el.todo.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({ todo: text, completed: false });
    updateTodo(newTodos);
  };

  const checkTodo = (text) => {
    const newTodos = [...todos];
    const index = todos.findIndex((el) => el.todo === text);
    newTodos[index].completed = !newTodos[index].completed;
    updateTodo(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const index = todos.findIndex((el) => el.todo === text);
    newTodos.splice(index, 1);
    updateTodo(newTodos);
  };

  return (
    <AppContex.Provider
      value={{
        addTodo,
        searchedTodos,
        checkTodo,
        deleteTodo,
        searchValue,
        setSearchValue,
        totalTodos,
        checkedTodos,
      }}
    >
      {children}
    </AppContex.Provider>
  );
}

export default Provaider;
