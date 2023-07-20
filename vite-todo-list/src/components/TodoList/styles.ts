import styled, { css } from "styled-components"

export const TodoListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  margin-top: 1.5rem;
  padding-bottom: 1rem;

  list-style: none;
`

export const TodoItem = styled.li`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75px;

  width: 100%;
  padding: 1rem;

  background: ${({ theme }) => theme.colors["gray-500"]};

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors["gray-400"]};

  svg {
    color: ${({ theme }) => theme.colors["gray-300"]};

    transition: color 0.2s;

    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.danger};
      background: ${({ theme }) => theme.colors["gray-400"]};
      border-radius: 4px;
    }
  }
`

export const CheckboxContainer = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    border: 3px solid ${({ theme }) => theme.colors.blue};
    border-radius: 50%;
  }

  /* On mouse-over, add a grey background color */
  &:hover input ~ span {
    background-color: ${({ theme }) => theme.colors.blue_dark};
  }

  /* When the checkbox is checked, add a blue background */
  & input:checked ~ span {
    background-color: ${({ theme }) => theme.colors.purple_dark};
  }

  & input:hover:checked ~ span {
    background-color: ${({ theme }) => theme.colors.purple};
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  span:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  & input:checked ~ span:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  & span:after {
    left: 5px;
    top: 2px;
    width: 4px;
    height: 7px;
    border: solid white;
    border-width: 0 3px 3px 0;
    color: ${({ theme }) => theme.colors["gray-100"]};
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`

interface DescriptionProps {
  isChecked: boolean;
}

export const Description = styled.p<DescriptionProps>`
  margin-left: 36px;
  margin-right: auto;

  color: ${({ theme }) => theme.colors["gray-100"]};

  ${props => props.isChecked 
    ? css`
      color: ${({ theme }) => theme.colors["gray-300"]};
      text-decoration: line-through;
    `
    : css`
      color: ${({ theme }) => theme.colors["gray-100"]};
    `
  }
`