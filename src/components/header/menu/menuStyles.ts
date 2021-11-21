import styled from '@emotion/styled'

export const DesktopWrapper = styled.div`
  @media only screen and (max-width: 767px) {
    display: none;
  }
`

export const OpenIcon = styled.div`
  @media only screen and (min-width: 768px) {
    display: none;
  }
`

export const MenuWrapper = styled.nav`
  display: flex;
  justify-content: end;
  align-items: center;
`

export const PrimaryMenu = styled.ul`
  display: flex;
  flex-flow: row;
  list-style: none;
`

export const MenuItem = styled.li`
  margin: 0 2.5rem;
`