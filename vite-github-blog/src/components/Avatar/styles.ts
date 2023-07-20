import styled from 'styled-components'

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.colors['base-profile']};

  padding: 2rem 2.5rem;

  gap: 2rem;

  border-radius: 10px;

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`

export const AvatarContent = styled.section`
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      color: ${({ theme }) => theme.colors['base-title']};
      font-size: 1.5rem;
      font-weight: 700;
    }

    a {
      display: flex;
      align-items: center;

      gap: 0.5rem;

      color: ${({ theme }) => theme.colors.blue};
      font-size: 0.75rem;
      font-weight: 700;
    }
  }

  p {
    margin-top: 0.5rem;
  }

  ul {
    display: flex;
    align-items: center;

    list-style: none;

    gap: 1.5rem;

    margin-top: 1.5rem;

    li {
      display: flex;
      align-items: center;

      gap: 0.5rem;

      svg {
        color: ${({ theme }) => theme.colors['base-label']};
      }

      span {
        color: ${({ theme }) => theme.colors['base-subtitle']};
      }
    }
  }
`
