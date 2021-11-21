import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const DesktopWrapper = styled.div`
  @media only screen and (max-width: 480px) {
    display: none;
  }
`

export const MobileWrapper = styled.div`
  @media only screen and (min-width: 481px) {
    display: none;
  }
`

export const BlogWrapper = styled.article`
  border-radius: 5px;
  box-shadow: 0 12px 24px 0 hsla(0, 0%, 0%, 0.15);
  background-color: hsl(0, 0%, 100%);
  /* max-height: 700px; */
  max-width: 310px;
  transition: transform 0.3s ease-in;
  &:hover {
    transform: translateY(-10px);
  }

`

export const LinkWrapper = styled(Link)`
  color: initial;
  text-decoration: none;
  `

export const BlogText = styled.div`
  padding: 0 2rem 2rem 2rem;
  display: flex;
  flex-flow: column;
  height: 100%;
  max-height: 330px;
`