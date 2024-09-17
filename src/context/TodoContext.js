import { createContext , useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id:1,
            todo: "Todo msg",
            completed: false
        } 
    ],
    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    toggleCompleted: (id) => {},
    filterTodo: (todo, id) => {}
})

export const useTodo = () =>{
    return useContext(TodoContext);
}

export const Todoprovider = TodoContext.Provider