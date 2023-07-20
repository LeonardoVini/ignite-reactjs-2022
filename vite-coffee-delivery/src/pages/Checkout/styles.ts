import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  padding: 2.5rem 0;
`

export const OrderContent = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.75rem;

  strong {
    font-size: 1.125rem;
    font-family: 'Baloo 2', sans-serif;
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2.5rem;

  border-radius: 6px;

  background-color: ${({ theme }) => theme.colors['base-card']};

  svg {
    color: ${({ theme }) => theme.colors['yellow-dark']};
  }

  section {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    div {
      margin-left: 0.5rem;

      span {
        display: block;
        color: ${({ theme }) => theme.colors['base-subtitle']};
      }

      p {
        font-size: 0.875rem;
        color: ${({ theme }) => theme.colors['base-text']};
      }
    }
  }
`

export const AddressForm = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 1rem;
  column-gap: 0.75rem;

  width: 100%;

  margin-top: 2rem;

  input {
    height: 2.625rem;
    background: ${({ theme }) => theme.colors['base-input']};
    border: 1px solid ${({ theme }) => theme.colors['base-button']};
    color: ${({ theme }) => theme.colors['base-label']};
    border-radius: 4px;
    padding-left: 0.75rem;
    font-size: 0.875rem;
  }

  input:focus {
    border: 1px solid ${({ theme }) => theme.colors['yellow-dark']};
    /* remove placehold text */
    &::placeholder {
      color: transparent;
    }
  }

  input:disabled {
    opacity: 0.7;
  }

  input.cep {
    grid-column: 1 / 4;
    max-width: 12.5rem;
  }

  input.rua {
    grid-column: 1 / 4;
  }

  input.numero {
    grid-column: 1 / 2;
    max-width: 12.5rem;
  }

  input.complemento {
    grid-column: 2 / 4;
  }

  input.bairro {
    max-width: 12.5rem;
  }
`

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors['base-card']};
  padding: 2.5rem;

  border-radius: 6px;

  section {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    svg {
      color: ${({ theme }) => theme.colors.purple};
    }

    div {
      margin-left: 0.5rem;

      span {
        display: block;
        color: ${({ theme }) => theme.colors['base-subtitle']};
      }

      p {
        font-size: 0.875rem;
        color: ${({ theme }) => theme.colors['base-text']};
      }
    }
  }
`

export const PaymentMethod = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  margin-top: 2rem;

  button {
    display: flex;
    align-items: center;

    font-size: 0.75rem;

    padding: 1rem;
    gap: 0.75rem;

    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors['base-card']};
    background-color: ${({ theme }) => theme.colors['base-button']};
    color: ${({ theme }) => theme.colors['base-text']};

    cursor: pointer;

    svg {
      color: ${({ theme }) => theme.colors.purple};
    }

    &.active {
      background: ${({ theme }) => theme.colors['purple-light']};
      border: 1px solid ${({ theme }) => theme.colors['purple-dark']};
      color: ${({ theme }) => theme.colors['base-text']};
    }

    &:not(.active):hover {
      background: ${({ theme }) => theme.colors['base-hover']};
      color: ${({ theme }) => theme.colors['base-subtitle']};
      transition: background-color 0.2s;
    }
  }
`

export const CartListContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.75rem;

  width: 100%;
  max-width: 28rem;

  strong {
    font-size: 1.125rem;
    font-family: 'Baloo 2', sans-serif;
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-weight: 700;
  }
`

export const CartListContent = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors['base-card']};

  padding: 2.5rem;

  border-top-left-radius: 6px;
  border-top-right-radius: 44px;

  border-bottom-left-radius: 44px;
  border-bottom-right-radius: 6px;

  ul {
    list-style: none;

    hr {
      width: 100%;
      border: 1px solid ${({ theme }) => theme.colors['base-button']};
      margin: 1.5rem 0;
    }
  }
`

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  padding: 0 0.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;

  margin-top: 0.5rem;

  gap: 0.5rem;
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;

  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;
  border: 0;
  cursor: pointer;

  background-color: ${({ theme }) => theme.colors['base-button']};

  span {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors['base-text']};
  }

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-hover']};

    svg {
      color: ${({ theme }) => theme.colors['purple-dark']};
    }

    span {
      color: ${({ theme }) => theme.colors['base-subtitle']};
    }

    transition: background-color 0.2s, color 0.2s;
  }
`

export const Summary = styled.footer`
  display: flex;
  flex-direction: column;

  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      color: ${({ theme }) => theme.colors['base-text']};
    }

    span.reduced-font-size {
      font-size: 0.875rem;
    }

    strong {
      font-size: 1.25rem;
      color: ${({ theme }) => theme.colors['base-subtitle']};
    }
  }
`
export const ActionButton = styled.button`
  margin-top: 0.75rem;
  padding: 0.75rem 0.5rem;
  border: 0;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;

  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:not(:disabled):hover {
    transition: background-color 0.2s;
    background-color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`

export const NoItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;

  svg {
    color: ${({ theme }) => theme.colors['purple-dark']};
  }

  a {
    width: 100%;
    max-width: 16rem;

    text-decoration: none;
    text-align: center;

    padding: 0.75rem 0.5rem;
    border: 0;
    border-radius: 6px;

    background-color: ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      transition: background-color 0.2s;
      background-color: ${({ theme }) => theme.colors['yellow-dark']};
    }
  }
`
