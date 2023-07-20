import styled from "styled-components"

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  height: 12.5rem;

  background-color: ${({ theme }) => theme.colors["gray-700"]};
`