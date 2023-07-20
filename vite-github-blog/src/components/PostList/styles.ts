import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostListContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
`

export const Post = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2rem;
  border-radius: 10px;
  border: 2px solid transparent;
  background-color: ${({ theme }) => theme.colors['base-post']};
  text-decoration: none;

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    h1 {
      width: 100%;
      max-width: 17.5rem;
      color: ${({ theme }) => theme.colors['base-title']};
      font-size: 1.25rem;
      font-weight: 700;
    }

    span {
      color: ${({ theme }) => theme.colors['base-span']};
      font-size: 0.875rem;
    }
  }

  p {
    color: ${({ theme }) => theme.colors['base-text']};
  }

  &:hover {
    transition: border-color 0.2s;
    border: 2px solid ${({ theme }) => theme.colors['base-label']};
  }
`
