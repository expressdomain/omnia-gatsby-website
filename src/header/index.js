// import parse from 'html-react-parser'
import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import Menu from './menu'
import styled from 'styled-components'
import logo from '../images/Logo.png'

const GlobalWrapper = styled.header`
  background-color: hsl(247, 69%, 15%);
`

const GlobalHeader = styled.header`
  display: flex;
  flex-flow: row;
  margin: 0 auto;
  max-width: 1230px;
`

const Logo = styled.img`
  @media only screen and (min-width: 416px) {
    margin: 1.375rem 0;
  }
  @media only screen and (max-width: 414px) {
    margin: 1rem;
  }
`

const Header = ({ isHomePage = false }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query HeaderQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <GlobalWrapper className="global-wrapper">
      <GlobalHeader className="global-header">
        <Link to="/">
          <Logo src={logo} width={158} />
        </Link>
        <div style={{ marginLeft: 'auto', display: 'flex' }}>
          <Menu />
        </div>
      </GlobalHeader>
    </GlobalWrapper>
  )
}

export default Header
