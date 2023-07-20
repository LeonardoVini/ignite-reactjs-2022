import styled, { css } from 'styled-components'

import { Link, LinkProps } from 'react-router-dom'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0;
`

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 0.75rem;
`

export const Geolocation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;

  background: ${({ theme }) => theme.colors['purple-light']};

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }

  span {
    color: ${({ theme }) => theme.colors['purple-dark']};
    font-size: 0.875rem;
  }
`

interface CartContentProps extends LinkProps {
  selectedcoffeesqtd: number
}

export const CartContent = styled(Link)<CartContentProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;

  position: relative;

  width: 38px;
  height: 38px;
  border-radius: 6px;

  background: ${({ theme }) => theme.colors['yellow-light']};
  color: ${({ theme }) => theme.colors['yellow-dark']};

  line-height: 0;

  ${({ selectedcoffeesqtd }) =>
    selectedcoffeesqtd > 0 &&
    css`
      &::after {
        content: '${selectedcoffeesqtd}';
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        bottom: 28px;
        left: 28px;
        background: ${({ theme }) => theme.colors['yellow-dark']};
        color: ${({ theme }) => theme.colors.white};
        font-size: 0.75rem;
      }
    `}
`
