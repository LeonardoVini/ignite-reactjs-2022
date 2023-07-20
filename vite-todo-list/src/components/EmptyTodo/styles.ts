import styled from "styled-components";

export const EmptyTodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 244px;

  margin-top: 1.5rem;

  border-top: 1px solid ${({ theme }) => theme.colors["gray-400"]};
  border-radius: 8px;

  span {
    color: ${({ theme }) => theme.colors["gray-300"]};
  }

  span#bold-text {
    margin-top: 1rem;
    font-weight: bold;
  }
`