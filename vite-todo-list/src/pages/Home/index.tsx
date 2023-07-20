import { PlusCircle, Trash } from "phosphor-react";
import { FormEvent, useState } from "react";
import { EmptyTodo } from "../../components/EmptyTodo";
import { Header } from "../../components/Header";
import { TodoList } from "../../components/TodoList";

import {
  FormContainer,
  HomeContainer,
  TodoContainer,
  TodoStatus,
} from "./styles";

export interface Task {
  id: string;
  isCompleted: boolean;
  name: string;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [task, setTask] = useState<string>('')

  function handleSubmit(event: FormEvent): void {
    event.preventDefault()

    const newTask: Task = {
      id: (Math.random() + 1).toString(36).substring(2),
      isCompleted: false,
      name: task,
    } 

    setTasks(state => [...state, newTask])
    setTask('')
  }

  function deleteTask(id: string): void {
    setTasks(state => [...state.filter(task => task.id !== id)])
  }

  function markAsChecked(id: string): void {
    const task = tasks.find(task => task.id === id)

    if (!task) {
      return
    }

    task.isCompleted = !task.isCompleted

    setTasks([...tasks])
  }

  const completedAmount = tasks
    .filter(task => task.isCompleted)
    .reduce((sum, acc) => sum + 1, 0)

  const totalAmount = tasks.length

  return (
    <HomeContainer>
      <Header />

      <FormContainer onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={e => setTask(e.target.value)}
          value={task}
        />
        <button type="submit">
          Criar
          <PlusCircle size={16} />
        </button>
      </FormContainer>

      <TodoContainer>
        <header>
          <TodoStatus
            completedAmount={completedAmount}
            totalAmount={totalAmount}
            variant="blue">
              Tarefas criadas
          </TodoStatus>
          <TodoStatus
            completedAmount={completedAmount}
            totalAmount={totalAmount}
            variant="purple">
              Concluídas
          </TodoStatus>
        </header>

        {!tasks.length 
          ? <EmptyTodo /> 
          : <TodoList
            tasks={tasks}
            deleteTask={deleteTask}
            markAsChecked={markAsChecked}
          />
        }
      </TodoContainer>
    </HomeContainer>
  );
}
