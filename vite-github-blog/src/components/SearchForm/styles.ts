import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: 4.5rem;

  gap: 0.75rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      color: ${({ theme }) => theme.colors['base-subtitle']};
      font-size: 1.125rem;
      font-weight: 700;
    }

    span {
      color: ${({ theme }) => theme.colors['base-span']};
      font-size: 0.875rem;
    }
  }

  input {
    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors['base-border']};
    background: ${({ theme }) => theme.colors['base-input']};

    &::placeholder {
      color: ${({ theme }) => theme.colors['base-label']};
    }

    &:focus {
      transition: border 0.2s;
      border: 1px solid ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors['base-text']};
    }
  }
`
