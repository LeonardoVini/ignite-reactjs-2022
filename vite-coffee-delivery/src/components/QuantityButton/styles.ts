import styled from 'styled-components'

interface ContainerProps {
  size: 'small' | 'large'
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;

  width: 4.5rem;
  height: ${({ size }) => (size === 'small' ? '2rem' : '2.375rem')};

  background-color: ${({ theme }) => theme.colors['base-button']};

  span {
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors['base-title']};
  }

  button {
    line-height: 0;
    border: 0;
    background-color: transparent;
    cursor: pointer;

    svg {
      color: ${({ theme }) => theme.colors.purple};
    }

    &:hover,
    &:hover {
      svg {
        transition: color 0.2s;
        color: ${({ theme }) => theme.colors['purple-dark']};
      }
    }
  }
`
