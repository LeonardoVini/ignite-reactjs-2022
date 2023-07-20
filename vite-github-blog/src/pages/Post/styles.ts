import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: -5.125rem;
`

export const TitleContent = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors['base-profile']};

  padding: 2rem;

  border-radius: 10px;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;

      border-bottom: 2px solid transparent;
      text-decoration: none;

      gap: 0.5rem;

      color: ${({ theme }) => theme.colors.blue};

      font-size: 0.75rem;

      &:hover {
        border-bottom: 2px solid ${({ theme }) => theme.colors.blue};
      }
    }
  }

  h1 {
    margin-top: 1.25rem;
    color: ${({ theme }) => theme.colors['base-title']};
    font-size: 1.5rem;
    font-weight: 700;
  }

  ul {
    display: flex;
    align-items: center;

    list-style: none;

    gap: 2rem;

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

export const ArticleContent = styled.article`
  display: flex;
  flex-direction: column;

  padding: 2.5rem 2rem;

  img {
    width: 100%;
  }

  h1,
  h2,
  h3 {
    color: ${({ theme }) => theme.colors.blue};
  }

  ul {
    list-style: inherit;
    padding-left: 1.5rem;
  }

  pre {
    background-color: ${({ theme }) => theme.colors['base-post']};
    padding: 1rem;

    > div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;
    }

    code {
      font-family: 'FiraCode', monospace !important;
      line-height: 160% !important;
    }
  }
`
