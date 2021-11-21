import styled from '@emotion/styled'

export const HeaderWrapper = styled.header`
  background-color: hsl(0, 0%, 100%);
  position: sticky;
  top: 0;
  z-index: 10;
`

export const GlobalHeader = styled.header`
  display: flex;
  flex-flow: row;
  margin: 0 auto;
  max-width: 1230px;
`

export const Logo = styled.img`
  @media only screen and (min-width: 1025px) {
    margin: 1.375rem 0;
  }
  @media only screen and (max-width: 1024px) {
    margin: 0 1rem;
  }
`