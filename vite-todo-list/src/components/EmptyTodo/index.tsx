import { Clipboard } from "../Clipboard";

import { EmptyTodoContainer } from "./styles";

export function EmptyTodo() {
  return (
    <EmptyTodoContainer>
      <Clipboard />
      <span id="bold-text">Você ainda não tem tarefas cadastradas</span>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </EmptyTodoContainer>
  )
}