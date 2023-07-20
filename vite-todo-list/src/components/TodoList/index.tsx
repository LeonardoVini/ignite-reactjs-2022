import { Trash } from "phosphor-react";
import { useState } from "react";
import { Task } from "../../pages/Home";

import { TodoListContainer, TodoItem, CheckboxContainer, Description, } from "./styles";

interface TodoListProps {
  tasks: Task[]
  deleteTask: (id: string) => void
  markAsChecked: (id: string) => void
}

export function TodoList({ tasks, deleteTask, markAsChecked }: TodoListProps) {
  function handleChange(id: string) {
    markAsChecked(id)
  }

  return (
    <TodoListContainer>
      {tasks.map(task => (
        <TodoItem key={task.id}>
          <CheckboxContainer>
            <input type="checkbox" checked={task.isCompleted} onChange={() => handleChange(task.id)} />
            <span></span>
          </CheckboxContainer>

          <Description isChecked={task.isCompleted}>{task.name}</Description>

          <Trash size={24} onClick={() => deleteTask(task.id)} />
        </TodoItem>
      ))}
    </TodoListContainer> 
  )
}