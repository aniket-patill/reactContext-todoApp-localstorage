import React from "react";
import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoForm(){
    // Initialize a state variable to hold the user's input
    const [todo, setTodo] = useState("");
    
    // Get the addTodo function from the TodoContext
    const { addTodo } = useTodo();
    
    // Define a function to handle the form submission
    const add = (e)=>{
        // Prevent the default form submission behavior
        e.preventDefault();
        
        // If the user hasn't entered anything, don't do anything
        if(!todo) return;
        
        // Add the todo to the list of todos
        addTodo({todo,completed:false});
        
        // Clear the input field
        setTodo("");
    }
    
    // Return the form element
    return(
        <form onSubmit={add} className="flex">
            {/* Input field for the user to enter their todo */}
            <input type="text"
            placeholder="write todo"
            className="w-full border border-black/10 
            rounded-l-lg px-3 outline-none duration-150
             bg-white/20 py-1.5"
             value={todo}
             onChange={(e)=>setTodo(e.target.value)}/>
            {/* Submit button to add the todo */}
            <button className="inline-flex w-12 h-12 rounded-r-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50" type="submit">
                ➕  
            </button>
        </form>
    )
}

export default TodoForm;