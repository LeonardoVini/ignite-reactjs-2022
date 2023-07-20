import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 58rem;
  height: 100%;
  margin: 0 auto;
  padding: 0 2rem 2rem;

  background: ${(props) => props.theme.colors['base-background']};

  display: flex;
  flex-direction: column;
`
