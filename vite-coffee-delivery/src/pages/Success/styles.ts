import styled from 'styled-components'

export const DeliveryContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 5rem;

  > strong {
    font-size: 2rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors['yellow-dark']};
  }

  > p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors['base-subtitle']};
    line-height: 1.6;
    margin-top: 4px;
  }
`

export const DeliveryContent = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 2.5rem;

  aside {
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 32.875rem;

    padding: 2.5rem;

    gap: 2rem;

    background: linear-gradient(rgba(250, 250, 250, 1), rgba(250, 250, 250, 1))
        padding-box,
      linear-gradient(to right, rgba(219, 172, 44, 1), rgba(128, 71, 248, 1))
        border-box;
    border-radius: 6px 36px 6px 36px;
    border: 1px solid transparent;
  }
`

interface InfoContentProps {
  variant: 'pin' | 'timer' | 'dollar'
}

export const InfoContent = styled.div<InfoContentProps>`
  display: flex;
  align-items: center;

  gap: 0.75rem;

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 32px;
    height: 32px;
    border-radius: 50%;

    background: ${({ theme, variant }) =>
      (variant === 'pin' && theme.colors.purple) ||
      (variant === 'timer' && theme.colors.yellow) ||
      (variant === 'dollar' && theme.colors['yellow-dark'])};

    svg {
      color: ${({ theme }) => theme.colors.background};
    }
  }
`
