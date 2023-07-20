import styled, { css } from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  height: 100vh;

  margin: 0 auto;
`

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 8px;

  width: 100%;
  max-width: 46rem;

  margin-top: -27px;
  
  input {
    flex: 1;
    height: 54px;

    border-radius: 8px;
    background: ${({ theme }) => theme.colors["gray-500"]};
    border: 1px solid ${({ theme }) => theme.colors["gray-700"]};
    box-shadow: 2 2 2 2px ${(props) => props.theme.colors['gray-700']};
    color: ${({ theme }) => theme.colors["gray-100"]};

    padding: 0 1rem;

    &::placeholder {
      color: ${({ theme }) => theme.colors["gray-300"]};
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.purple_dark};
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 8px;

    width: 90px;
    height: 54px;
    border-radius: 8px;
    border: 0;

    font-weight: bold;
    font-size: 0.875rem;

    background: ${({ theme }) => theme.colors.blue_dark};
    color: ${({ theme }) => theme.colors.white};

    transition: all 0.2s;

    &:hover {
      background: ${({ theme }) => theme.colors.blue};
    }
  }
`

export const TodoContainer = styled.main`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 46rem;

  margin-top: 4rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

interface TodoStatusProps {
  variant: 'blue' | 'purple';
  completedAmount: number;
  totalAmount: number;
}

export const TodoStatus = styled.span<TodoStatusProps>`
  display: flex;
  align-items: center;
  
  position: relative;
  font-weight: bold;
  font-size: 0.875rem;

  color: ${({ theme, variant }) => theme.colors[variant]};

  &::after {
    ${({ totalAmount, variant }) => 
      variant === 'blue' && `content: '${totalAmount}'`
    };

    ${({ completedAmount, totalAmount, variant }) => 
      variant === 'purple' && totalAmount > 0 && completedAmount >= 0 && `content: '${completedAmount} de ${totalAmount}'` 
    };
    
    ${({ completedAmount, totalAmount, variant }) => 
      variant === 'purple' && totalAmount === 0 && completedAmount === 0 && `content: '${completedAmount}'` 
    };

    margin-left: 8px;
    padding: 2px 8px;
    color: ${({ theme }) => theme.colors["gray-200"]};
    background: ${({ theme }) => theme.colors["gray-400"]};
    border-radius: 999px;
    font-weight: bold;
    font-size: 0.75rem;
  }  
`