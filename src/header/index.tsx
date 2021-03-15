// import parse from 'html-react-parser'
import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import Menu from './menu'
import styled from '@emotion/styled'
import logo from '../images/Logo.png'
import Sidebar from './sidebar'

const HeaderWrapper = styled.header`
  background-color: hsl(0, 0%, 100%);
  position: sticky;
  top: 0;
  z-index: 10;
`

const GlobalHeader = styled.header`
  display: flex;
  flex-flow: row;
  margin: 0 auto;
  max-width: 1230px;
`

const Logo = styled.img`
  @media only screen and (min-width: 1025px) {
    margin: 1.375rem 0;
  }
  @media only screen and (max-width: 1024px) {
    margin: 0 1rem;
  }
`

const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const { wpMenu } = useStaticQuery(graphql`
    query MenuQuery {
      wpMenu {
        name
        menuItems {
          nodes {
            url
            label
            id
            databaseId
          }
        }
      }
    }
  `)

  return (
    <HeaderWrapper>
      <GlobalHeader>
        <Link to="/">
          <Logo src={logo} width={158} />
        </Link>
        <div style={{ marginLeft: 'auto', display: 'flex' }}>
          <Menu toggleMenu={toggleMenu} items={wpMenu.menuItems.nodes} />
          <Sidebar toggleMenu={toggleMenu} showMenu={showMenu} items={wpMenu.menuItems.nodes} />
        </div>
      </GlobalHeader>
    </HeaderWrapper>
  )
}

export default Header
