import React, { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis/todosApi";

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);
  //   const { data: todos, isLoading } = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>isLoading: {isLoading ? "True" : "False"}</h4>
      <pre>{JSON.stringify(todo)}</pre>
      <button onClick={() => todoId != 1 && setTodoId(todoId - 1)}>
        Prev TODO
      </button>
      <button onClick={() => setTodoId(todoId + 1)}>Next TODO</button>
      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? "Done " : "Pending "}</strong>
            {todo.title}
          </li>
        ))}
      </ul> */}
    </>
  );
};
