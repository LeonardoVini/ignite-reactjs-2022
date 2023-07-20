import styled, { css } from 'styled-components'

export const BannerContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  padding-top: 5.875rem;
  padding-bottom: 5.75rem;

  gap: 3.5rem;

  img {
    width: 476px;
    height: 360px;
  }
`

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 3rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    color: ${({ theme }) => theme.colors['base-title']};
  }

  h3 {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors['base-subtitle']};
    margin-top: 1rem;
  }
`

export const AdvantageList = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  row-gap: 1.25rem;
  /* column-gap: 2.5rem; */

  margin-top: 4.125rem;
`

export const AdvantageItem = styled.div`
  display: flex;
  align-items: center;

  gap: 0.75rem;
`

interface IconBoxProps {
  variant: 'yellow' | 'yellow-dark' | 'base-text' | 'purple'
}

export const IconBox = styled.span<IconBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  color: ${({ theme }) => theme.colors.background};
  background: ${({ theme, variant }) => theme.colors[variant]};
`

export const CoffeeContainer = styled.main`
  display: flex;
  flex-direction: column;

  h2 {
    padding-top: 2rem;
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`

export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;

  padding-top: 3.375rem;
`

interface CoffeeItemContainerProps {
  isSelected: boolean
}

export const CoffeeItemContainer = styled.div<CoffeeItemContainerProps>`
  width: 256px;
  height: 310px;

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;

  background: ${({ theme }) => theme.colors['base-card']};
  border: 1px solid ${({ theme }) => theme.colors['base-card']};

  ${({ isSelected }) =>
    isSelected &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.yellow};
    `}
`

export const CoffeeItemContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 1.25rem;

  margin-top: -20px;

  img {
    width: 120px;
    height: 120px;
  }

  strong {
    margin-top: 1rem;

    font-size: 1.25rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    line-height: 26px;
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }

  p {
    margin-top: 1rem;

    text-align: center;

    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors['base-label']};
  }
`

export const BadgeContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 0.75rem;

  gap: 4px;

  span {
    font-size: 0.625rem;
    font-weight: 700;
    line-height: 13px;

    text-transform: uppercase;

    padding: 4px 8px;

    border-radius: 16px;

    background: ${({ theme }) => theme.colors['yellow-light']};
    color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`
export const CoffeeItemFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 2rem;

  width: 100%;
`

export const PriceInfo = styled.div`
  display: flex;
  align-items: center;

  margin-left: 0.5rem;

  span {
    font-size: 1.5rem;
    font-family: 'Baloo 2', sans-serif;
  }
`

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 0.5rem;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 38px;
    height: 38px;
    border: 0;
    border-radius: 6px;

    cursor: pointer;

    background: ${({ theme }) => theme.colors['purple-dark']};

    svg {
      color: ${({ theme }) => theme.colors.white};
    }

    &:hover {
      background: ${({ theme }) => theme.colors.purple};
      transition: background-color 0.2s;
    }
  }
`
